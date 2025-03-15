import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Développeur Web Full Stack
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Je crée des applications web modernes et performantes avec les dernières technologies.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/projets"
          className="inline-flex items-center justify-center rounded-md bg-blue-200 px-6 py-3 text-sm font-medium text-blue-400-foreground  hover:bg-blue-90"
      >
          Voir mes projets
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm  hover:bg-accent hover:bg-blue-900">
          Me contacter
        </Link>
      </div>
      <div className="mt-8 flex gap-4">
        <a
          href="#/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition-colors hover:bg-accent">

          <Github className="h-6 w-6 text-red-400" />
          <span className="sr-only bg-blue-300">GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition-colors hover:bg-accent"
        >
          <Linkedin className="h-6 w-6 text-red-900" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:contact@example.com"
          className="rounded-full p-2 transition-colors hover:bg-accent"
          >

          <Mail className="h-6 w-6 text-blue-900" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  );
}