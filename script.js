
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
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }else {
      entry.target.classList.remove('in-view'); // Remove when out of view
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.animate-on-scroll,.animate-lift,.animate-card-on-scroll,.animate-image').forEach(el => {
  observer.observe(el);
});




document.querySelectorAll(
  '.animate-on-scroll, .animate-card-on-scroll,.animate-lift, .animate-image, .reveal-left, .reveal-right'
).forEach(el => {
  observer.observe(el);
});
