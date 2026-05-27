document.addEventListener('DOMContentLoaded', function() {
    const vortexHeader = document.querySelector('.vortex-header');
    const vortexMobileToggle = document.querySelector('.vortex-mobile-toggle');
    const vortexNavList = document.querySelector('.vortex-nav-list');

    if (vortexMobileToggle && vortexNavList) {
        vortexMobileToggle.addEventListener('click', function() {
            vortexNavList.classList.toggle('vortex-nav-active');
            this.classList.toggle('vortex-toggle-active');
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            vortexHeader.classList.add('vortex-header-scrolled');
        } else {
            vortexHeader.classList.remove('vortex-header-scrolled');
        }
    });

    const vortexModelSlider = document.querySelector('.vortex-model-slider');
    if (vortexModelSlider) {
        let isScrolling = false;

        window.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaY) > 50 && !isScrolling) {
                isScrolling = true;
                const direction = e.deltaY > 0 ? 1 : -1;
                const scrollAmount = window.innerWidth;
                vortexModelSlider.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 800);
            }
        });

        vortexModelSlider.querySelectorAll('.vortex-model-panel').forEach(panel => {
            panel.addEventListener('click', function() {
                const panels = Array.from(vortexModelSlider.querySelectorAll('.vortex-model-panel'));
                const currentIndex = panels.indexOf(this);
                const nextIndex = (currentIndex + 1) % panels.length;
                vortexModelSlider.scrollTo({
                    left: nextIndex * window.innerWidth,
                    behavior: 'smooth'
                });
            });
        });
    }

    const vortexForms = document.querySelectorAll('.vortex-contact-form');
    vortexForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('.vortex-btn-neon');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'SUBMITTING...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.textContent = 'SUBMITTED!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });

    const animateOnScroll = document.querySelectorAll('.vortex-feature-card, .vortex-tech-card, .vortex-news-card, .vortex-model-card');
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
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        scrollAnimObserver.observe(el);
    });

    const vortexCounters = document.querySelectorAll('.vortex-spec-value');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = counter.getAttribute('data-value');
                const suffix = counter.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = parseFloat(targetValue) / 60;
                const isDecimal = targetValue.includes('.');
                
                const updateCounter = () => {
                    if (current < parseFloat(targetValue)) {
                        current += increment;
                        counter.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = targetValue + suffix;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    vortexCounters.forEach(counter => {
        counterObserver.observe(counter);
    });

    const vortexGalleries = document.querySelectorAll('.vortex-gallery-grid');
    vortexGalleries.forEach(grid => {
        const items = grid.querySelectorAll('.vortex-gallery-item');
        items.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    const overlay = this.querySelector('.vortex-gallery-overlay');
                    if (overlay) {
                        overlay.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"/></svg>';
                    }
                }
            });
        });
    });
});