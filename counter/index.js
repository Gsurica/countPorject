let number = document.querySelector(".numbers").innerHTML
const button =  document.querySelector(".button")
const button2 = document.querySelector(".button2")

const increment = () => {
    number++
    document.querySelector(".numbers").innerHTML = number
}

const decrement = () => {
    number--
    document.querySelector(".numbers").innerHTML = number
}

button.addEventListener("click", increment)
button2.addEventListener("click", decrement)
