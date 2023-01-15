const navbar = document.querySelector('.navbar');
const getStartedButton = document.querySelector('.join');
const changingSpot = 430;

const changeColor = function(element, color){window.addEventListener('scroll', function(){
  const scrollingPoint = window.scrollY;

  if (scrollingPoint >= changingSpot) {
    element.style.backgroundColor = color;
  } else {
    element.style.backgroundColor = '';
  }
})
};

changeColor(navbar, 'white');
changeColor(getStartedButton, 'green');