/* lightbox.js — zoomable image overlay
   Targets any element with [data-zoomable] attribute (figure, div, etc.) */
(function () {
  'use strict';
  var overlay, overlayImg;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image preview');
    var btn = document.createElement('button');
    btn.className = 'lb-close';
    btn.setAttribute('aria-label', 'Close preview');
    btn.innerHTML = '&times;';
    btn.addEventListener('click', close);
    overlayImg = document.createElement('img');
    overlayImg.alt = '';
    overlay.appendChild(btn);
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function(e){ if(e.target===overlay) close(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
  }

  function open(src, alt) {
    if (!overlay) buildOverlay();
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    overlayImg.src = '';
  }

  function init() {
    /* Match ANY element with data-zoomable — covers both <figure> and <div> */
    document.querySelectorAll('[data-zoomable]').forEach(function(el){
      var img = el.querySelector('img');
      if (!img) return;
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function(){ open(img.src, img.alt); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
