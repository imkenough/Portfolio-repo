import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  MessageSquare,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import { RiBlueskyLine, RiGithubLine, RiMailAddLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "imkenough | About",
  description: "Learn more about me, my background, and my skills",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="mb-4">About Me</h1>
          <p className="muted-text">
            Full-stack developer passionate about building modern web
            applications and sharing knowledge.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mb-12">
          <div className="w-full md:w-auto order-1 md:order-2 space-y-6">
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      HK
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                  <Button asChild size="icon" variant="ghost">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubLine className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="ghost">
                    <Link
                      href="https://bsky.app/profile/imkenough9818.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiBlueskyLine className="h-6 w-6" />
                      <span className="sr-only">BlueSky</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="ghost">
                    <Link href="mailto:khaneesh50@gmail.com">
                      <RiMailAddLine className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>

                <Button asChild className="w-full">
                  <Link href="kenny_resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4 w-full">
              <h3 className="font-semibold text-center md:text-left">
                My Skills
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between small-text mb-1">
                    <span>HTML/CSS</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between small-text mb-1">
                    <span>JavaScript/TypeScript</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between small-text mb-1">
                    <span>React/Next.js</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between small-text mb-1">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between small-text mb-1">
                    <span>Machine Learning</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:col-span-2 order-2 md:order-1 space-y-6">
            <section>
              <h2 className="mb-4">Hello, I'm Haneesh Kenny</h2>
              <p className="mb-4">
                Hi! I'm a passionate web developer and machine learning
                enthusiast with a keen interest in building intelligent,
                user-focused applications. I've worked on several projects
                during my time in college and enjoy bringing ideas to life
                through code.
              </p>
              <p className="mb-4">
                I started programming in college, where I developed a strong
                interest in building things for the web and exploring machine
                learning. Since then, I've been learning
                continuously-experimenting with AI, creating useful tools, and
                working on projects that solve real-world problems.
              </p>
              <p>
                When I'm not coding, I enjoy long bike rides, zoning out to
                music, and occasionally diving into a good read. I try to keep
                things balanced and find inspiration from the world around me.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4">Education</h2>
              <div>
                <h3 className="font-semibold">Bachelor of Engineering</h3>
                <p className="small-text muted-text mb-2">
                  Manipal University Jaipur • 2022 - 2026
                </p>
                <p className="muted-text">
                  Major in Data Science, Focused on Data Analysis, Software
                  Engineering, Artificial Intelligence, Machine Learning
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">
                    <i>
                      nill as of{" "}
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </i>
                  </h3>
                </div>
                {/* <div>
                  <h3 className="font-semibold">Senior Full-Stack Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Example Company • 2021 - Present
                  </p>
                  <p className="text-muted-foreground">
                    Leading development of a modern SaaS platform, architecting
                    new features, and mentoring junior developers. Implemented
                    CI/CD pipelines and improved application performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Full-Stack Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Another Company • 2018 - 2021
                  </p>
                  <p className="text-muted-foreground">
                    Developed and maintained multiple web applications using
                    React, Node.js, and MongoDB. Collaborated with UX designers
                    to improve user experience and implemented RESTful APIs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Frontend Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    First Job Inc. • 2016 - 2018
                  </p>
                  <p className="text-muted-foreground">
                    Created responsive websites using HTML, CSS, and JavaScript.
                    Collaborated with the design team to implement pixel-perfect
                    UIs and ensure cross-browser compatibility.
                  </p>
                </div> */}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="mb-4">Interested in working together?</h2>
          <p className="muted-text mb-6 max-w-[42rem] mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="mailto:khaneesh50@gmail.com">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
