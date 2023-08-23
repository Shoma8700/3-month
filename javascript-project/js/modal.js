
const modalTrigger = document.querySelector("#btn-get")
const modal = document.querySelector(".modal")
const closeModalButton = document.querySelector(".modal_close")

const openModal = () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"

    }

const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ""
}
modalTrigger.onclick = () => openModal()

closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}

const scrollOpen = () =>{
    const bottom = window.innerHeight + window.scrollY
    const bodyHight = document.body.offsetHeight - 1
    if (bottom >= bodyHight){
        openModal()
        document.removeEventListener("scroll", scrollOpen)

    }
    console.log(bottom, bodyHight)

}
document.addEventListener("scroll",scrollOpen)

setTimeout(openModal, 10000);

