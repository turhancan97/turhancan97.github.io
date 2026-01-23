// Scroll to Top Button Functionality
(function() {
  'use strict';

  // Create scroll-to-top button
  function createScrollButton() {
    const button = document.createElement('button');
    button.id = 'scrollToTopBtn';
    button.className = 'scroll-to-top-btn';
    button.setAttribute('aria-label', 'Scroll to top');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    });

    // Smooth scroll to top on click
    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollButton);
  } else {
    createScrollButton();
  }
})();
