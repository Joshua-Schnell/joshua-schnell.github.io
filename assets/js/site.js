// Mobile menu toggle
(function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
})();
