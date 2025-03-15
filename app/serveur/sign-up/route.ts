import { auth, database } from "@/db/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { name, email, password, message } = await req.json();

    // Validation des données
    if (!email || !email.includes("@")) {
        return NextResponse.json({ error: "Email invalide" });
    }

    if (!password || password.length < 6) {
        return NextResponse.json({ error: "Le mot de passe doit comporter au moins 6 caractères" });
    }

    try {
        // Création de l'utilisateur avec Firebase Auth
        const info = await createUserWithEmailAndPassword(auth, email, password);
        const id = info.user.uid;

        // Création de l'objet utilisateur sans le mot de passe
        const userData = { name, email, message, createDate: new Date(), id };

        // Ajouter l'utilisateur à la base de données Firestore
        await setDoc(doc(database, "users", id), userData);

        console.log('Utilisateur ajouté à la base de données:', id);
        return NextResponse.json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
        console.log("Erreur Firebase:", (error as any).e);
        console.log("Code de l'erreur:",(error as any).code);
        return NextResponse.json({ error: "Une erreur s'est produite", details: message });
    }
};
