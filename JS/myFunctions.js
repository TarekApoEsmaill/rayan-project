let checks = document.querySelectorAll(".check");
let info = document.querySelectorAll("tr.info");
let button = document.getElementById("btn");
let form = document.querySelector(".form");
let inputName = document.getElementById("name");
let send = document.getElementById("send");
let radio = document.querySelectorAll("input[type='radio']");
let salary = document.querySelectorAll(".salary");
let number = document.getElementById("number");
let tel = document.getElementById("tel");
let array = [];

checks.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        info[index].classList.toggle("show");
    })
})

radio.forEach((ele, index) => {
    ele.addEventListener("click", () => {
        let region = info[index].querySelector("td > div p").textContent;
        let services = info[index].querySelector("td > div:nth-child(2) p").textContent;
        let floor = info[index].querySelector("td > div:nth-child(3) p").textContent;
        array.push(region, services, floor);
        let sal = parseInt(salary[index].textContent);
        array.push(sal);
    })
})

button.addEventListener("click", () => {
    form.classList.add("show");
})

const regName = /[^a-zA-z]/ig
const regNumber = /\d{11}/ig
const regTel = /(098|095|093|096|094)\d{7}/ig

send.addEventListener("click", () => {
    if(inputName.value.length !== 0 || tel.value.length !== 0) {
        if (regName.test(inputName.value) && regNumber.test(number.value) && regTel.test(tel.value)) {
            form.classList.remove("show");
            alert(`
                ${array[0]}
                ${array[1]}
                ${array[2]}
            `);
            let counter = document.querySelector(".counter");
            counter.innerHTML = `${parseInt(counter.textContent) + +array[3]}ل.س`; 
            array = [];
        }
    } else {
        form.classList.remove("show");
            alert(`
                ${array[0]}
                ${array[1]}
                ${array[2]}
            `);
            let counter = document.querySelector(".counter");
            counter.innerHTML = `${parseInt(counter.textContent) + +array[3]}ل.س`; 
            array = [];
    }
})

