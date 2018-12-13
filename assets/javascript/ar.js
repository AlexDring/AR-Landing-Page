var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();

// Accordian


function initAccordion(accordionElem){
  
  //when panel is clicked, handlePanelClick is called.          
  function handlePanelClick(event){
      showPanel(event.currentTarget);
  }
//Hide currentPanel and show new panel.  
  
  function showPanel(panel){
    //Hide current one. First time it will be null. 
     var expandedPanel = accordionElem.querySelector(".active");
     if (expandedPanel){
         expandedPanel.classList.remove("active");
     }
     //Show new one
     panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++){
       allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0])
}
initAccordion(document.getElementById("accordion"));

function noClass() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container ";
}

function emailAction() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container action-email";
}

function laptopAction() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container action-laptop";
}

function patchingAction() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container action-patching";
}

// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
};

function noClass() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container action-server";
}

function emailAction() {
  document.getElementById("action-image").className = ''.className = ".action-section__image-container action-email";
}


