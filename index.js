// document.querySelector(".menuButton").addEventListener("click", function () {
//   console.log("Clicked");
//   //   document.querySelector(".contents").style.opacity = "0.4";
//   var opacityDiv = document.querySelector(".opacityDiv");
//   opacityDiv.style.position = "absolute";
//   opacityDiv.style.width = "100%";
//   opacityDiv.style.height = "100vh";
//   opacityDiv.style.opacity = "0.4";
// });
var footer = document.getElementsByTagName("footer")[0];
document
  .querySelector(".menuButton")
  .addEventListener("click", function click() {
    var contents = document.querySelector(".contents");
    contents.style.display = "none";
    var main = document.getElementsByTagName("main")[0];
    main.style.display = "none";
    footer.style.display = "none";
  });
document.querySelector("#cross").addEventListener("click", function () {
  var contents = document.querySelector(".contents");
  contents.style.display = "flex";
  var main = document.getElementsByTagName("main")[0];
  main.style.display = "flex";
  footer.style.display = "flex";
});

// if (
//   "IntersectionObserver" in window &&
//   "IntersectionObserverEntry" in window &&
//   "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
//   let observer = new IntersectionObserver((entries) => {
//     console.log(entries[0].boundingClientRect.y);
//     if (entries[0].boundingClientRect.y < 0) {
//       document.querySelector("#yo").classList.remove("hide");
//     } else {
//       document.querySelector("#yo").classList.add("hide");
//     }
//   });
//   observer.observe(document.querySelector("#yo"));
// }
var side_bar = document.querySelector(".side_bar");
window.addEventListener("scroll", function anything() {
  var scrollpositions = window.scrollY;
  var scrollThreshold = 240;
  if (scrollpositions > scrollThreshold) {
    document.querySelector("#yo").classList.add("show");
    // document.querySelector("#yo").classList.remove("hide");
    side_bar.style.display = "none";
  } else {
    side_bar.style.display = "flex";
    document.querySelector("#yo").classList.add("hide");
    document.querySelector("#yo").classList.remove("show");
  }
});
