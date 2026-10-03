/* lightbox.js — zoomable image overlay
   Targets any element with [data-zoomable] attribute (figure, div, etc.)
   Keyboard: Tab to a figure, Enter/Space opens, Esc closes, focus returns.
   Small screens open the original image in a new tab (native pinch zoom). */
(function () {
  'use strict';
  var overlay, overlayImg, closeBtn, lastFocus;
  var es = (document.documentElement.lang || '').indexOf('es') === 0;
  var t = es
    ? { dialog: 'Vista ampliada', close: 'Cerrar vista ampliada', zoom: 'Ampliar imagen' }
    : { dialog: 'Image preview', close: 'Close preview', zoom: 'Enlarge image' };
  var small = window.matchMedia('(max-width: 640px)');

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', t.dialog);
    closeBtn = document.createElement('button');
    closeBtn.className = 'lb-close';
    closeBtn.setAttribute('aria-label', t.close);
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', close);
    overlayImg = document.createElement('img');
    overlayImg.alt = '';
    overlay.appendChild(closeBtn);
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      // The close button is the only focusable element: keep focus inside.
      if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
    });
  }

  function open(src, alt) {
    if (small.matches) { window.open(src, '_blank', 'noopener'); return; }
    if (!overlay) buildOverlay();
    lastFocus = document.activeElement;
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    if (!overlay || !overlay.classList.contains('active')) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    overlayImg.src = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function init() {
    /* Match ANY element with data-zoomable — covers both <figure> and <div> */
    document.querySelectorAll('[data-zoomable]').forEach(function (el) {
      var img = el.querySelector('img');
      if (!img) return;
      el.style.cursor = 'zoom-in';
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', t.zoom + (img.alt ? ': ' + img.alt : ''));
      el.addEventListener('click', function () { open(img.src, img.alt); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img.src, img.alt); }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
