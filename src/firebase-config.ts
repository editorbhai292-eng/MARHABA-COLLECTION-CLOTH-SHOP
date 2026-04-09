{ initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 1. Naya Config yahan paste karein
const firebaseConfig = {
  apiKey: "AIzaSyD5EB-4kPO-iqAGlEwzKWJRwAc5g1OCENo",
  authDomain: "marhaba-collection-cloth-shop.firebaseapp.com",
  projectId: "marhaba-collection-cloth-shop",
  storageBucket: "marhaba-collection-cloth-shop.firebasestorage.app",
  messagingSenderId: "599620508270",
  appId: "1:599620508270:web:4f72cdfdd50509652e247f",
  measurementId: "G-RYD8HVQEMJ"
};

// 2. Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3. Ye
export { app, analytics, firebaseConfig };
