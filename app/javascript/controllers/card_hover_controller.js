document.addEventListener('turbolinks:load', () => {
  // Find the nav element
  const navBar = document.querySelector('.navbar_portfolio');
    // Determine the height of the navbar
    const navHeight = navBar.clientHeight;

  // Find the background image elements
  const bgImg = document.querySelector('.fixed_img_bg');
  const bgHome = document.querySelector('.bg_pic_home');

  // Determine the height of the background image present within the loaded page
  const bgHeight = () => {
    if (bgImg) {
      return bgImg.clientHeight;
    } else if (bgHome) {
      return bgHome.clientHeight;
    } else {
      return console.log("you've got an error, go check navbar_solidification js");
    }
  }

  // Activate / Deactive navbar solidness depending where the user is on the page
  const scrollCalc = () => {
    if ($(window).scrollTop() > bgHeight() - navHeight) {
      navBar.classList.add('solid_navbar');
    } else {
      navBar.classList.remove('solid_navbar');
    }
  }


  window.onload = function(){
    scrollCalc();
  }

  window.onresize = function(){
    scrollCalc();
  }

  window.onscroll = function(){
    scrollCalc();
  }
});









