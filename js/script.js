document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  const toggleIcon = document.getElementById('menu-icon'); 
  const navbar = document.querySelector('.navbar');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    toggleIcon.classList.toggle('rotate');
    navbar.classList.toggle('menu-open');
    // Toggle the Font Awesome icon
    if (toggleIcon.classList.contains('fa-bars')) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-times');
    } else {
      toggleIcon.classList.remove('fa-times');
      toggleIcon.classList.add('fa-bars');
    }
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

    // **Smooth Scrolling for all nav links**
  // document.querySelectorAll('.navbar__mobile-menu-items a').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();

  //     // Get the target element by href attribute
  //     const targetId = this.getAttribute('href').slice(1);
  //     const targetElement = document.getElementById(targetId);

  //     if (targetElement) {
  //       targetElement.scrollIntoView({ behavior: 'smooth' });

  //       // Also close mobile menu after clicking (optional)
  //       mobileMenu.classList.remove('active');
  //       toggleIcon.classList.remove('rotate');
  //       toggleIcon.classList.remove('fa-times');
  //       toggleIcon.classList.add('fa-bars');
  //     }
  //   });
  // });

    const mobileMenuItems = document.querySelectorAll('.navbar__mobile-menu-items a');
  mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      toggleIcon.classList.remove('rotate');
      toggleIcon.classList.remove('fa-times');
      toggleIcon.classList.add('fa-bars');
      document.body.style.overflow = '';
    });
  });
  // Video Modal
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');

  // Open modal when clicked
  videoButton.addEventListener('click', function () {
    // Show modal
    modal.style.display = 'block';

    //Replace the src attribute with the video URL
    videoPlayer.src = 'https://www.youtube.com/embed/1qCr-WZBdXQ?si=Wxu9LQycn8RKFOUu';

    // Close modal on close button click
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    // Close modal on outter click
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
    // === Active Section Highlighting on Scroll ===
  const navLinks = document.querySelectorAll('.navbar__menu-link[href^="index.html#"], .navbar__mobile-menu-link[href^="index.html#"]');

  const sections = Array.from(navLinks).map(link => {
    const href = link.getAttribute('href');
    if (href.includes('#')) {
      const id = href.split('#')[1];
      return document.getElementById(id);
    }
    return null;
  }).filter(section => section !== null);

  function onScroll() {
    const scrollPos = window.scrollY + 100; // Offset to trigger active state a bit earlier

    let currentSectionId = '';

    for (const section of sections) {
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        currentSectionId = section.id;
        break;
      }
    }

    navLinks.forEach(link => link.classList.remove('active'));

    if (currentSectionId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href').includes(`#${currentSectionId}`)) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Initialize on page load

});



// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
