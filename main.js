(function(){
  var buttons = document.querySelectorAll('.lang-toggle button');
  var elements = document.querySelectorAll('[data-fr]');
  var heroSection = document.querySelector('.hero');
  var modalBox = document.getElementById('modalBox');
  var currentLang = 'fr';
  function setLang(lang){
    currentLang = lang;
    buttons.forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = (lang === 'ary') ? 'ary' : 'fr';
    heroSection.setAttribute('lang', lang === 'ary' ? 'ary' : 'fr');
    modalBox.setAttribute('lang', lang === 'ary' ? 'ary' : 'fr');
    document.body.setAttribute('lang', lang === 'ary' ? 'ary' : 'fr');
    elements.forEach(function(el){
      var content = el.getAttribute(lang === 'ary' ? 'data-ary' : 'data-fr');
      if (content !== null) {
        el.innerHTML = content;
      }
    });
  }
  buttons.forEach(function(b){
    b.addEventListener('click', function(){
      setLang(b.getAttribute('data-lang'));
    });
  });
  setLang('fr');
  /* modal logic */
  var overlay = document.getElementById('contactModal');
  var closeBtn = document.getElementById('modalClose');
  var triggers = document.querySelectorAll('.contact-trigger');
  triggers.forEach(function(t){
    t.addEventListener('click', function(){
      overlay.classList.add('open');
    });
  });
  function closeModal(){ overlay.classList.remove('open'); }
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeModal();
  });
})();
