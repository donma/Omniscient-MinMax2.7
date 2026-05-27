document.addEventListener('DOMContentLoaded',function(){
  const header=document.querySelector('.site-header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>20);});
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
  document.querySelectorAll('.faq-question').forEach(function(q){
    q.addEventListener('click',function(){
      const item=this.closest('.faq-item');
      const wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
      if(!wasOpen){item.classList.add('open');}
    });
  });
  const btt=document.querySelector('.back-to-top');
  if(btt){
    window.addEventListener('scroll',function(){btt.classList.toggle('visible',window.scrollY>400);});
    btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  }
  document.querySelectorAll('form').forEach(function(form){
    form.addEventListener('submit',function(e){e.preventDefault();
      const btn=form.querySelector('button[type="submit"]');
      if(btn){btn.textContent='已送出';btn.disabled=true;}
      setTimeout(function(){btn.textContent='立即申請';btn.disabled=false;},3000);
    });
  });
});