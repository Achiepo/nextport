"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // Ajout de l'état pour gérer les messages
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false); // Gérer si c'est une erreur

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Réinitialisation du message avant l'envoi
    setIsError(false); // Réinitialisation de l'état d'erreur

    try {
      const req = await fetch("/serveur/sign-up", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ formData }),
      });

      const res = await req.json();
      console.log(res.data);

      if (res && res.data) {
        console.log(res.data);
        setMessage("Message envoyé avec succès");
        localStorage.setItem("user", JSON.stringify(res.data));
      } else {
        console.log("Erreur lors de l'envoi du message");
        setMessage("Une erreur est survenue. Veuillez réessayer.");
        setIsError(true); // Marquer l'état comme erreur
      }
    } catch (error) {
      console.error("Erreur de connexion");
      setMessage("Une erreur est survenue. Veuillez réessayer.");
      setIsError(true); // Marquer l'état comme erreur
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Contact</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Parlons de votre projet</h2>
              <p className="text-muted-foreground">
                N'hésitez pas à me contacter pour discuter de vos besoins en
                développement web.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>05 02 18 97 82</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Riviera 4, Ciad</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Nom et prénom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border bg-background px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border bg-background px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full rounded-md border bg-background px-3 py-2"
                required
              />
            </div>
            {/* Affichage du message */}
            {message && (
              <div
                className={`mt-4 p-3 text-center text-white rounded-md ${isError ? 'bg-red-500' : 'bg-green-500'}`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-blue-500-foreground hover:bg-blue-300 disabled:opacity-50 cursor-pointer"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
