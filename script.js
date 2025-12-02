
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.menu').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Close menu when click outside
document.addEventListener('click', (event) => {
    const isClickInsideToggle = hamburger.contains(event.target);
    const isClickInsideMenu = menu.contains(event.target);
  
    if (!isClickInsideToggle && !isClickInsideMenu) {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
    }
});


// Glass effect on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('glass');
  } else {
    navbar.classList.remove('glass');
  }
});


// for typing effect
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector('.reveal-text');
  const content = textElement.innerText;

  function animateText() {
    textElement.innerHTML = ""; // clear previous spans

    [...content].forEach((char, i) => {
      const span = document.createElement("span");
      // Preserve spaces
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = 0;
      span.style.animation = `letterIn 0.5s forwards`;
      span.style.animationDelay = `${i * 0.1}s`;
      textElement.appendChild(span);
    });

    const totalTime = content.length * 100 + 500 + 1000; 
    setTimeout(animateText, totalTime);
  }

  animateText();
});


// for animation
document.addEventListener("DOMContentLoaded", () => {

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        
        if(el.classList.contains('animate-image') || el.tagName === 'IMG') {
          el.classList.add('enter-img');
        } else if(el.classList.contains('animate-card-on-scroll') || el.classList.contains('insight-card')) {
          el.classList.add('enter-card');
        } else if(el.tagName === 'H3' && (el.closest('.insight-card') || el.closest('.timeline-item'))) {
          el.classList.add('enter-subheading');
        } else if(el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
          el.classList.add('enter-heading');
        } else if(el.tagName === 'P') {
          el.classList.add('enter-para');
        } else if(el.classList.contains('social-container') || el.classList.contains('hero-text')  ) {
          el.classList.add('enter-card');
        }
      } else {
        
        el.classList.remove('enter-img', 'enter-card', 'enter-subheading', 'enter-heading','enter-para', 'enter-section');
      }
    });
  }, { threshold: 0.2 });

  
  const elements = document.querySelectorAll(
    'h1, h2, h3, p, section, .animate-card-on-scroll, .insight-card,.social-container,.hero-text, .animate-image, img'
  );

  elements.forEach(el => observer.observe(el));
});