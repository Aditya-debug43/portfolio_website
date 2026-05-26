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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
