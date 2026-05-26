/**
 * Aditya Graphics - Admin API
 * Vercel serverless function. All writes to Firestore go through here.
 * Password is verified server-side before any write is allowed.
 * The Firebase Admin SDK bypasses Firestore security rules.
 */

const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore }                  = require('firebase-admin/firestore');
const crypto                            = require('crypto');

function initFirebase() {
  if (getApps().length > 0) return;
  initializeApp({
    credential: cert({
      projectId:   process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

function sha256(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

async function verifyPassword(db, password) {
  if (!password) return false;

  // Check if a custom password hash is stored in Firestore
  try {
    const snap = await db.collection('site').doc('_auth').get();
    if (snap.exists && snap.data().hash) {
      return sha256(password) === snap.data().hash;
    }
  } catch (e) { /* fall through to env var check */ }

  // Fall back to the ADMIN_PASSWORD environment variable (initial setup)
  return password === process.env.ADMIN_PASSWORD;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  initFirebase();
  const db = getFirestore();

  const { action, doc, data, password, newPassword } = req.body || {};

  // Every action requires a valid password
  const valid = await verifyPassword(db, password);
  if (!valid) {
    return res.status(401).json({ error: 'Incorrect password. Please try again.' });
  }

  try {
    // ── VERIFY (login check) ──────────────────────────────────────
    if (action === 'verify') {
      return res.json({ success: true });
    }

    // ── SAVE (brand / portfolio / pricing) ────────────────────────
    if (action === 'save') {
      const allowed = ['brand', 'portfolio', 'pricing'];
      if (!allowed.includes(doc)) {
        return res.status(400).json({ error: 'Invalid document name.' });
      }
      await db.collection('site').doc(doc).set(data);
      return res.json({ success: true });
    }

    // ── CHANGE PASSWORD ───────────────────────────────────────────
    if (action === 'changePassword') {
      if (!newPassword || newPassword.length < 6) {
        return res.status(400).json({ error: 'New password must be at least 6 characters.' });
      }
      const newHash = sha256(newPassword);
      await db.collection('site').doc('_auth').set({ hash: newHash });
      return res.json({ success: true });
    }

    return res.status(400).json({ error: 'Unknown action.' });

  } catch (e) {
    console.error('[Admin API Error]', e);
    return res.status(500).json({ error: e.message });
  }
};
