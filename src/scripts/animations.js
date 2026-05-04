// Intersection Observer for scroll reveal animations
export function initializeAnimations() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-scale, .reveal-blur, .reveal-slide-left, .reveal-slide-right'
  );

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '-80px 0px -80px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
  initializeAnimations();
}
