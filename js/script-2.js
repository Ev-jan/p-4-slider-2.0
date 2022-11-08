const slides = [
    {   caption: 'Rostov-on-Don, Admiral',
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        img: "/images-content/img-slide-1.png"
    },
    {   caption: 'Sochi Thieves',
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        img: "/images-content/img-slide-2.png"
    },
    {   caption: 'Rostov-on-Don Patriotic',
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        img: "/images-content/img-slide-3.png"
    },
  ]
  
  let caption = document.getElementsByClassName("caption-text");
  let city = document.getElementsByClassName("info-block__text_city");
  let area = document.getElementsByClassName("info-block__text_area");
  let time = document.getElementsByClassName("info-block__text_time");
  
  let setSlide = (index) => {
    caption.innerText = slides[index].caption;
    img.style.backgroundImage = `url(${slides[index].img})`;
    city.innerText = slides[index].city;
    area.innerText = slides[index].area;
    time.innerText = slides[index].time;
  }
  
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;
  
  prev.addEventListener('click', () => {
    setSlide(currentIndex - 1);
    currentIndex -= 1;
  })
  next.addEventListener('click', () => {
    setSlide(currentIndex + 1);
    currentIndex += 1;
  })