
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

let num = 0

let count = setInterval(() => {
    num ++
    document.write(num)

}, 1000)

setTimeout(() => {
    clearInterval(count)
},5000)
