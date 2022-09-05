var showMinu = (e) => {
  e.classList.toggle("active");
  var minu = e.parentElement.getElementsByClassName("nav-s")[0];

  minu.classList.toggle("active");
  setTimeout(() => {
    minu.classList.toggle("an");
  }, 00);
};

var q = (q) => document.querySelector(q);

window.addEventListener("scroll", () => {
  var headerImgBox = document.querySelector(".header .imgbox");
  var scrolls = scrollY < 500 ? scrollY : 500;

  headerImgBox.style.setProperty(
    "transform",
    `translate3d(0px, ${scrolls - 70 > 0 ? scrolls - 70 : 0}px, 0px)`
  );
  // headerImgBox.style.background = "blue";
  console.log(scrolls);
});
