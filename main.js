
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

const buttons = document.querySelectorAll("button");
const wrapper = document.querySelector(".btn-block");

wrapper.onmouseover = (event) =>{
    const element =event.target
    if (element.tagName.toLowerCase() === "button") {
        element.onclick = (e) =>{
            if (e.target.classList.contains("red")){
            e.target.classList.remove("red")
        } else {
            e.target.classList.add("red")
        }
        }
    }
}
const newBtn = document.createElement("button")
wrapper.append(newBtn)