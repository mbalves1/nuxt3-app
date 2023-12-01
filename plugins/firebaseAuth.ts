import { initializeApp } from "firebase/app";
export default defineNuxtPlugin(nuxtApp => {

  const firebaseConfig = {
    apiKey: "AIzaSyBda-DX_RYl0tbRGHWwfBjKqX8sfGAYk4g",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);
})
