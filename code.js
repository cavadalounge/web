const newMenuBtn = document.querySelectorAll(".newMenuCloseBtn");
newMenuBtn.forEach((btn) => {

  btn.addEventListener("click", (e) => {
    console.log("Clicked");
    const paretNode = e.target.parentNode;
    console.log("[alusine]", paretNode.id);
    var tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(paretNode.id).style.width = "0";
  });
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openTab(evt, tab) {
  // Declare all variables
  var i, tabs, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  document.getElementById(verticalmenu).style.height = "100%";
  evt.currentTarget.className += " active";
}

function clear(tab) {
  var i, info;
  var info = document.getElementsByClassName(tab);
  for (i = 0; i < info.length; i++) {
    info[i].style.display = "none";
  }
}

/* Set the width of the side navigation to 450px */
function openNav(tab) {
  document.getElementById(tab).style.display = "block";
  document.getElementById(tab).style.width = "100%";
}

/* Set the width of the side navigation to 0 */

function closeNav(tab) {
  var tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.width = "0";
}
