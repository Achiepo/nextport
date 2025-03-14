import { auth, database } from "@/db/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const {name, email, password,message } = await req.json()
   try {
    const info = await createUserWithEmailAndPassword(auth, email, password)
    const id = info.user.uid
    const data = {name, email, password,message, createDate: new Date(), id}
    
    //Créer un document dont c'est nous meme qui donnons l'id
    await setDoc(doc(database, "users", id), data)
    console.log('Utilisateur ajouté à la base de données:', id)
    return NextResponse.json({data})
   } catch (error) {
    console.log("Erreur Firebase:", error);
    return NextResponse.json({
        error: "Une erreur s'est produite",
        message: message || "Aucune description de l'erreur disponible",
        code: "Code d'erreur inconnu"
    }, { status: 500 });
   }
}