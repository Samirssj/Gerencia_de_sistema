// Toggle week expansion
  function toggleWeek(card) {
    const body = card.querySelector('.week-body');
    const isOpen = card.classList.contains('open');
    // Close all
    document.querySelectorAll('.week-card').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.week-body').style.maxHeight = '0';
    });
    // Open this one if it was closed
    if (!isOpen) {
      card.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  }
 
  // Scroll to section
  function scrollToSection(id) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
 
  // Intersection Observer for fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.week-card, .cap-card, .strategy-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.07) + 's';
    observer.observe(el);
  });