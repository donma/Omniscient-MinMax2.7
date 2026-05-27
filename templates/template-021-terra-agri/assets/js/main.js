document.addEventListener('DOMContentLoaded', function() {
    const terraHeader = document.querySelector('.terra-header');
    const terraMobileToggle = document.querySelector('.terra-mobile-toggle');
    const terraNavList = document.querySelector('.terra-nav-list');

    if (terraMobileToggle && terraNavList) {
        terraMobileToggle.addEventListener('click', function() {
            terraNavList.classList.toggle('terra-nav-active');
            this.classList.toggle('terra-toggle-active');
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            terraHeader.classList.add('terra-header-scrolled');
        } else {
            terraHeader.classList.remove('terra-header-scrolled');
        }
    });

    const terraFaqItems = document.querySelectorAll('.terra-faq-item');
    terraFaqItems.forEach(item => {
        const question = item.querySelector('.terra-faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                terraFaqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    const animateOnScroll = document.querySelectorAll('.terra-solution-card, .terra-produce-card, .terra-blog-card');
    const scrollAnimObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                scrollAnimObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollAnimObserver.observe(el);
    });

    const terraDataBars = document.querySelectorAll('.terra-data-fill');
    const dataObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, 200);
                dataObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    terraDataBars.forEach(bar => {
        bar.style.width = '0';
        dataObserver.observe(bar);
    });

    const terraForms = document.querySelectorAll('.terra-contact-form');
    terraForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('.terra-btn-earth');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '提交中...';
                submitBtn.disabled = true;
                setTimeout(() => {
                    submitBtn.textContent = '提交成功！';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        form.reset();
                    }, 2000);
                }, 1500);
            }
        });
    });

    const terraImpactCounters = document.querySelectorAll('.terra-impact-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = counter.getAttribute('data-value');
                let current = 0;
                const increment = parseInt(targetValue) / 60;
                
                const updateCounter = () => {
                    if (current < parseInt(targetValue)) {
                        current += increment;
                        counter.innerHTML = Math.floor(current).toLocaleString() + '<span>+</span>';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerHTML = parseInt(targetValue).toLocaleString() + '<span>+</span>';
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    terraImpactCounters.forEach(counter => {
        counterObserver.observe(counter);
    });
});