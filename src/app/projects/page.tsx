import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, GitFork, Eye, ArrowUpRight, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getEnhancedRepositories, type Repository } from "@/lib/github";

export const metadata: Metadata = {
  title: "Projects | Portfolio & Blog",
  description: "Explore my GitHub projects and other work",
};

// Fallback projects in case GitHub API fails
const fallbackProjects: Repository[] = [
  {
    id: 1,
    name: "portfolio-blog",
    description: "My personal portfolio and blog website",
    html_url: "https://github.com/imkenough/portfolio-blog",
    homepage: "",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    topics: ["nextjs", "react", "typescript", "portfolio"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Helper function to categorize projects
function categorizeProjects(projects: Repository[]) {
  const webTopics = [
    "react",
    "nextjs",
    "vue",
    "angular",
    "web",
    "frontend",
    "webapp",
  ];
  const backendTopics = ["api", "backend", "server", "nodejs", "express"];
  const mlTopics = [
    "machine-learning",
    "ai",
    "ml",
    "deep-learning",
    "data-science",
    "neural-network",
    "tensorflow",
    "pytorch",
    "scikit-learn",
    "computer-vision",
    "nlp",
    "natural-language-processing",
  ];

  return {
    all: projects,
    web: projects.filter(
      (project) =>
        project.topics.some((topic) => webTopics.includes(topic)) ||
        project.language === "JavaScript" ||
        project.language === "TypeScript"
    ),
    backend: projects.filter((project) =>
      project.topics.some((topic) => backendTopics.includes(topic))
    ),
    ml: projects.filter((project) =>
      project.topics.some((topic) => mlTopics.includes(topic))
    ),
    other: projects.filter(
      (project) =>
        !project.topics.some((topic) =>
          [...webTopics, ...backendTopics, ...mlTopics].includes(topic)
        ) &&
        project.language !== "JavaScript" &&
        project.language !== "TypeScript"
    ),
  };
}

export default async function ProjectsPage() {
  // Fetch real repositories from GitHub
  const repos = await getEnhancedRepositories("imkenough", { per_page: 10 });
  const projects = repos.length > 0 ? repos : fallbackProjects;

  // Categorize projects
  const categorizedProjects = categorizeProjects(projects);

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground max-w-[42rem]">
          A collection of my GitHub projects, open-source contributions, and
          other work.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Applications</TabsTrigger>
            <TabsTrigger value="backend">Backend Projects</TabsTrigger>
            <TabsTrigger value="ml">ML Projects</TabsTrigger>
            <TabsTrigger value="other">Other Projects</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedProjects.all.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedProjects.web.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="backend" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedProjects.backend.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ml" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedProjects.ml.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="other" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedProjects.other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 p-8 bg-muted rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
        <p className="mb-6 text-muted-foreground">
          Check out my GitHub profile for more projects and contributions.
        </p>
        <Button asChild>
          <Link
            href="https://github.com/imkenough"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5" /> Visit My GitHub Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Repository }) {
  // Format topics to be more readable
  const formattedTopics = project.topics.map((topic) =>
    topic.replaceAll("-", " ").replaceAll("_", " ")
  );

  return (
    <Card className="flex flex-col h-full hover-lift">
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          <span>{project.name.replaceAll("-", " ").replaceAll("_", " ")}</span>
          {project.language && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary">
              {project.language}
            </span>
          )}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {formattedTopics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {formattedTopics.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
            {formattedTopics.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                +{formattedTopics.length - 4} more
              </span>
            )}
          </div>
        )}
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="mr-1 h-4 w-4" />
            <span>{project.forks_count}</span>
          </div>
          <div className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            <span>{project.watchers_count}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm" className="hover-scale">
          <Link
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> Code
          </Link>
        </Button>
        {project.homepage && (
          <Button asChild variant="outline" size="sm" className="hover-scale">
            <Link
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
