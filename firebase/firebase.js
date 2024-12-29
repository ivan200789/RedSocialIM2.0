import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyARaTVn51Y2xUEdAf6jdUZBZfdm8kraDE0",
  authDomain: "mockups-f903c.firebaseapp.com",
  projectId: "mockups-f903c",
  storageBucket: "mockups-f903c.firebasestorage.app",
  messagingSenderId: "699015933564",
  appId: "1:699015933564:web:ef4705c4eed8c7b6a0a3f9",
  measurementId: "G-7EENMJ6CPD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export async function registrarUsuario(nombre, email, password) {
  try {
    // Create user in Firebase Authentication (without storing password in Firestore)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Obtain the UID of the newly created user
    const uid = userCredential.user.uid;

    // Add user to Firestore (excluding password)
    await addDoc(collection(db, "usuarios"), {
      uid,
      nombre,
      email, // Include email for authentication
    });

    console.log("Usuario registrado exitosamente");
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}