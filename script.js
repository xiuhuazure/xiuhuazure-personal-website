// Xiuhuazure · tiny touches only
(function () {
  // the sunflower glints spin a little when tapped
  document.querySelectorAll('.glint').forEach(function (g) {
    g.style.cursor = 'pointer';
    g.style.pointerEvents = 'auto';
    g.addEventListener('click', function () {
      if (!g.animate) return;
      g.animate(
        [{ transform: 'rotate(0deg) scale(1)' }, { transform: 'rotate(180deg) scale(1.35)' }, { transform: 'rotate(360deg) scale(1)' }],
        { duration: 700, easing: 'ease-in-out' }
      );
    });
  });
})();
