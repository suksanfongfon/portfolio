// Typing animation
const phrases = ['Developer', 'UI/UX Designer', 'Problem Solver', 'Freelancer'];
let phraseIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIdx];
  if (deleting) {
    el.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    setTimeout(type, 60);
  } else {
    el.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { deleting = true; setTimeout(type, 1800); }
    else setTimeout(type, 100);
  }
}
type();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars when skills section enters view
      if (e.target.classList.contains('skills-bars')) {
        e.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});
