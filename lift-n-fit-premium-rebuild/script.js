document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));

// Scroll reveal animation
const revealItems = document.querySelectorAll('.section-head,.about-grid,.program,.gallery-card,.plan,.cta,.contact-card,.strip-item');
revealItems.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = Math.min((i % 4) * 90, 270) + 'ms'; });
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
  });
}, { threshold: .12 });
revealItems.forEach(el => revealObserver.observe(el));
