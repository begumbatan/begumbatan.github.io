
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

function makeBig() {}

const pics = [
  "pic1.jpg",
  "pic2.png",
  "pic3.png",
  "pic4.png",
  "pic5.jpg",
  "pic6.png",

];
const alts = ["pic1", "pic2", "pic3", "pic4", "pic5"];

pics.forEach((pic, index) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", pic);
  newImage.setAttribute("alt", alts[index]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", pic);
    displayedImage.setAttribute("alt", alts[index]);
  });
});


btn.addEventListener("click", () => {
  const button = btn.getAttribute("class");
  if (button == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
