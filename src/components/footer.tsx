"use client";

import * as React from "react";
import Link from "next/link";
import { RiBlueskyLine, RiGithubLine, RiMailAddLine } from "react-icons/ri";
export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">imkenough</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my projects and blog posts about tech.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/imkenough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiGithubLine className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://bsky.app/profile/imkenough9818.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiBlueskyLine className="h-6 w-6" />
                <span className="sr-only">BlueSky</span>
              </Link>
              <Link
                href="mailto:khaneesh50@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiMailAddLine className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
