// Xiuhuazure · tiny touches only
(function () {
  // the sunflower glints spin a little when tapped
  document.querySelectorAll('.glint').forEach(function (g) {
    g.style.pointerEvents = 'auto';
    g.addEventListener('click', function () {
      if (!g.animate) return;
      g.animate(
        [{ transform: 'rotate(0deg) scale(1)' }, { transform: 'rotate(180deg) scale(1.35)' }, { transform: 'rotate(360deg) scale(1)' }],
        { duration: 700, easing: 'ease-in-out' }
      );
    });
  });
  // heart cursor: fill the heart while the mouse button is held down
  var root = document.documentElement;
  var release = function () { root.classList.remove('is-pressing'); };
  document.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button === 0) root.classList.add('is-pressing');
  });
  document.addEventListener('pointerup', release);
  document.addEventListener('pointercancel', release);
  window.addEventListener('blur', release);
  document.addEventListener('dragend', release);
  // email link assembled in the browser, so scrapers reading the HTML don't find it
  document.querySelectorAll('.js-mail').forEach(function (el) {
    var addr = el.dataset.u + '@' + el.dataset.d + '.' + el.dataset.t;
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    el.replaceWith(a);
  });
})();
