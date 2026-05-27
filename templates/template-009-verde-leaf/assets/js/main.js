document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
  initFadeIn();
});

function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('active');
      document.body.style.overflow = mobile.classList.contains('active') ? 'hidden' : '';
    });

    mobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(active => {
        active.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initFadeIn() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

function filterMenu(category) {
  const cards = document.querySelectorAll('.menu-card');
  const tags = document.querySelectorAll('.tag');

  tags.forEach(tag => tag.classList.remove('active'));
  if (event) event.target.classList.add('active');

  cards.forEach((card, i) => {
    const cat = card.dataset.category;
    if (category === 'all' || cat === category) {
      card.style.display = '';
      setTimeout(() => card.style.opacity = '1', i * 80);
    } else {
      card.style.opacity = '0';
      setTimeout(() => card.style.display = 'none', 300);
    }
  });
}