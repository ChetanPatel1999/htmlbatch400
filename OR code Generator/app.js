let qrText = document.querySelector("#input-text");
let btn = document.querySelector(".btn");
let image = document.querySelector("#image");
let imageBox = document.querySelector(".image-box");

function getQRCode() {
    if (qrText.value.length > 0) {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imageBox.classList.add("image-box2");
    }
    else {
        //  let error= document.createElement("p");
        //  error.innerText="please enter text or URL";
        //  error.classList.add("color-red");
        //  qrText.after(error);
        //  setTimeout(()=>{ 
        //     error.remove();
        //  },1000)
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 500)


    }
}

btn.addEventListener("click", getQRCode);