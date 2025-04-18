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

// const skills = [
//   {
//     title: "Frontend Development",
//     icon: <Globe className="h-10 w-10 mb-2 text-primary" />,
//     description:
//       "Creating responsive and accessible user interfaces with modern frameworks and libraries.",
//     items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
//   },
//   {
//     title: "Backend Development",
//     icon: <Server className="h-10 w-10 mb-2 text-primary" />,
//     description:
//       "Building robust and scalable server-side applications and APIs.",
//     items: ["Node.js", "Express", "Python", "REST APIs"],
//   },
//   {
//     title: "Database Management",
//     icon: <Database className="h-10 w-10 mb-2 text-primary" />,
//     description:
//       "Designing and implementing database schemas and efficient queries.",
//     items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
//   },
//   {
//     title: "Developer Tools",
//     icon: <Code className="h-10 w-10 mb-2 text-primary" />,
//     description:
//       "Leveraging various tools and practices for efficient development workflows.",
//     items: ["Git", "Docker", "CI/CD", "Testing", "Performance Optimization"],
//   },
// ];

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
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Haneesh Kenny</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[42rem]">
              Full-stack developer focused on building modern web applications,
              Machine Learning Projects and sharing knowledge through{" "}
              <i>wannabe</i> blogging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-[42rem]">
              A selection of my recent projects, showcasing my skills and
              interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((project) => {
              // Format topics to be more readable
              const formattedTopics = project.topics.map((topic) =>
                topic.replaceAll("-", " ").replaceAll("_", " ")
              );

              return (
                <Card key={project.id} className="flex flex-col h-full">
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
                    <Button asChild variant="default" size="sm">
                      <Link
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    {project.homepage && (
                      <Button asChild variant="outline" size="sm">
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
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Skills & Experience
            </h2>
            <p className="text-muted-foreground max-w-[42rem]">
              The technologies and tools I specialize in for building modern web
              and machine learning applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title} className="h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {item}
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
            <h2 className="text-3xl font-bold tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground">
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
