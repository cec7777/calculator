let output = document.querySelector(".output");
let result = document.querySelector(".result");
const keys = document.querySelectorAll("button");
keys.forEach(key => {key.addEventListener("click", calculate);});
function calculate(){
    let buttontext = this.innerText;
    if (buttontext === "AC" ) {
        output.innerText = "";
        result.innerText= "0";
        result.style.animation="";
        output.style.animation="";
        return;
    }
    if (buttontext === "DEL") {
        output.textContent = output.textContent.substr(0, output.textContent.length -1);
        return;
    }
    if (buttontext=== "=") {
        result.innerText=eval(output.innerText);
        result.style.animation="big 0.5s ease-in-out";
        output.style.animation="small 0.5s ease-in-out"; 
        result.style.animationFillMode="forwards";
        output.style.animationFillMode="forwards";


    }
    else {
        output.textContent += buttontext;
        return;
    }
}