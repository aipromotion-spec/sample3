(function () {
  'use strict';

  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const globalNav = document.getElementById('globalNav');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    });
  }

  if (menuToggle && globalNav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('is-open');
      globalNav.classList.toggle('is-open');
      document.body.style.overflow = globalNav.classList.contains('is-open') ? 'hidden' : '';
    });

    globalNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('is-open');
        globalNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('お問い合わせありがとうございます。\n内容を確認のうえ、担当者よりご連絡いたします。');
      contactForm.reset();
    });
  }
})();
