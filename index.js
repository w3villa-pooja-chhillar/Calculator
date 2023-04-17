
function dot(elm) {
    let number = document.getElementById('dot');
    let screen = document.getElementsByClassName('display')[0];
    if (screen.innerText === "ERROR" || screen.innerText === "NoN") {
        screen.innerHTML = ""
    }
    let value = screen.innerText;
    if (value.slice(-1) === ".") {
        screen.innerHTML = screen.innerText + "";
    }
    else {
        screen.innerHTML = screen.innerText + number.innerText;
    }
}
function number(elm) {
    let number = document.getElementById('button-1');
    let screen = document.getElementsByClassName('display')[0];
    if (screen.innerText === "ERROR") {
        screen.innerHTML = ""
    }
    screen.innerHTML = screen.innerText + elm.innerText;
}
function allClear() {
    let screen = document.getElementsByClassName('display')[0];
    screen.innerHTML = "";
}
function Delete() {
    let screen = document.getElementsByClassName('display')[0];
    if (screen.innerText === "ERROR" || screen.innerText === "NoN") {
        screen.innerHTML = ""
    }
    screen.innerText = screen.innerText.slice(0, -1);
}
function equal() {
    let screen = document.getElementsByClassName('display')[0];
    let value = screen.innerText;
    try {
        if (value.includes("+") || value.includes("-") || value.includes("/") || value.includes("*")) {
            screen.innerHTML = eval(value);
        }
    }
    catch {
        screen.innerHTML = "ERROR";
    }
}

function operation(elment) {
    let screen = document.getElementsByClassName('display')[0];
    let value = screen.innerText;
    let index = value.length - 1;
    let last = screen.innerText.charAt(index);
    if (screen.innerText.charAt(index) === "+" || screen.innerText.charAt(index) === "-" || screen.innerText.charAt(index) === "*" || screen.innerText.charAt(index) === "/") {
    }
    else if (screen.innerText.length == 0 && elment.innerText != "-") {
        screen.innerHTML = "";

    }
    else if (screen.innerText === "ERROR" || screen.innerText === "NoN") {
        screen.innerHTML = "";
    }
    else {
        elment.innerText
        screen.innerHTML = screen.innerText + elment.innerText;
    }
}