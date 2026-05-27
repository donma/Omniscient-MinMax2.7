document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle-heart');
    const navMenu = document.querySelector('.nav-heart');
    
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
    
    const faqItems = document.querySelectorAll('.faq-item-heart');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-heart');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('faq-item-active-heart');
                
                document.querySelectorAll('.faq-item-heart').forEach(otherItem => {
                    otherItem.classList.remove('faq-item-active-heart');
                });
                
                if (!isActive) {
                    item.classList.add('faq-item-active-heart');
                }
            });
        }
    });
    
    const animatedElements = document.querySelectorAll('.program-card-heart, .news-card-heart, .team-member-heart, .story-block-heart');
    
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
        rootMargin: '0px 0px -30px 0px'
    });
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        animateOnScroll.observe(el);
    });
    
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
    
    const donateAmountBtns = document.querySelectorAll('.donate-amount-btn-heart');
    donateAmountBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            donateAmountBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('.form-input-heart, .form-textarea-heart, .form-select-heart');
            let isValid = true;
            let firstInvalid = null;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#E53935';
                    if (!firstInvalid) {
                        firstInvalid = input;
                    }
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                alert('請填寫所有必填欄位');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            } else {
                alert('感謝您的填寫！我們會盡快與您聯繫。');
                this.reset();
                
                const donateBtns = document.querySelectorAll('.donate-amount-btn-heart');
                donateBtns.forEach(b => b.classList.remove('active'));
            }
        });
    });
    
    const storyBlocks = document.querySelectorAll('.story-block-heart');
    storyBlocks.forEach((block, index) => {
        block.style.animationDelay = `${index * 0.2}s`;
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-heart');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
            }
        }
    });
    
    const volunteerSection = document.querySelector('.volunteer-section-heart');
    if (volunteerSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        volunteerSection.style.opacity = '0';
        volunteerSection.style.transform = 'translateY(30px)';
        volunteerSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(volunteerSection);
    }
});