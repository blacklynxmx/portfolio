// ==========================================================================
// Portfolio — David G. Mendieta
// ==========================================================================

(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');

  if (navToggle && navLinks) {
    const openLabel = navToggle.textContent;
    const closeLabel = (document.documentElement.lang || '').indexOf('es') === 0 ? 'Cerrar' : 'Close';

    function setOpen(open) {
      navLinks.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
      navToggle.textContent = open ? closeLabel : openLabel;
    }

    navToggle.addEventListener('click', function () {
      setOpen(!navLinks.classList.contains('open'));
    });

    // Close on link click
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        setOpen(false);
        navToggle.focus();
      }
    });
  }

  // ---------- Reveal on scroll ----------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback — just show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---------- Case index: mark the section being read ----------
  const toc = document.querySelector('.case-toc');
  if (toc && 'IntersectionObserver' in window) {
    const tocInner = toc.querySelector('.case-toc-inner');
    const tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    const sections = tocLinks
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);
    let current = null;

    function setCurrent(id) {
      if (id === current) return;
      current = id;
      tocLinks.forEach(function (a) {
        const on = a.getAttribute('href') === '#' + id;
        if (on) {
          a.setAttribute('aria-current', 'true');
          // Keep the active label visible when the bar scrolls sideways (mobile)
          const left = a.offsetLeft - (tocInner.clientWidth - a.offsetWidth) / 2;
          tocInner.scrollTo({ left: left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        } else {
          a.removeAttribute('aria-current');
        }
      });
    }

    // A section counts as current while it crosses the band just below the bars
    const tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-120px 0px -60% 0px' });

    sections.forEach(function (s) { tocObserver.observe(s); });
  }

  // ---------- Current year in footer ----------
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Smooth anchor scroll (respect reduced motion) ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = link.getAttribute('href');
      if (id === '#' || id === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });
})();
