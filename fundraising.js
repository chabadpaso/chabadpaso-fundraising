console.log("Chabad Paso fundraising script loaded");

(function () {
  var box = document.createElement("div");

  box.textContent = "GITHUB TEST WORKING";

  box.style.cssText =
    "max-width:700px;" +
    "margin:20px auto;" +
    "padding:18px;" +
    "text-align:center;" +
    "background:#dff5e1;" +
    "border:2px solid #27843b;" +
    "font:bold 18px Arial;" +
    "color:#185a28;";

  var donateWrapper = document.getElementById("donate-wrapper");

  if (donateWrapper) {
    donateWrapper.parentNode.insertBefore(box, donateWrapper);
  }
})();
