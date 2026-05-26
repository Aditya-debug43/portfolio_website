/**
 * Aditya Graphics - Data Handler
 * Reads data from Firebase Firestore (synced across ALL devices).
 * Writes go through /api/admin (password-verified server-side).
 * Falls back to local JSON files if Firestore is empty (first deploy).
 */

// ── IN-MEMORY CACHE (avoids redundant Firestore reads per page load) ──

const _cache = {};
const CACHE_TTL = 30000; // 30 seconds

function cacheGet(key) {
  const entry = _cache[key];
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data;
  return null;
}

function cacheSet(key, data) {
  _cache[key] = { data, ts: Date.now() };
}

function cacheInvalidate(key) {
  delete _cache[key];
}

// ── READ FROM FIRESTORE ─────────────────────────────────────────────

async function firestoreGet(docName) {
  const cached = cacheGet(docName);
  if (cached) return cached;

  try {
    if (!window.db) throw new Error('Firebase not ready');
    const snap = await window.db.collection('site').doc(docName).get();
    if (snap.exists) {
      cacheSet(docName, snap.data());
      return snap.data();
    }
  } catch (e) {
    console.warn('[Firestore] Read failed for "' + docName + '":', e.message);
  }
  return null;
}

// ── WRITE VIA SECURE API ────────────────────────────────────────────

window.saveToCloud = async function(docName, data, passwordOverride) {
  const password = passwordOverride || sessionStorage.getItem('ag_auth') || '';
  const res = await fetch('/api/admin', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ action: 'save', doc: docName, data, password }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Save failed');
  cacheInvalidate(docName); // Force fresh read on next load
  return true;
};

// ── BRAND ───────────────────────────────────────────────────────────

window.loadBrand = async function() {
  const remote = await firestoreGet('brand');
  if (remote) return remote;

  // First-deploy fallback: read from local brand.json
  try {
    const res = await fetch('assets/data/brand.json');
    if (res.ok) {
      const data = await res.json();
      // Strip any legacy password field from the public JSON
      delete data.pwd;
      return data;
    }
  } catch (e) {}

  return {
    name:  'Aditya Graphics',
    tag:   'Jacquard Design Studio',
    logo:  '',
    wa:    '919999999999',
    email: 'adityagraphics886@gmail.com',
  };
};

// saveBrandData is called by main.js — now writes to Firestore via API
window.saveBrandData = async function(data) {
  await window.saveToCloud('brand', data);
  cacheSet('brand', data); // Update local cache immediately
};

// ── PORTFOLIO ───────────────────────────────────────────────────────

window.loadPortfolio = async function() {
  const remote = await firestoreGet('portfolio');
  if (remote && Array.isArray(remote.items)) return remote.items;

  // First-deploy fallback
  try {
    const res = await fetch('assets/data/portfolio.json');
    if (res.ok) return await res.json();
  } catch (e) {}

  return [];
};

// ── PRICING ─────────────────────────────────────────────────────────

window.loadPricing = async function() {
  const remote = await firestoreGet('pricing');
  if (remote && Array.isArray(remote.rows)) return remote.rows;

  // First-deploy fallback
  try {
    const res = await fetch('assets/data/products.json');
    if (res.ok) return await res.json();
  } catch (e) {}

  return [];
};

// ── TESTIMONIALS ────────────────────────────────────────────────────

window.loadTestimonials = async function() {
  const remote = await firestoreGet('testimonials');
  if (remote && Array.isArray(remote.items)) return remote.items;

  try {
    const res = await fetch('assets/data/testimonials.json');
    if (res.ok) return await res.json();
  } catch (e) {}

  return [];
};
