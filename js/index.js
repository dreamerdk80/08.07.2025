const buttons = document.querySelectorAll(".slider__pagination button")
const elements = document.querySelectorAll(".element")
const nav = document.querySelectorAll("nav a")

nav.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const id = link.getAttribute("href")
        const element = document.querySelector(id)
        element.scrollIntoView({ behavior: "smooth", block: "nearest" })
    })
})

buttons.forEach((button, n) => {
    button.addEventListener("click", () => {
        for (let element of elements) {
            element.style.left = -130 * n + "%"
        }
        for (let button of buttons) {
            button.style.opacity = 0.5
        }
        button.style.opacity = 1
    })
})