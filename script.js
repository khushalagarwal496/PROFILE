document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("visible");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  
  // Trigger once on load to reveal elements currently in view
  revealOnScroll(); 

  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    
    // Close menu when a link is clicked
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});
