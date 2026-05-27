document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initFAQ();
  initFadeIn();
  initProgressRings();
});

function initSidebar() {
  const toggle = document.querySelector('.nav-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
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
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

function initProgressRings() {
  const rings = document.querySelectorAll('.progress-ring');

  rings.forEach(ring => {
    const percent = parseInt(ring.dataset.percent || 0);
    const circle = ring.querySelector('.progress');
    const circumference = 2 * Math.PI * 52;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
  });
}

function filterCourses(category) {
  const cards = document.querySelectorAll('.course-card');
  const tags = document.querySelectorAll('.tag');

  tags.forEach(tag => tag.classList.remove('active'));
  if (event) {
    event.target.classList.add('active');
  }

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

function filterBlog(category) {
  const cards = document.querySelectorAll('.blog-card');
  const tags = document.querySelectorAll('.tag');

  tags.forEach(tag => tag.classList.remove('active'));
  if (event) {
    event.target.classList.add('active');
  }

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