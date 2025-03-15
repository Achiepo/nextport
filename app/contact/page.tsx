"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // Déclaration des états pour chaque champ de formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState(""); // Pour afficher le message de succès ou d'erreur
  const [isError, setIsError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(""); // Réinitialisation du message avant l'envoi
    setIsError(false); // Réinitialisation de l'état d'erreur
    setLoading(true); // Activer le chargement

    try {
      // Attente simulée de 2 secondes (2000ms) avant d'envoyer la requête
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulation d'un délai de 2 secondes

      // Envoi des données sans utiliser formData
      const req = await fetch("/serveur/sign-up", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ name, email, password, message }), // On envoie directement les champs
      });

      const res = await req.json();
      console.log(res.data);

      if (res && res.data) {
        setFormMessage("Message envoyé avec succès");
        localStorage.setItem("user", JSON.stringify(res.data));
      } else {
        setFormMessage("Une erreur est survenue. Veuillez réessayer.(vous avez déja envoyer de message)");
        setIsError(true); // Marquer l'état comme erreur
      }
    } catch (err) {
      console.error("Erreur de connexion", err);
      setFormMessage("Une erreur est survenue. Veuillez réessayer ou vous avez deja envoyer un message.");
      setIsError(true); // Marquer l'état comme erreur
    } finally {
      setLoading(false); // Désactiver le chargement après l'envoi du message
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-center">Contact</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Parlons de votre projet</h2>
              <p className="text-muted-foreground">
                N&apos;hésitez pas à me contacter pour discuter de vos besoins en
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border bg-background px-3 py-2"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe doit être au moins 8 caractères"
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-md border bg-background px-3 py-2"
                required
              />
            </div>

            {/* Affichage du message */}
            {formMessage && (
              <div
                className={`mt-4 p-3 text-center text-white rounded-md ${isError ? "bg-red-500" : "bg-green-500"}`}
              >
                {formMessage}
              </div>
            )}

            {/* Affichage du loading */}
            {isLoading && (
              <div className="mt-4 p-3 text-center text-blue-500">
                En cours d&apos;envoi...
              </div>
            )}

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 disabled:opacity-50 cursor-pointer"
              disabled={isLoading} 
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
