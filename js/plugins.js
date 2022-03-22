// Initionlize AOS
AOS.init();
// NavBar
let navBtn = document.getElementById("navBtn"),
  menu = document.getElementById("menu"),
  div = document.createElement("div"),
  span = document.getElementById("togglerIcon");

navBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  div.classList.toggle("active");
  document.body.appendChild(div);
  console.log(span);
  if (span.className === "navbar-toggler-icon") {
    span.className = "fa-solid fa-xmark";
  } else {
    span.className = "navbar-toggler-icon";
  }
});
menu.addEventListener("click", (e) => {
  if (e.target.dataset.link) {
    console.log("done");
    menu.classList.toggle("show");
span.className = "navbar-toggler-icon";
  }
});
document.addEventListener("click", (e) => {
  if (e.target === div) {
    div.classList.toggle("active");
    menu.classList.remove("show");
    div.remove;
    span.className = "navbar-toggler-icon";
  }
});
// facilities
let gallary = document.getElementById("gallary"),
  largeImg = document.getElementById("LargeImg"),
  showFullScreen = document.getElementById("showFullScreen"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  xmark = document.getElementById("xmark");

for (let i = 1; i < 10; i++) {
  let img = `<div class=" imgBox" data-aos="zoom-in" data-aos-duration="700">
  <img src="media/img (${i}).jpg" class="img-fluid" data-imgnum="${i}"/>
  </div>`;
  gallary.innerHTML += img;
}
gallary.addEventListener("click", (e) => {
  let imgnumber = e.target.dataset.imgnum;
  if (e.target.dataset.imgnum) {
    showFullScreen.style.display = "flex";
    largeImg.src = `media/img (${imgnumber}).jpg`;
    console.log(imgnumber);
    next.onclick = () => {
      if (imgnumber < 9) {
        imgnumber++;
        largeImg.src = `media/img (${imgnumber}).jpg`;
      }
    };
    prev.onclick = () => {
      if (imgnumber > 1) {
        imgnumber--;
        largeImg.src = `media/img (${imgnumber}).jpg`;
      }
    };
  }
});
xmark.onclick = () => {
  showFullScreen.style.display = "none";
};
let navbar = document.getElementById("navBar");
window.onscroll = (e) => {
  if (window.scrollY >= 30) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
  // Highlight Section Link
  let sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    // sec.getBoundingClientRect().top >= -200 &&
    // sec.getBoundingClientRect().top <= 150
    if (
      sec.getBoundingClientRect().top >= -200 &&
      sec.getBoundingClientRect().top <= 150
    ) {
      document.getElementById(`${sec.id}Sec`).style.color = "var(--blue)";
    } else {
      document.getElementById(`${sec.id}Sec`).style.color = "var(--black)";
    }
  });
};
// Scrolling
let links = document.querySelectorAll("ul");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.dataset.link) {
      document.getElementById(`${e.target.dataset.link}`).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
