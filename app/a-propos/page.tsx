import { Code2, Database, Globe2, Laptop } from "lucide-react";

const skills = [
  {
    category: "Front-end",
    icon: Laptop,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    icon: Database,
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Autres",
    icon: Globe2,
    items: ["Git", "Docker"],
  },
];

export default function About() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl space-y-12">
        <section>
          <h1 className="mb-4 text-3xl font-bold text-center">À propos de moi</h1>
          <p className="text-lg text-muted-foreground">
            Je suis Achiepo Sachiel Yvan&apos;s, développeur web passionné par la création d&apos;applications
            web modernes et performantes. Je m&apos;efforce de créer des
            solutions élégantes et efficaces pour répondre aux besoins des
            utilisateurs.
          </p>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-semibold">Compétences</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.category}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6" />
                    <h3 className="text-xl font-medium">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
