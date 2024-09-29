const swiperImages = [
  {
    src: "./images/02b59f9b-6fd8-4196-afac-01ef63fc438b 1.png",
    alt: "Image 1",
  },
  { src: "./images/1814911 1.png", alt: "Image 2" },
  { src: "./images/28bffd13739be22f777b8731de4e0a48 1.png", alt: "Image 1" },
  { src: "./images/everlane-logo 1.png", alt: "Image 2" },
  { src: "./images/gorjana-horiz-gold 1.png", alt: "Image 1" },
  { src: "./images/image 1.png", alt: "Image 2" },
];

let swiperRight = document.querySelector("#swiperRight");
let swiperLeft = document.querySelector("#swiperLeft");

swiperImages.forEach((item) => {
  const slide = document.createElement("img");
  slide.classList.add("swiper-slide");
  slide.src = item.src;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.alt = item.alt;
  swiperRight.appendChild(slide);
});
swiperImages.forEach((item) => {
  const slide = document.createElement("img");
  slide.classList.add("swiper-slide");
  slide.src = item.src;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.alt = item.alt;
  swiperLeft.appendChild(slide);
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  //   centeredSlides: true,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  spaceBetween: 32,
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  //   centeredSlides: true,
  autoplay: {
    reverseDirection: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  spaceBetween: 32,
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const designCollection = [
  {
    title: "Sampling & Approvals",
    image: "./images/image 2.png",
    details: {
      heading: "Give Sample Feedback & Manage Approvals",
      description:
        " Improve sample management, feedback, and collaboration with vendors to reduce errors and shorten lead times.",
      detailPoints: [
        "Request and track all types of product samples online",
        "Approve, reject, or give feedback with annotations",
        "Use WFX Click app to upload and share sample photos",
        "Collaborate with vendors on a centralized system",
        "Analyze approval rates & generate vendor scorecards",
        "Set auto alerts to keep sample timelines on track",
      ],
    },
  },
  {
    title: "Quality Control",
    image: "",
    details: {
      heading: "",
      description: "",
      detailPoints: [],
    },
  },
  {
    title: "Time & Action",
    image: "",
    details: {
      heading: "",
      description: "",
      detailPoints: [],
    },
  },
  {
    title: "Design Inspiration",
    image: "",
    details: {
      heading: "",
      description: "",
      detailPoints: [],
    },
  },
  {
    title: "Product & Material Library ",
    image: "",
    details: {
      heading: "",
      description: "",
      detailPoints: [],
    },
  },
  {
    title: "Central Techpack",
    image: "",
    details: {
      heading: "",
      description: "",
      detailPoints: [],
    },
  },
];

let swiperSection = document.querySelector("#swiperSection");
let informatinSection = document.querySelector("#informatinSection");

designCollection.forEach((item) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerText = item.title;
  swiperSection.appendChild(slide);

  if (item?.image) {
    let thirdSectiondetails = ` <div class="mainImage">`;
    thirdSectiondetails += `<img src="${item?.image}" alt="" />`;

    thirdSectiondetails += ` </div>
        <div class="details">
        <h2 class="detailHeading">${item?.details?.heading}</h2>
        <p class="detailSectionSubText">${item?.details?.description}</p>
        <ul>`;
    item?.details?.detailPoints?.forEach((list) => {
      thirdSectiondetails += `<li>${list}</li>`;
    });
    thirdSectiondetails += `</ul>
        </div>`;
    informatinSection.insertAdjacentHTML("afterbegin", thirdSectiondetails);
  }
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 7,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   loop: true,
  //   centeredSlides: true,
  //   autoplay: {
  //     reverseDirection: true,
  //     delay: 0,
  //     pauseOnMouseEnter: false,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

let testimonial = [
  {
    name: "Nathaniel",
    designation: "Product Owner at Creative Code",
    avatar: "./images/testomoni/Ellipse 8.png",
    review:
      "Using Subscription has slashed our costs. The design request process is incredibly straightforward, and we get our designs super fast!",
    company: "./images/testomoni/Group 48095833.png",
  },
  {
    name: "Kathy",
    designation: "Director at Vivid Concepts",
    avatar: "./images/testomoni/Ellipse 9.png",
    review:
      "Ever since we signed up to Subscription, our business costs went down massively. Requesting designs is so simple and we receive them lightning quick!",
    company: "./images/testomoni/image 5.png",
  },
  {
    name: "Jane",
    designation: "Founder at Pixel Pioneers",
    avatar: "./images/testomoni/Ellipse 10.png",
    review:
      "Thanks to Subscription, our costs have dropped dramatically. The user-friendly design request system and fast turnaround are outstanding!",
    company: "./images/testomoni/comestri-logo 1.png",
  },
];

let testimonialSwiper = document.querySelector("#swiperSectionTestomoni");
testimonial.forEach((item) => {
  let testimonial = ` <div class="testimonial swiper-slide">
                  <div class="Company"><img src="${item.company}" alt="" /></div>
                  <p>${item.review}</p>
                  <div class="personInformation">
                    <img src="${item.avatar}" alt="" />
                    <div class="personName">
                      <p class="name">${item.name}</p>
                      <p class="company">${item.designation}</p>
                    </div>
                  </div>
                </div>`;
  testimonialSwiper.insertAdjacentHTML("afterbegin", testimonial);
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  //   centeredSlides: true,

  autoplay: {
    delay: 0,
  },
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: false,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: false,
    },
  },
});

let favoriteToolsImages = [
  "./images/favorite tools/Group 48095907.png",
  "./images/favorite tools/Group 48095908.png",
  "./images/favorite tools/Group 48095909.png",
  "./images/favorite tools/Group 48095910.png",
  "./images/favorite tools/Group 48095911.png",
  "./images/favorite tools/Group 48095912.png",
  "./images/favorite tools/Group 48095913.png",
  "./images/favorite tools/Group 48095914.png",
  "./images/favorite tools/Group 48095915.png",
  "./images/favorite tools/Group 48095916.png",
  "./images/favorite tools/Group 48095917.png",
  "./images/favorite tools/Group 48095918.png",
];

let swiperRight1 = document.querySelector("#swiperRight1");
let swiperLeft1 = document.querySelector("#swiperLeft1");

favoriteToolsImages.forEach((item) => {
  const slide = document.createElement("img");
  slide.classList.add("swiper-slide");
  slide.src = item;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.alt = item.alt;
  swiperRight1.appendChild(slide);
});
favoriteToolsImages.forEach((item) => {
  const slide = document.createElement("img");
  slide.classList.add("swiper-slide");
  slide.src = item;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.alt = item.alt;
  swiperLeft1.appendChild(slide);
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  //   centeredSlides: true,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  //   centeredSlides: true,
  autoplay: {
    reverseDirection: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  slidesPerView: 5.5,
  spaceBetween: 32,
  speed: 10000,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 2000,
  //     pauseOnMouseEnter: false,
  //     disableOnInteraction: false,
  //   },
  spaceBetween: 32,
  //   speed: 10000,
  breakpoints: {
    961: { slidesPerView: 2 },
    767: { slidesPerView: 1 },
    540: { slidesPerView: 1 },
    420: { slidesPerView: 1 },
  },
});
