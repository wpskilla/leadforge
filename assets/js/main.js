// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ── INTERSECTION OBSERVER ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ── NUMBER COUNTER ──
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
const statNums = document.querySelectorAll('.stat-num[data-target]');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = true;
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

// ── HERO MOCK COUNTERS ──
setTimeout(() => {
  const leadsEl = document.getElementById('mockLeads');
  const pagesEl = document.getElementById('mockPages');
  if (leadsEl) animateMock(leadsEl, 47, 1200);
  if (pagesEl) animateMock(pagesEl, 120, 1500);
}, 600);
function animateMock(el, target, duration) {
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ── MODAL ──
function openModal(e) {
  e.preventDefault();
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });