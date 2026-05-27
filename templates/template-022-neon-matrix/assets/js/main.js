document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle-neon');
    const navMenu = document.querySelector('.nav-neon');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    const faqItems = document.querySelectorAll('.faq-item-neon');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-neon');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('faq-item-active-neon');
                
                document.querySelectorAll('.faq-item-neon').forEach(otherItem => {
                    otherItem.classList.remove('faq-item-active-neon');
                });
                
                if (!isActive) {
                    item.classList.add('faq-item-active-neon');
                }
            });
        }
    });
    
    const statBars = document.querySelectorAll('.stat-bar-fill-neon');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.style.getPropertyValue('--stat-target-width');
                if (targetWidth) {
                    entry.target.style.setProperty('--stat-width', targetWidth);
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statBars.forEach(bar => {
        const parent = bar.closest('.stat-bar-container-neon');
        if (parent) {
            const label = parent.querySelector('.stat-bar-value-neon');
            if (label) {
                const targetValue = label.textContent;
                bar.style.setProperty('--stat-target-width', targetValue);
            }
        }
        statObserver.observe(bar);
    });
    
    const animatedElements = document.querySelectorAll('.game-card-neon, .news-card-neon, .team-card-neon, .merch-card-neon, .job-card-neon, .streamer-card-neon');
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        animateOnScroll.observe(el);
    });
    
    const glitcElements = document.querySelectorAll('.glitch-text-neon');
    glitcElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-effect-neon 0.3s infinite';
        });
        el.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    const form = document.querySelector('.form-neon');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('.form-input-neon, .form-textarea-neon, .form-select-neon');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff0080';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('感謝您的提交！我們會盡快與您聯繫。');
                this.reset();
            }
        });
    }
    
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 1500;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, stepTime);
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-neon');
        if (header) {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 0 30px rgba(0, 255, 159, 0.3)';
            } else {
                header.style.boxShadow = '0 0 20px rgba(0, 255, 159, 0.1)';
            }
        }
    });
});