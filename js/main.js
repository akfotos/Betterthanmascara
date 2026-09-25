/* Better Than Mascara — Site Interactivity */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAccordions();
  setActiveNavLink();
  initBookingDate();
  shuffleGallery();
  initNavbarShadow();
  initScrollReveal();
  initLightbox();
});

function initLightbox() {
  const items = document.querySelectorAll('.gallery-item img');
  if (!items.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="" />';
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('img');
  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  items.forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== lbImg) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}

function initNavbarShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.service-card, .policy-card, .value-card, .gallery-item, ' +
    '.accordion-item, .deposit-box, .cta-card, .booking-form, ' +
    '.page-header, .about-hero-grid, .section-label'
  );

  if (!('IntersectionObserver' in window)) {
    return;
  }

  targets.forEach(el => {
    el.classList.add('reveal');
    // Stagger siblings within the same parent for a nicer cascade
    const siblings = [...el.parentElement.children].filter(s => s.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${Math.min(idx, 6) * 70}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

function shuffleGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const items = gallery.querySelectorAll('.gallery-item img');
  const pool = Array.from({ length: 21 }, (_, i) => `images/IMG_${1458 + i}.JPG`);

  // Fisher-Yates shuffle of the full pool, then take as many as needed
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  items.forEach((img, i) => {
    img.src = pool[i];
    img.alt = `Better Than Mascara work ${i + 1}`;
  });
}

function initBookingDate() {
  const dateInput = document.getElementById('date');
  if (!dateInput) return;

  const toISO = d => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = toISO(tomorrow);

  const max = new Date();
  max.setMonth(max.getMonth() + 3);
  dateInput.max = toISO(max);
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Optional: close others when one opens
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
    });
  });

  // Nested consent items: bold title toggles its detail text
  document.querySelectorAll('.consent-item-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      toggle.closest('.consent-item').classList.toggle('open');
    });
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
