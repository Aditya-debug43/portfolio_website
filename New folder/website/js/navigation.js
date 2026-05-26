/**
 * Aditya Graphics - Navigation
 * Manages mobile hamburger menu toggling and highlighting active page links.
 */

window.toggleMob = function() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.classList.toggle('open');
};

window.closeMob = function() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.classList.remove('open');
};

window.initNavigation = function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, .mob-menu a');
  
  // Highlight navigation state depending on which HTML file is open
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize path comparison
    const linkPage = href.split('#')[0];
    if (linkPage && currentPath.endsWith(linkPage)) {
      link.style.color = 'var(--gold)';
      link.style.fontWeight = '600';
    }
  });

  // Handle mobile layout resize checks
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      window.closeMob();
    }
  });
};
