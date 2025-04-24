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
import {
  ArrowRight,
  Github,
  Globe,
  Code,
  PenTool,
  Database,
  Server,
  Star,
  GitFork,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { getEnhancedRepositories } from "@/lib/github";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    title: "Frontend Development",
    icon: <Globe className="h-10 w-10 mb-2 text-primary" />,
    description:
      "Building responsive, user-friendly interfaces with modern web technologies and frameworks.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10 mb-2 text-primary" />,
    description:
      "Developing server-side applications, APIs, and integrating machine learning models.",
    items: ["Node.js", "Express", "Python", "REST APIs", "TensorFlow", "Keras"],
  },
  {
    title: "Database Management",
    icon: <Database className="h-10 w-10 mb-2 text-primary" />,
    description:
      "Designing efficient, scalable database systems and handling large datasets.",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Developer Tools",
    icon: <Code className="h-10 w-10 mb-2 text-primary" />,
    description:
      "Using industry-standard tools and practices to streamline development and ensure quality.",
    items: ["Git", "Testing", "Performance Optimization", "Jupyter Notebooks"],
  },
];

export default async function Home() {
  // Fetch featured repositories from GitHub
  const repos = await getEnhancedRepositories("imkenough", { per_page: 3 });

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-28 bg-background border-b border-gray-300 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">
              Hi, I'm <span className="text-primary">Haneesh Kenny</span>
            </h1>
            <p className="muted-text max-w-[42rem] px-4 md:px-0 text-sm sm:text-base">
              I'm a college student aspiring to become a Full-Stack Developer,
              with a focus on building modern web applications and exploring
              Machine Learning projects. I also enjoy sharing what I learn
              through <i>wannabe</i> blogging.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/blog">Read My Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              Featured Projects
            </h2>
            <p className="muted-text max-w-[42rem] px-4 md:px-0 text-sm sm:text-base">
              A selection of my recent projects, showcasing my skills and
              interests.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {repos.map((project) => {
              // Format topics to be more readable
              const formattedTopics = project.topics.map((topic) =>
                topic.replaceAll("-", " ").replaceAll("_", " ")
              );

              return (
                <Card
                  key={project.id}
                  className="flex flex-col h-full hover-lift"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>
                        {project.name.replaceAll("-", " ").replaceAll("_", " ")}
                      </span>
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
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="hover-scale"
                    >
                      <Link
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    {project.homepage && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover-scale"
                      >
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
            })}
          </div>
          <div className="flex justify-center mt-8 md:mt-12">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              Skills & Experience
            </h2>
            <p className="muted-text max-w-[42rem] px-4 md:px-0 text-sm sm:text-base">
              The technologies and tools I specialize in for building modern web
              and machine learning applications
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill) => (
              <Card key={skill.title} className="h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">{skill.icon}</div>
                  <CardTitle className="mt-2">{skill.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-6 max-w-[42rem] mx-auto">
            <h2>Let's Work Together</h2>
            <p className="muted-text">
              I'm always open to new opportunities and collaborations. Check out
              my projects, read my blog, or get in touch to discuss your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
