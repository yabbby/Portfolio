// script.js

// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Close menu on link click (mobile)
const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});

