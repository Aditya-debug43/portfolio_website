/**
 * Aditya Graphics - Firebase Client Configuration
 *
 * ─── SETUP INSTRUCTIONS ───────────────────────────────────────────────────
 * 1. Go to https://console.firebase.google.com
 * 2. Create a project (or open your existing one)
 * 3. Click the </> (Web) icon to add a web app
 * 4. Copy the firebaseConfig values below from the Firebase setup screen
 * 5. Save this file and push to GitHub — Vercel will redeploy automatically
 * ──────────────────────────────────────────────────────────────────────────
 */

const firebaseConfig = {
  apiKey: "AIzaSyD027NRW1Nc3ZAo5BHTpxeipNQvG5MRfz8",
  authDomain: "adityagraphics.firebaseapp.com",
  projectId: "adityagraphics",
  storageBucket: "adityagraphics.firebasestorage.app",
  messagingSenderId: "116024945668",
  appId: "1:116024945668:web:0c17dda2559faad12e9951"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
