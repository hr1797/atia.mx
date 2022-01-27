const circle = document.querySelector(".circle");
const panels = document.getElementsByClassName("panel");
const body = document.getElementsByTagName("body")[0];
const circle_1 = document.querySelector(".circle_1");

window.addEventListener("mousemove", (event) => {
  let posX = event.clientX;
  posX = posX - document.documentElement.clientHeight * 0.2;
  circle.style.transform = `translate(${posX}px, 0)`;
});

window.addEventListener("scroll", () => {
  const scrollChanger = window.pageYOffset + window.innerHeight * 0.4;

  Array.from(panels).forEach((panel) => {
    const panelRect = panel.getBoundingClientRect();
    const panelHeight = panelRect.height;
    const panelTopPositionOnPage = window.pageYOffset + panelRect.y;
    const panelHeightWithSun = panelTopPositionOnPage + panelHeight / 2;

    if (
      panelTopPositionOnPage <= scrollChanger &&
      panelTopPositionOnPage + panelHeight > scrollChanger
    ) {
      body.style.backgroundColor = panel.dataset.color;
    }

    if (
      panel.classList.contains("banner3_4") &&
      panelHeightWithSun <= window.pageYOffset + window.innerHeight &&
      panelHeightWithSun + panelHeight / 2 > window.pageYOffset
    ) {
      const porcentageProgress = 1 - panelRect.bottom / panelRect.height;
      const posX = window.innerWidth * porcentageProgress;
      const posY = window.innerHeight * porcentageProgress * 0.5;
      circle_1.style.transform = `translate(${posX}px, ${posY}px)`;
    }
  });
});
