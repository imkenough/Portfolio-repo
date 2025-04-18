import { Client } from "@notionhq/client";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not defined");
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error("NOTION_DATABASE_ID is not defined");
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

function processRichText(richText: any[]): string {
  return richText
    .map((text) => {
      let content = text.plain_text;
      if (text.annotations.bold) content = `**${content}**`;
      if (text.annotations.italic) content = `*${content}*`;
      if (text.annotations.code) content = `\`${content}\``;
      if (text.annotations.strikethrough) content = `~~${content}~~`;
      if (text.href) content = `[${content}](${text.href})`;
      return content;
    })
    .join("");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        status: {
          equals: "Done",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    console.log("Database properties:", response.results[0]?.properties);

    const posts = await Promise.all(
      response.results.map(async (page: any) => {
        try {
          console.log("Page properties:", page.properties);

          const title = page.properties.Title?.title?.[0]?.plain_text || "";
          const slug = page.properties.Slug?.rich_text?.[0]?.plain_text || "";
          const excerpt =
            page.properties.Excerpt?.rich_text?.[0]?.plain_text || "";
          const date = page.properties.Date?.date?.start || "";
          const readTime =
            page.properties.ReadTime?.rich_text?.[0]?.plain_text ||
            "5 min read"; // Default value
          const tags =
            page.properties.Tags?.multi_select?.map((tag: any) => tag.name) ||
            [];

          console.log("ReadTime value:", readTime);

          // Fetch the page content
          const blocks = await notion.blocks.children.list({
            block_id: page.id,
          });

          const content = blocks.results
            .map((block: any) => {
              switch (block.type) {
                case "paragraph":
                  return processRichText(block.paragraph.rich_text);
                case "heading_1":
                  return `# ${processRichText(block.heading_1.rich_text)}`;
                case "heading_2":
                  return `## ${processRichText(block.heading_2.rich_text)}`;
                case "heading_3":
                  return `### ${processRichText(block.heading_3.rich_text)}`;
                case "bulleted_list_item":
                  return `- ${processRichText(
                    block.bulleted_list_item.rich_text
                  )}`;
                case "numbered_list_item":
                  return `1. ${processRichText(
                    block.numbered_list_item.rich_text
                  )}`;
                case "code":
                  return `\`\`\`${block.code.language}\n${processRichText(
                    block.code.rich_text
                  )}\n\`\`\``;
                case "quote":
                  return `> ${processRichText(block.quote.rich_text)}`;
                case "divider":
                  return "---";
                case "image":
                  return `![${block.image.caption?.[0]?.plain_text || ""}](${
                    block.image.file?.url || block.image.external?.url
                  })`;
                case "callout":
                  return `> ${processRichText(block.callout.rich_text)}`;
                default:
                  return "";
              }
            })
            .filter(Boolean)
            .join("\n\n");

          return {
            id: page.id,
            title,
            slug,
            excerpt,
            content,
            date,
            readTime,
            tags,
          };
        } catch (error) {
          console.error("Error processing page:", error);
          return null;
        }
      })
    );

    return posts.filter((post): post is BlogPost => post !== null);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
