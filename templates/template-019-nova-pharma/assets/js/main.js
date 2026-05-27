document.addEventListener('DOMContentLoaded', function() {
    const novaHeader = document.querySelector('.nova-header');
    const novaMobileToggle = document.querySelector('.nova-mobile-toggle');
    const novaNavList = document.querySelector('.nova-nav-list');

    if (novaMobileToggle && novaNavList) {
        novaMobileToggle.addEventListener('click', function() {
            novaNavList.classList.toggle('nova-nav-active');
            this.classList.toggle('nova-toggle-active');
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            novaHeader.classList.add('nova-header-scrolled');
        } else {
            novaHeader.classList.remove('nova-header-scrolled');
        }
    });

    const novaFaqItems = document.querySelectorAll('.nova-faq-item');
    novaFaqItems.forEach(item => {
        const question = item.querySelector('.nova-faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                novaFaqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    const novaStatRings = document.querySelectorAll('.nova-stat-ring');
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ring = entry.target;
                const progress = ring.querySelector('.nova-ring-progress');
                const value = ring.querySelector('.nova-ring-value');
                if (progress && value) {
                    const targetPercent = parseInt(value.getAttribute('data-percent'), 10);
                    const circumference = 377;
                    const offset = circumference - (targetPercent / 100) * circumference;
                    setTimeout(() => {
                        progress.style.strokeDashoffset = offset;
                    }, 200);
                }
                statsObserver.unobserve(ring);
            }
        });
    }, observerOptions);

    novaStatRings.forEach(ring => {
        statsObserver.observe(ring);
    });

    const novaProductCards = document.querySelectorAll('.nova-product-card');
    novaProductCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.nova-product-link').style.gap = '14px';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.nova-product-link').style.gap = '8px';
        });
    });

    const novaForms = document.querySelectorAll('.nova-contact-form');
    novaForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('.nova-btn-teal');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '提交中...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.textContent = '提交成功！';
                submitBtn.style.background = 'linear-gradient(135deg, #2E7D32, #1B5E20)';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });

    const animateOnScroll = document.querySelectorAll('.nova-product-card, .nova-team-card, .nova-publication-card');
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
});