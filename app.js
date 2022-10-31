const featureClick = document.getElementsByClassName("feature-container");

for (i = 0; i < featureClick.length; i++) {
  featureClick[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
