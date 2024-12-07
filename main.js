var source = document.querySelector('.source');
        var video = document.querySelector('video');
        var thOne = document.querySelector('.img1');
        var thTwo = document.querySelector('.img2');
        var thThree = document.querySelector('.img3');
        var thFour = document.querySelector('.img4');
       

        thOne.onclick = function(){
            source.src = './assets/5117938-hd_1920_1080_24fps.mp4';
            video.load();
           

        }
        thOne.addEventListener("click",function(){
            source.src = './assets/5117938-hd_1920_1080_24fps.mp4';
            video.load();
           
        })
         thTwo.addEventListener("click",function(){
             source.src = './assets/3177175-hd_1920_1080_30fps.mp4';
              video.load();
           
        })
        thThree.addEventListener("click",function(){
            source.src = './assets/3591016-hd_1920_1080_30fps.mp4';
            video.load();
           
        })
        thFour.addEventListener("click",function(){
            source.src = './assets/16360150-hd_1920_1080_25fps.mp4';
            video.load();
           
        })

        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var lightbox = document.querySelector('.lightbox');
var showImage = document.querySelector(".show");
var image1 = document.querySelectorAll(".image");
image1.forEach(function(img){
    img.onclick= function(){
       
        lightbox.classList.add("show");
        showImage.src =  this.children[0].src
    }

})
// image1.onclick = function(){
//     lightbox.classList.add("show");

// }
lightbox.onclick = function (){
    lightbox.classList.remove("show");
}