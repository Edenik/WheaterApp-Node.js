console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#error') 
const resultMessage = document.getElementById('result') 


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            errorMessage.textContent =data.error
            resultMessage.innerHTML = ''
        } else {
            resultMessage.innerHTML =      
            `Location: ${data.location} <br>
            Forecast: ${data.forecastData.description} <br>
            Temp: ${data.forecastData.temp} degrees <br>
            Feels Like: ${data.forecastData.feelslike} degrees`
            errorMessage.textContent= ''
        }
    })
})
})