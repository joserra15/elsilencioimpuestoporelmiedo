(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');

  function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    navBackdrop.classList.remove('visible');
    navBackdrop.hidden = true;
    document.body.style.overflow = '';
  }

  function openMenu() {
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    navBackdrop.hidden = false;
    requestAnimationFrame(function () {
      navBackdrop.classList.add('visible');
    });
    document.body.style.overflow = 'hidden';
  }

  /* Header scroll effect */
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* Mobile menu toggle */
  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navBackdrop.addEventListener('click', closeMenu);

  /* Close menu on link click */
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Close menu on resize to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* Active nav link on scroll */
  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* Fade-in on scroll */
  const fadeElements = document.querySelectorAll(
    '.section-header, .book-layout, .dedication, .purchase-card, .stores-list, .author-content, .review-card'
  );

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  /* Stagger review cards */
  document.querySelectorAll('.review-card').forEach(function (card, index) {
    card.style.transitionDelay = (index * 0.08) + 's';
  });
})();
