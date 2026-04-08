import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const contenedoresRef = collection(db, "contenedores");

export async function guardarContenedor(data) {
  try {
    const docRef = await addDoc(contenedoresRef, data);
    console.log("Documento guardado con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar documento:", error);
  }
}

export async function obtenerContenedores() {
  try {
    const snapshot = await getDocs(contenedoresRef);

    const contenedores = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("Contenedores obtenidos:", contenedores);
    return contenedores;
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    return [];
  }
}