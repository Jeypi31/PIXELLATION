let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
//<i class='bx bx-x'></i>
searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" , "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
})

//sidebar open close script
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=> {
    navLinks.style.left="0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left="-100%";
});

//sidebar sub menu open close script
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show1");
});
let moreArrow = document.querySelector(".more-arrow");
moreArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show2");
});
let jsArrow = document.querySelector(".js-arrow");
jsArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show3");
});

// const carouselInner = document.querySelector('.carousel-inner');
//   let currentIndex = 0;
//   const slides = document.querySelectorAll('.carousel-slide');

//   function showSlide(index) {
//     carouselInner.style.transform = `translateX(-${index * 100}%)`;
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

  // Automatically transition between slides
//   setInterval(nextSlide, 5000); // Change slide every 5 seconds

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }