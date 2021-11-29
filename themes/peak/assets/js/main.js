var menuBtn = document.querySelector('#menu-toggle');
var menuCls = document.querySelector('#menu-close');
var menu = document.querySelector('nav#menu');
var overlay = document.querySelector('div.nav-overlay');

menuBtn.addEventListener('click', function() {
  menu.classList.add('visible');
  overlay.classList.add('visible');
});

menuCls.addEventListener('click', function() {
  menu.classList.remove('visible');
  overlay.classList.remove('visible');
});

overlay.addEventListener('click', function() {
  menu.classList.remove('visible');
  overlay.classList.remove('visible');
});
