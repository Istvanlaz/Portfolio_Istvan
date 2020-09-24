// Responsive Interface Controller

// execute JS only if cross1 is present within the loaded page
  document.addEventListener('turbolinks:load', () => {
  const crossLines = document.getElementById('cross1');

  if (crossLines) {
    console.log("It's on!!");
    // Background Darkener
    const bgDarkener = document.querySelector('.bg_darkener');

    // Responsive Navbar
    const burger = document.querySelector('.burger');
      // on burger click
      const nav = document.querySelector('.navbar-links');
      const navLinks = document.querySelectorAll('.navbar-item');

    // Contact Button
    const contactBtn = document.querySelector('.contact_btn');
      // on Contact Btn click
      const ficheContact = document.querySelector('.fiche_contact');


    // Setting and unsetting bgDarkener
    const setBgDarkener = () => {
      if (bgDarkener.style.display === "block") {
        return;
      } else {
        bgDarkener.style.display = "block";
      }
    };

    const unsetBgDarkener = () => {
      if (bgDarkener.style.display === "" || bgDarkener.style.display === "none") {
        return;
      } else {
        bgDarkener.style.display = "none";
      }
    };

    // Setting and unsetting navSlide

    const setNavContainer = () => {
      // Burger Animation
      burger.classList.toggle('burger_animation');
      // Toggle Nav
      nav.classList.toggle('nav-active');
      // Animate Links
      navLinks.forEach((link, index) => {
        // Make sur that style is empty then activate it
        link.style.animation = '';
        link.style.animation = `navLinkFade 0.45s ease forwards ${index / 7 + 0.5}s`;
      });
    };

    const unsetNavContainer = () => {
      // Burger Animation
      burger.classList.remove('burger_animation');
      // Remove Nav
      nav.classList.remove('nav-active');
      // Animate Links
      navLinks.forEach((link, index) => {
        link.style.animation = '';
      });
    };

    // Setting and unsetting ficheContact

    const setFicheContact = () => {
      contactBtn.classList.toggle('active-contact_btn');
      ficheContact.classList.toggle('active-fiche_contact');
    };

    const unsetFicheContact = () => {
      contactBtn.classList.remove('active-contact_btn');
      ficheContact.classList.remove('active-fiche_contact');
    };


    if (burger) {
      burger.onclick = function(){
        if (nav.classList.contains('nav-active')) {
          unsetNavContainer();
          unsetBgDarkener();
        } else {
          setBgDarkener();
          setNavContainer();
          unsetFicheContact();
        }
      }
    }

    if (contactBtn) {
      contactBtn.onclick = function(){
        if (ficheContact.classList.contains('active-fiche_contact')) {
          unsetFicheContact();
          unsetBgDarkener();
        } else {
          setBgDarkener();
          setFicheContact();
          unsetNavContainer();
        }
      }
    }

    if (bgDarkener) {
      bgDarkener.onclick = function(){
        unsetBgDarkener();
        unsetNavContainer();
        unsetFicheContact();
      }
    }
  }
});
