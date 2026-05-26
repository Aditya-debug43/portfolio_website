/**
 * Aditya Graphics - Animations
 * Handles fade-in-on-scroll animations using the browser's IntersectionObserver API.
 */

window.initAnimations = function() {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Select elements to reveal
    const selectors = [
      '.svc-card',
      '.pitem',
      '.step',
      '.about-grid',
      '.contact-grid',
      '.pricing .inner',
      '.testimonial-card'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
      });
    });
  } else {
    // Fallback: immediately show all elements if observer is not supported
    const selectors = ['.svc-card', '.pitem', '.step', '.about-grid', '.contact-grid', '.testimonial-card'];
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('visible');
      });
    });
  }
};
