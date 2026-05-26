/**
 * Aditya Graphics - Data Handler
 * Manages fetching, caching, and updating pricing, portfolio, and brand settings.
 */

const KEYS = { brand: 'ag_brand', port: 'ag_portfolio', price: 'ag_pricing' };

window.loadBrand = async function() {
  try {
    const localData = localStorage.getItem(KEYS.brand);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (e) {
    console.warn("Could not read brand settings from localStorage, fetching defaults...");
  }
  
  // Fallback to fetch brand.json from server
  try {
    const response = await fetch('assets/data/brand.json');
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(KEYS.brand, JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.error('Error fetching brand configuration:', error);
  }
  
  return {
    name: 'Aditya Graphics',
    tag: 'Jacquard Design Studio',
    logo: '',
    wa: '919999999999',
    email: 'adityagraphics886@gmail.com',
    pwd: 'admin123'
  };
};

window.saveBrandData = function(d) {
  localStorage.setItem(KEYS.brand, JSON.stringify(d));
};

window.loadPortfolio = async function() {
  try {
    const localData = localStorage.getItem(KEYS.port);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (e) {
    console.warn("Could not read portfolio from localStorage, fetching defaults...");
  }
  
  // Fallback to portfolio.json
  try {
    const response = await fetch('assets/data/portfolio.json');
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(KEYS.port, JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.error('Error fetching default portfolio:', error);
  }
  
  // Direct hardcoded fallback in case network fails
  return [
    { id: 1, title: 'Paisley Saree Border', cat: 'Saree', img: '', desc: 'Classic paisley motif border design.' },
    { id: 2, title: 'Brocade All-Over', cat: 'Brocade', img: '', desc: 'Dense floral brocade repeat.' },
    { id: 3, title: 'Dupatta Daman', cat: 'Dupatta', img: '', desc: 'Intricate daman with mirror borders.' }
  ];
};

window.loadPricing = async function() {
  try {
    const localData = localStorage.getItem(KEYS.price);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (e) {
    console.warn("Could not read pricing from localStorage, fetching defaults...");
  }
  
  // Fallback to products.json
  try {
    const response = await fetch('assets/data/products.json');
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(KEYS.price, JSON.stringify(data));
      return data;
    }
  } catch (error) {
    console.error('Error fetching default pricing/products:', error);
  }
  
  return [
    { type: 'Saree Full Design', price: '₹800 – ₹2,500' },
    { type: 'Dupatta Design', price: '₹600 – ₹1,800' },
    { type: 'Sherwani / Brocade', price: '₹1,200 – ₹3,500' },
    { type: 'Curtain / Furnishing', price: '₹1,000 – ₹4,000' },
    { type: 'Buti / All-Over Pattern', price: '₹500 – ₹1,500' },
    { type: 'Border / Daman Only', price: '₹400 – ₹1,200' },
    { type: 'Lace Design', price: '₹600 – ₹2,000' },
    { type: 'Blouse / Kali Design', price: '₹500 – ₹1,500' }
  ];
};

window.loadTestimonials = async function() {
  try {
    const response = await fetch('assets/data/testimonials.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }
  
  // Fallback testimonials
  return [
    { id: 1, name: "Ramesh Patel", role: "Master Weaver, Surat", text: "Aditya Graphics delivers exceptional jacquard designs.", rating: 5 }
  ];
};
