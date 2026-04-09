import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Ye add kiya
import { getStorage } from "firebase/storage"; // Ye add kiya

const firebaseConfig = {
  apiKey: "AIzaSyD5EB-4kPO-iqAGlEwzKWJRwAc5g1OCENo",
  authDomain: "marhaba-collection-cloth-shop.firebaseapp.com",
  projectId: "marhaba-collection-cloth-shop",
  storageBucket: "marhaba-collection-cloth-shop.firebasestorage.app",
  messagingSenderId: "59920508270",
  appId: "1:599620508270:web:4f72cdfdd50509652e247f",
  measurementId: "G-RYD8HVQEMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Database connection
const storage = getStorage(app); // Storage connection

export { app, analytics, db, storage, firebaseConfig };
