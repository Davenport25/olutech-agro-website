/* ===========================
   Smooth Scroll for Anchor Links
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


/* ===========================
   Scroll-in Animation Observer
=========================== */
const animatedElements = document.querySelectorAll(
  '.section, .product-card'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15
  }
);

animatedElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
