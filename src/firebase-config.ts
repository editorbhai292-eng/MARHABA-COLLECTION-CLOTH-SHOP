// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5EB-4kPO-iqAGlEwzKWJRwAc5g1OCENo",
  authDomain: "marhaba-collection-cloth-shop.firebaseapp.com",
  projectId: "marhaba-collection-cloth-shop",
  storageBucket: "marhaba-collection-cloth-shop.firebasestorage.app",
  messagingSenderId: "599620508270",
  appId: "1:599620508270:web:4f72cdfdd50509652e247f",
  measurementId: "G-RYD8HVQEMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics, firebaseConfig };
