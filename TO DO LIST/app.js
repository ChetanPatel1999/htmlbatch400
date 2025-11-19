let inputBox = document.querySelector("#input-box");
let btn = document.querySelector("#btn");
let listContainer = document.querySelector(".list-container");

btn.addEventListener("click", () => {
    let list = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML="&#10005;";
    list.innerText = inputBox.value;
    list.append(span);
    listContainer.append(list);
    inputBox.value = "";
})