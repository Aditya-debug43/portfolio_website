/**
 * Aditya Graphics - Component Loader
 * Dynamically fetches shared HTML templates and injects them.
 */

window.loadSection = async function(elementId, filePath) {
  const container = document.getElementById(elementId);
  if (!container) return;
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const htmlContent = await response.text();
    container.innerHTML = htmlContent;
  } catch (error) {
    console.error(`Error loading section from ${filePath} into #${elementId}:`, error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const loaders = [];
  
  // Load standard shared components
  if (document.getElementById('navbar-placeholder')) {
    loaders.push(window.loadSection('navbar-placeholder', 'sections/navbar.html'));
  }
  if (document.getElementById('hero-placeholder')) {
    loaders.push(window.loadSection('hero-placeholder', 'sections/hero.html'));
  }
  if (document.getElementById('testimonials-placeholder')) {
    loaders.push(window.loadSection('testimonials-placeholder', 'sections/testimonials.html'));
  }
  if (document.getElementById('footer-placeholder')) {
    loaders.push(window.loadSection('footer-placeholder', 'sections/footer.html'));
  }
  if (document.getElementById('overlays-placeholder')) {
    loaders.push(window.loadSection('overlays-placeholder', 'sections/overlays.html'));
  }
  if (document.getElementById('floaters-placeholder')) {
    loaders.push(window.loadSection('floaters-placeholder', 'sections/floaters.html'));
  }
  
  await Promise.all(loaders);
  
  // Notify other modules that the DOM is fully loaded and built
  document.dispatchEvent(new CustomEvent('componentsLoaded'));
});
