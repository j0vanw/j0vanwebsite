// firebase.js
import app from "./firebase-config.js";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions"; // Only if needed

const auth = getAuth(app);
const firebaseFunctions = getFunctions(app); // Optional

export { auth, firebaseFunctions }; // Only export what you actually use
