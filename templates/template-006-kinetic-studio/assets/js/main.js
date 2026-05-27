document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initParallax();
  initFAQ();
  initFadeIn();
});

function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
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

function initScrollAnimations() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

function initParallax() {
  const circles = document.querySelectorAll('.hero-circle');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        circles.forEach((circle, i) => {
          const speed = 0.15 + (i * 0.1);
          circle.style.transform = `translateY(${scrollY * speed}px)`;
        });

        const decor = document.querySelector('.hero-decor');
        if (decor) {
          decor.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`;
        }

        ticking = false;
      });
      ticking = true;
    }
  });
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

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });
}

function filterPortfolio(category) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.filter-btn');

  if (event) {
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  items.forEach((item, i) => {
    const cat = item.dataset.category;
    if (category === 'all' || cat === category) {
      item.style.display = '';
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, i * 100);
    } else {
      item.style.display = 'none';
    }
  });
}

function filterBlog(category) {
  const cards = document.querySelectorAll('.blog-card');
  const buttons = document.querySelectorAll('.filter-btn');

  if (event) {
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  cards.forEach((card, i) => {
    const cat = card.dataset.category;
    if (category === 'all' || cat === category) {
      card.style.display = '';
      card.style.opacity = '0';
      setTimeout(() => card.style.opacity = '1', i * 80);
    } else {
      card.style.display = 'none';
    }
  });
}