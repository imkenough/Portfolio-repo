"use client";

import * as React from "react";
import Link from "next/link";
import { RiBlueskyLine, RiGithubLine, RiMailAddLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container-swiss py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-12">
          <div className="space-y-2 max-w-md text-center md:text-left">
            <h3 className="text-base font-medium">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              A clean and minimalist showcase of my projects and tech blog{" "}
              <br className="hidden sm:block" />
              posts, inspired by Swiss design principles.
            </p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-base font-medium">Links</h3>
            <nav className="flex flex-row justify-center md:justify-start space-x-4">
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-base font-medium">Connect</h3>
            <nav className="flex flex-row justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/imkenough"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <RiGithubLine className="h-6 w-6" />
              </a>
              <a
                href="https://bsky.app/profile/imkenough9818.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                aria-label="Bluesky"
              >
                <RiBlueskyLine className="h-6 w-6" />
              </a>
              <a
                href="mailto:khaneesh50@gmail.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <RiMailAddLine className="h-6 w-6" />
              </a>
            </nav>
          </div>
        </div>
        {/* <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} Haneesh Kenny. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
