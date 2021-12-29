const circle = document.querySelector(".circle");

window.addEventListener("mousemove", (event) => {
  let posX = event.clientX;
  posX = posX - document.documentElement.clientHeight * 0.2;
  circle.style.transform = `translate(${posX}px, 0)`;
});
