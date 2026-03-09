import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import firebaseConfig from "./firebaseConfig";

let app;
let db;
let auth;
let database;

try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  database = getDatabase(app);
} catch (error) {
  console.warn('Firebase initialization failed:', error.message);
  // Create mock objects for development
  db = null;
  auth = null;
  database = null;
}

export { db, auth, database };
export default app;
