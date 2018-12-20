// Accordian

function initAccordion(accordionElem) {
  //when panel is clicked, handlePanelClick is called.
  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }
  //Hide currentPanel and show new panel.

  function showPanel(panel) {
    //Hide current one. First time it will be null.
    var expandedPanel = accordionElem.querySelector(".active");
    if (expandedPanel) {
      expandedPanel.classList.remove("active");
    }
    //Show new one
    panel.classList.add("active");
  }
  var allPanelElems = accordionElem.querySelectorAll(".panel");
  for (var i = 0, len = allPanelElems.length; i < len; i++) {
    allPanelElems[i].addEventListener("click", handlePanelClick);
  }
  //By Default Show first panel
  showPanel(allPanelElems[0]);
}
initAccordion(document.getElementById("accordion"));

// Slideshows

var slideIndex = [1, 1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(2, 3);
showDivs(3, 4);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// Change Slideshow

function allHidden() {
  var divs = document.querySelectorAll(".action-section__image-container");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add("hide-slideshow");
    divs[i].classList.remove("show-slideshow");
  }
}

function laptopAction() {
  allHidden();
  document.getElementById("action-laptop").classList.toggle("show-slideshow");
}

function emailAction() {
  allHidden();
  document.getElementById("action-email").classList.toggle("show-slideshow");
}

function threeAction() {
  allHidden();
  document.getElementById("action-3").classList.toggle("show-slideshow");
}

function fourAction() {
  allHidden();
  document.getElementById("action-4").classList.toggle("show-slideshow");
}


// // Get the modal
// var modal = document.getElementsByClassName('myModal');

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // // When the user clicks on the button, open the modal 
// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// // // When the user clicks on <span> (x), close the modal
// // span.onclick = function() {
// //   modal.style.display = "none";
// // }


// for(let i=0;i<btn.length;i++){
//   btn[i].onclick = function() {
//     modal[i].style.display = "block";
//   }
// }

// for(let i=0;i<span.length;i++){
//   span[i].onclick = function() {
//      modal[i].style.display = "none";
//   }
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     for(let i=0;i<btn.length;i++){
//         modal[i].style.display = "none";
      
//     }
//   }
// }

// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = function(event) {
// //   if (event.target == modal) {
// //     modal.style.display = "none";
// //   }
// // }