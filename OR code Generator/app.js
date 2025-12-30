let qrText = document.querySelector("#input-text");
let btn = document.querySelector(".btn");
let image = document.querySelector("#image");
let imageBox = document.querySelector(".image-box");

function getQRCode() {
    if (qrText.value.length> 0) {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imageBox.classList.add("image-box2");
    }
    else{
      
    }
}

btn.addEventListener("click", getQRCode);