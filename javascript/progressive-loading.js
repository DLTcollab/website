var hero_container = document.querySelector('.hero-container');

document.addEventListener("DOMContentLoaded", function() {
  if (!hero_container) return !1;
  var origin_src = hero_container.getAttribute("data-src"),
      img = new Image;

  img.src = origin_src;
  img.onload = function () {
    hero_container.style.backgroundImage = 'url(' + origin_src + ')';
  };
});