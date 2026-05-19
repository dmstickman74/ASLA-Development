// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !open);
  nav.classList.toggle('open');
});

// Click-based dropdowns (replaces CSS :hover)
document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    const li = link.parentElement;
    const isOpen = li.classList.contains('open');
    // Close all other dropdowns
    document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) {
      e.preventDefault();
      li.classList.add('open');
    }
    // If already open, follow the link
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
  }
});

// Close dropdowns on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.has-dropdown.open').forEach(el => el.classList.remove('open'));
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Header shrink on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to top button
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('visible', window.scrollY > 600);
  });
}
