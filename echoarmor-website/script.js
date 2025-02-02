// Example JavaScript functionality (if needed)

// Scroll to section functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 70
      });
    });
  });
  