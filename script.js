// ====== JavaScript for Dorji Wangmo's Portfolio ======

// 1. Show a welcome message when the page loads
window.addEventListener('load', () => {
  alert("Welcome to Dorji Wangmo's Portfolio 🌸");
});

// 2. Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Change the heading color when hovered
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('mouseover', () => {
    logo.style.color = '#ff69b4';
  });
  logo.addEventListener('mouseout', () => {
    logo.style.color = '';
  });
}

// 4. Highlight navigation link when clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// 5. Form validation before submitting
const form = document.querySelector('#contact form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending ✉️");
    } else {
      alert(`Thank you, ${name}! Your message has been sent successfully 💌`);
      form.reset();
    }
  });
}

// 6. Add a “Back to Top” button dynamically
const topBtn = document.createElement('button');
topBtn.textContent = "⬆ Back to Top";
topBtn.classList.add('top-btn');
document.body.appendChild(topBtn);

// Scroll to top smoothly when clicked
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show button only when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
