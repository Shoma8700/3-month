
////////////////////////////////////////////////////////////////
//Lesson_2
// Основы Асинхронность
//
// setTimeout(() => {
//     console.log("1")
// },1000)
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// },1000)
// setTimeout(() => {
//     console.log("4")
// },1000)


// setInterval(() => {
//     console.log("1")
// }, 1000)
// const interval = setInterval(() =>{
//     console.log("Hello")
// },1000)

//
// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)
// clearInterval(interval)


//
// const btn = document.querySelector("button").onclick = () =>{
//     setTimeout(() => {
//         console.log("www")
//     }, 1000)
// }
//
// let num = 0
//
// let count = setInterval(() => {
//     num ++
//     document.write(num)
//
// }, 1000)
//
// setTimeout(() => {
//     clearInterval(count)
// },5000)


////////////////////////////////////////////////////////////////////////////////
//3-lesson

//
// buttons[0].classList.add("red")
// buttons[0].classList.remove("red")
//
// const buttons = document.querySelectorAll("button");
// const wrapper = document.querySelector(".btn-block");
// //
// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         if (event.target.classList.contains("red")){
//             event.target.classList.remove("red")
//         } else {
//             event.target.classList.add("red")
//         }
//     })
// })
//
// const newBtn = document.createElement("button")
// wrapper.append(newBtn)

//Делегирование событии
//
// const buttons = document.querySelectorAll("button");
// const wrapper = document.querySelector(".btn-block");
//
// wrapper.onmouseover = (event) =>{
//     const element =event.target
//     if (element.tagName.toLowerCase() === "button") {
//         element.onclick = (e) =>{
//             if (e.target.classList.contains("red")){
//             e.target.classList.remove("red")
//         } else {
//             e.target.classList.add("red")
//         }
//         }
//     }
// }
// const newBtn = document.createElement("button")
// wrapper.append(newBtn)



/////////////////////////////////////////////
//lesson 4

//JSON
//
const people = {
    name: "Shamil",
    age: 36
}
// const infoAboutMeJSON = JSON.stringify(people)
// console.log(infoAboutMeJSON)
//
// const infoAboutMeObject = JSON.parse(infoAboutMeJSON)
//
// console.log(infoAboutMeObject)


// XHR - XML Http Request
const button = document.querySelector(".btn")

//request = GET-poluchaet dannie,POST,DELETE,PATCH

button.addEventListener("click", () => {
    const request = new XMLHttpRequest() //создания запроса
    request.open("GET","data.json" ) //Обьявления метода запроса и указания пути
    request.setRequestHeader("content-type", "application/json") // указания загаловки
    request.send()// otpravka zaprosa
    console.log("ok")

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".age").innerHTML = data.age
        console.log(data.name)
    })

})

// const peoples = [
//     {
//         name: "Nurdin",
//         age: 19
//     },
//     {
//         name: "Idris",
//         age: 20
//     },
//     {
//         name: "Ilya",
//         age: 24
//     },
//     {
//         name: "Arslan",
//         age: 19
//     },
//     {
//         name: "Aijana",
//         age: 19
//     },
//     {
//         name: "Shamil",
//         age: 36
//     },
//     {
//         name: "Alina",
//         age: 18
//     }
//
// ]

// const peoplesBlock = document.querySelector(".peoples")

// peoples.forEach((person) => {
//     const personCard = document.createElement("div")
//     personCard.classList.add('card')
//     personCard.innerHTML = `
//     <h3>Name: ${person.name}</h3>
//     <span>Age: ${person.age}</span>
//
//     `
//     peoplesBlock.append(personCard)
// })
