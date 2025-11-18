let inputBox = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText == "=") {
            string = eval(string);
            inputBox.value = string;
        }
        else if (button.innerText == "AC") {
            string = "";
            inputBox.value = string;
        }
        else if (button.innerText == "DEL") {
            let s = "";
            string=string+"";
            for (i = 0; i < (string.length-1); i++) {
                s = s + string[i];
            }
            string = s;
            inputBox.value = string;
        }
        else {
            string = string + button.innerText;
            inputBox.value = string;
        }
    })
})
