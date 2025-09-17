const images = document.querySelectorAll(".carousel-images img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

  function showImage(i) {
    images.forEach((img, idx) => {
      img.classList.toggle("active", idx === i);
    });
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });