// Loader: hides after page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle icon
    const icon = toggleBtn.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
}

// Toggle navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close nav after clicking (on mobile)
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// WhatsApp form submission
const whatsappForm = document.getElementById("whatsappForm");
if (whatsappForm) {
  whatsappForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "254706648013";  
    const text = `Hello, my name is ${name} (${email}).\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}
