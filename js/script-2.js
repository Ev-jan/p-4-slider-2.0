const slides = [
    {   city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        image: "/images-content/img-slide-1.png"
    },
    {   city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        image: "/images-content/img-slide-2.png"
    },
    {   city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        image: "/images-content/img-slide-3.png"
    }
  ]
  
  let city = document.querySelector(".info-block__text_city");
  let area = document.querySelector(".info-block__text_area");
  let time = document.querySelector(".info-block__text_time");
  let img = document.querySelector(".slideshow-container");
  let dots = document.getElementsByClassName("dot-indicator");
  let captions = document.getElementsByClassName("caption-text");
  let slideIndex = 1;
  
  showSlides(slideIndex);

  function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
   }

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace("dot-indicator_active", "");
    captions[i].className = captions[i].className.replace(" caption-text_active", "");}
  img.style.backgroundImage = `url(${slides[slideIndex-1].image})`;
  city.innerText = slides[slideIndex-1].city;
  area.innerText = slides[slideIndex-1].area;
  time.innerText = slides[slideIndex-1].time;
  dots[slideIndex-1].className += " dot-indicator_active";
  captions[slideIndex-1].className += " caption-text_active";
}