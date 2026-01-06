let inputBox = document.querySelector("#input-box");
let dropdownContainer = document.querySelectorAll(".dropDown-container select");
let to = document.querySelector(".to");
let from = document.querySelector(".from");
let msg = document.querySelector(".msg");
let btn = document.querySelector("#btn");

for (select of dropdownContainer) {
    for (curCode in CurrencyCodeToCountryCode) {
        let option = document.createElement("option");
        option.value = curCode;
        option.innerText = curCode;
        if (curCode == "USD" && select.name == "from") {
            option.selected = "selected";
        }
        if (curCode == "INR" && select.name == "to") {
            option.selected = "selected";
        }
        select.append(option);

    }
    select.addEventListener("change", (evt) => {
        let countryCode = CurrencyCodeToCountryCode[evt.target.value]
        console.log(countryCode)
        let div = evt.target.parentElement;

        let image = div.querySelector("#image");
        image.src = `https://flagsapi.com/${countryCode}/flat/64.png`
    });
}