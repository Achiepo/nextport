import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Agence de voyage",
    description: "Une plateforme de réservation de voyages complète avec gestion des réservations, paiements et gestion des itinéraires",
    image: "/images/capture 6.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com",
    demo: "https://agencevox.vercel.app",
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches avec fonctionnalités collaboratives",
    image: "/images/Screenshot - 2025-01-27 21-48-09.png",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://chipper-travesseiro-427819.netlify.app/",
  },
  {
    title: "Phama-modern",
    description: "Nous vous offrons des conseils personnalisés pour répondre à tous vos besoins de santé. Notre priorité",
    image: "/images/capture 2.png", 
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com",
    demo: "https://majestic-clafoutis-ba256a.netlify.app",
  },
];

export default function Projects() {
  return (
    <div className="container py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Mes Projets</h1>
      <div className="flex justify-center">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg sm:m-4">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">{project.title}</h2>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {/* Icone GitHub */}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 text-blue-900" />
                    Démo live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
