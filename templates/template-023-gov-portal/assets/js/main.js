document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle-gov');
    const navMenu = document.querySelector('.nav-gov');
    
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
    
    const faqItems = document.querySelectorAll('.faq-item-gov');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-gov');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('faq-item-active-gov');
                
                document.querySelectorAll('.faq-item-gov').forEach(otherItem => {
                    otherItem.classList.remove('faq-item-active-gov');
                });
                
                if (!isActive) {
                    item.classList.add('faq-item-active-gov');
                }
            });
        }
    });
    
    const searchInput = document.querySelector('.search-input-gov');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    alert('搜尋功能：' + query);
                }
            }
        });
    }
    
    const forms = document.querySelectorAll('.form-gov');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('.form-input-gov, .form-textarea-gov, .form-select-gov');
            let isValid = true;
            let firstInvalid = null;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#E53E3E';
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
                alert('感謝您的提交！我們會盡快處理您的申請。');
                this.reset();
            }
        });
    });
    
    const animatedElements = document.querySelectorAll('.card-gov, .service-tile-gov, .announce-card-gov, .list-item-gov');
    
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
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
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
        const increment = target / 40;
        const duration = 1200;
        const stepTime = duration / 40;
        
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
        const header = document.querySelector('.header-gov');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.12)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            }
        }
    });
    
    const tabs = document.querySelectorAll('.tab-gov');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            document.querySelectorAll('.tab-gov').forEach(t => t.classList.remove('tab-active-gov'));
            this.classList.add('tab-active-gov');
            
            document.querySelectorAll('.tab-content-gov').forEach(content => {
                content.style.display = 'none';
            });
            
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
});