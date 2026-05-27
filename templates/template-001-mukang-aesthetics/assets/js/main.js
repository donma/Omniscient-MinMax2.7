document.addEventListener('DOMContentLoaded',function(){

  // Header scroll shadow
  const header=document.querySelector('.site-header');
  window.addEventListener('scroll',function(){
    header.classList.toggle('scrolled',window.scrollY>20);
  });

  // Mobile menu
  const hamburger=document.querySelector('.hamburger');
  const mobileMenu=document.querySelector('.mobile-menu');
  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',function(){
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':'';
    });
    mobileMenu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click',function(){
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow='';
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(q){
    q.addEventListener('click',function(){
      const item=this.closest('.faq-item');
      const wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
      if(!wasOpen){item.classList.add('open');}
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      const target=document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
    });
  });

  // Back to top
  const btt=document.querySelector('.back-to-top');
  if(btt){
    window.addEventListener('scroll',function(){
      btt.classList.toggle('visible',window.scrollY>500);
    });
    btt.addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  // Form fake submit
  document.querySelectorAll('form').forEach(function(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const btn=form.querySelector('button[type="submit"]');
      if(btn){btn.textContent='已送出';btn.disabled=true;btn.style.background='#2d5016';}
      setTimeout(function(){btn.textContent='預約服務';btn.disabled=false;btn.style.background='';},3000);
    });
  });

  // Fade-up on scroll
  const observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1});
  document.querySelectorAll('.service-card,.portfolio-item,.review-card,.blog-card').forEach(function(el){
    el.style.opacity='0';
    observer.observe(el);
  });

});