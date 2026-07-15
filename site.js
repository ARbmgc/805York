// 805york — shared behaviour

// scroll-fade for the about page hero image
(function () {
  var heroImg = document.getElementById('hero-img');
  var heroTitle = document.getElementById('hero-title');
  if (!heroImg) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onScroll() {
    var h = window.innerHeight;
    var progress = Math.min(Math.max(window.scrollY / h, 0), 1);
    heroImg.style.opacity = 1 - progress;
    if (!reduce) {
      heroImg.style.transform = 'scale(' + (1 + progress * 0.06) + ')';
    }
    if (heroTitle) {
      heroTitle.style.opacity = 1 - progress * 1.4;
      heroTitle.style.transform = 'translateY(' + (progress * -24) + 'px)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
