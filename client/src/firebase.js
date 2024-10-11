// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "findmynest-85fd6.firebaseapp.com",
  projectId: "findmynest-85fd6",
  storageBucket: "findmynest-85fd6.appspot.com",
  messagingSenderId: "818067459798",
  appId: "1:818067459798:web:bf71ba3b435440cbb8c377",
  measurementId: "G-4QV5J24RLX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
