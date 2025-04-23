import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getBlogPostBySlug, getBlogPosts, type BlogPost } from "@/lib/notion";

// Add dynamic configuration
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          <Separator />
        </div>

        {/* Post content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold tracking-tight mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold tracking-tight mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 text-muted-foreground">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="mb-2">{children}</li>,
              code: ({ children, className }) => (
                <code
                  className={`bg-secondary/50 px-1 py-0.5 rounded ${className}`}
                >
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-secondary/50 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="rounded-lg border border-border my-4"
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Share links */}
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Share this post:
              </span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(
                    `https://yourwebsite.com/blog/${post.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
