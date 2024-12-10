const targetImg = document.getElementById("target");
const triggerP = document.getElementById("trigger");

triggerP.addEventListener("mouseover", function() {
  targetImg.src = "picB.jpg";
});

triggerP.addEventListener("mouseout", function() {
  targetImg.src = "picA.jpg";
});
