import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (ensure you replace placeholders!)
const firebaseConfig = {
  apiKey: "AIzaSyBhbjdUDZF5HiPGa5QzubokGQclYZ8owwg",
  authDomain: "fastbite-8ee21.firebaseapp.com",
  projectId: "fastbite-8ee21",
  storageBucket: "fastbite-8ee21.firebasestorage.app",
  messagingSenderId: "881440128216",
  appId: "1:881440128216:web:24a430962170aa04b2ebad"
};

// Initialize Firebase - do this FIRST!
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get a Firestore instance

console.log("Firebase config:", firebaseConfig); //Check config object
console.log("Firebase app initialized:", app);  //Check if app initialized
console.log("Firestore instance:", db);  //Check firestore instance

export {db}; // Export the Firestore instance
