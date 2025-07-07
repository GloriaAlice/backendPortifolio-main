function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function addButtonEffects() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function typeWriterEffect() {
  const title = document.querySelector('.title');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  title.style.borderRight = '2px solid #667eea';
  
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
      title.style.borderRight = 'none';
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleDesktop = document.getElementById("toggle-dark-mode-desktop");
  const toggleMobile = document.getElementById("toggle-dark-mode-mobile");

  function updateDarkMode(isDark) {
    if (toggleDesktop) toggleDesktop.textContent = isDark ? "☀️" : "🌙";
    if (toggleMobile) toggleMobile.textContent = isDark ? "☀️" : "🌙";
    
    document.body.style.transition = 'all 0.3s ease';
  }

  function toggleDarkMode(e) {
    e.stopPropagation();
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    updateDarkMode(isDark);
    
    localStorage.setItem('darkMode', isDark);
  }

  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add("dark-mode");
    updateDarkMode(true);
  }

  if (toggleDesktop) {
    toggleDesktop.addEventListener("click", toggleDarkMode);
  }

  if (toggleMobile) {
    toggleMobile.addEventListener("click", toggleDarkMode);
  }

  setTimeout(() => {
    addButtonEffects();
    typeWriterEffect();
  }, 500);

  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
