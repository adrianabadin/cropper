// // import Cropper from "./node_modules/cropperjs/dist/cropper.esm.min.js";
// const image = document.getElementById("image");
// const cropper = new Cropper(image, {
//   aspectRatio: 1,
// });

// document.querySelector("#btn-crop").addEventListener("click", function () {
//   var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
//   document.getElementById("output").src = croppedImage;
//   document.querySelector(".cropped-container").style.display = "flex";
// });
const can = document.getElementById("canvascjs");
const sel = document.getElementById("cropperSelection");
const but = document.getElementById("btn-crop");
but.addEventListener("click", () => {
  //const otro = can.cropper.$toCanvas();
  can
    .$toCanvas()
    .then((e) => console.log(e))
    .catch((err) => console.log(err));
});
