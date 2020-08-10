// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch(`/weather?city=${location}`).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = data.city
            messageTwo.textContent = `Current Temperature is ${data.temp}`
            messageThree.textContent = `Chance of rain is ${data.prec}%`
        })
    })
})