function openMarketplace() {
  const overlay = document.getElementById('marketplace-overlay');
  const iframe = document.getElementById('rayda-iframe');
  if (!iframe.src) {
    iframe.src = iframe.dataset.src;
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMarketplace() {
  document.getElementById('marketplace-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeMarketplaceOnBackdrop(e) {
  if (e.target === e.currentTarget) closeMarketplace();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMarketplace();
});

function handleSubscribe(e) {
  e.preventDefault();
  const msg = document.getElementById('success-msg');
  msg.style.display = 'block';
  e.target.querySelector('input').value = '';
}

// Smooth active state for nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? '#f1f1f3' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));
