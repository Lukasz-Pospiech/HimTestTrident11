window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", function() {


    const burger = get('containerHamburger');
    burger.addEventListener("touchstart", function(event) {
      if (event.changedTouches[0]) {
          burger.classList.toggle("change");
      }
  }, false);

    let menuState = "closed";
    const menuItems = document.querySelectorAll(".menuItems");
    const menuDiv = get('menuDiv');
    burger.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            if (menuState === "closed") {
              menuDiv.classList.remove("closeMenu");
              menuDiv.classList.add("openMenu");
              
                menuState = "open";
            }
            else if (menuState === "open") {
              menuDiv.classList.remove("openMenu");
              menuDiv.classList.add("closeMenu");

                menuState = "closed";
            }
        }
    }, false);



//INTRO TEXT ANIMATION

// setInterval(reloadIntroAnimation, 30000, "intro1", "intro1Animation");
// setInterval(reloadIntroAnimation, 30000, "intro2", "intro2Animation");
// setInterval(reloadIntroAnimation, 30000, "intro3", "intro3Animation");

// function reloadIntroAnimation(el, introClass) {
//     let element = document.getElementById(el);
//     element.classList.remove(introClass);
//     void element.offsetWidth; // Trigger a reflow to restart the animation
//     element.classList.add(introClass);
// }


  
// PHOTO CAROUSEL

const photos1 = document.querySelectorAll('.photo1');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
let currentPhoto1 = 0;
let intervalId = setInterval(showNextPhoto1, 4000);

for (let i = 0, j = 0; i < photos1.length; i++, j -= 100) {
  photos1[i].style.left = `${j}%`;
}

photos1[currentPhoto1].classList.add('active1');

arrowLeft.addEventListener('click', () => {
  clearInterval(intervalId);
  photos1[currentPhoto1].classList.remove('active1');
  currentPhoto1 = (currentPhoto1 === 0) ? photos1.length - 1 : currentPhoto1 - 1;
  photos1[currentPhoto1].classList.add('active1');
});

arrowRight.addEventListener('click', () => {
  clearInterval(intervalId);
  photos1[currentPhoto1].classList.remove('active1');
  currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
  photos1[currentPhoto1].classList.add('active1');
});

function showNextPhoto1() {
  photos1[currentPhoto1].classList.remove('active1');
  currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
  photos1[currentPhoto1].classList.add('active1');
}

    // const photos1 = document.querySelectorAll('.photo1');
    // for (let i = 0, j = 0; i < photos1.length; i++, j -= 100) {
    //     photos1[i].style.left = `${j}%`;
    // }
    // let currentPhoto1 = 0;
    // photos1[currentPhoto1].classList.add('active1'); 
    // setInterval(showNextPhoto1, 4000); 
    // function showNextPhoto1() {
    //     photos1[currentPhoto1].classList.remove('active1'); 
    //     currentPhoto1 = (currentPhoto1 + 1) % photos1.length;
    //     photos1[currentPhoto1].classList.add('active1'); 
    //   }
     



// UP SQUARE ICON

const upSquareIcon = document.querySelector('#upSquareIcon');
const trigger = window.innerHeight * 2; // The point at which the icon should appear

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= trigger) {
    upSquareIcon.classList.add('show');
  } else {
    upSquareIcon.classList.remove('show');
  }
});

upSquareIcon.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page with a smooth animation
});

});


