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
const salida = document.getElementById("output");
but.addEventListener("click", () => {
  //const otro = can.cropper.$toCanvas();
  sel
    .$toCanvas()
    .then((e) => {
      const link = document.createElement("a");
      link.setAttribute("href", e.toDataURL());
      link.download = "imagen-recortada.jpg";
      link.click();
      console.log(salida, e);
      salida.setAttribute("href", e.toDataURL());
    })
    .catch((err) => console.log(err));
});
