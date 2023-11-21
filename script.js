document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = targetElement.offsetTop - header.offsetHeight;
  
      window.scroll({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
  
