import "./styles/style.css";

const city = document.getElementById('city')
const searchBtn = document.querySelector('form > button')
const form = document.querySelector('form')
searchBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (city.validity.valid) {
    console.log(true)
  }
  form.reset()
})