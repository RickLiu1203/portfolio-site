const allclicktrans = document.querySelectorAll('.class clicktrans');
const navbar = document.querySelector(".navbar")
const explore = document.querySelector(".explorenav")

var scrollPosition = 0

function removeClasses() {
    for (var i = 0; i < allclicktrans.length; i++) {
        allclicktrans[i].classList.remove("clicktrans");
    }
}

document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    const highlight = document.querySelector(".highlight")

    highlight.classList.remove("highlight");
    
    if (clickedElement.classList.contains("panel")) {
      highlight.classList.add("clicktrans");
      clickedElement.classList.add("clicktrans");
      clickedElement.classList.add("highlight");
    }
  });
  

window.addEventListener('scroll', function() {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0){
        navbar.classList.add("scrolled")
        explore.classList.add("scrolled")
    } else {
        navbar.classList.remove("scrolled")
        explore.classList.remove("scrolled")
    }

});

window.addEventListener("resize", removeClasses);

