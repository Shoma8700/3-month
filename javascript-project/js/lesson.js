// PHONE CHECKER

// DOM - document object model

const phoneInput = document.querySelector("#phone_input")
const phoneCheck = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"

    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"

    }
}
// TAB SLAIDER

const tabContent = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContent.forEach((item) =>{
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (index = 0) => {
    tabContent[index].style.display = "block";
    tabs[index].classList.add("tab_content_item_active")

}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")){
        tabs.forEach((item, i) => {
            if (event.target === item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoSlider()


//Convert
// DRY - don`t repeat yourself
// KISS - keep it short snd simple

const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")
console.log(eur)


const convertor = (element, target, target2, elementName) =>{
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/convertor.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const respons = JSON.parse(request.response)
            switch (elementName) {
                case "som":
                    target.value = (element.value * respons.som / respons.usd).toFixed(2)
                    target2.value = (element.value * respons.som / respons.eur).toFixed(2)
                    break
                case "usd":
                    target.value = (element.value * respons.usd / respons.som).toFixed(2)
                    target2.value = (element.value * respons.usd / respons.eur).toFixed(2)
                    break
                case "eur":
                    target.value = (element.value * respons.eur / respons.som).toFixed(2)
                    target2.value = (element.value * respons.eur / respons.usd).toFixed(2)
                    break
            }
            if(element.value === ""){
                target.value = ""
                target2.value = ""
            }
            // if (istru) {
            //     target.value = (element.value / respons.usd).toFixed(2)
            //     target2.value = (element.value / respons.eur).toFixed(2)
            // } else {
            //     target.value = (element.value * respons.usd).toFixed(2)
            //     target2.value = (element.value * respons.eur).toFixed(2)
            // }
            // element.value === "" ? target.value = "":""

        }
    }
}
convertor(som, usd, eur, "som")
convertor(usd, som, eur, "usd")
convertor(eur, som, usd, "eur")

// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convertor.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load",() => {
//         const respons = JSON.parse(request.response)
//         usd.value = (som.value / respons.usd).toFixed(2)
//     })
// })
// usd.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convertor.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load",() => {
//         const respons = JSON.parse(request.response)
//         som.value = (usd.value * respons.usd).toFixed(2)
//     })
// })


