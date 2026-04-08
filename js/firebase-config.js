import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TAIzaSyA6MwI4jb3WCB7zS22drrQVd9F045g-sac",
  authDomain: "riocontainer.firebaseapp.com",
  projectId: "riocontainer",
  storageBucket: "riocontainer.firebasestorage.app",
  messagingSenderId: "124480610032",
  appId: "1:124480610032:web:211347945a005a2920ec35"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase conectado correctamente");
console.log("Firestore listo:", db);

export { app, db };