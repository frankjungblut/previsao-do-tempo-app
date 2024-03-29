const key = "8635dd4261ddadaa1e2f8abcdf1cbe37"
let unit = `metric`
let letter = " °C"

function displayData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + letter
    document.querySelector(".prediction-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%"
    document.querySelector(".prediction-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`).then(response => response.json())
    displayData(data)
}

function buttonActive() {
    const city = document.querySelector(".city-input").value
    searchCity(city)
}

function toggleUnit(params) {
    if (params === 'celsius') {
        console.log("celsius")
        unit = `metric`
        letter = " °C"
        buttonActive()
    }
    if (params === 'fahrenheit') {
        console.log('fahrenheit')
        unit = ``
        letter = " °F"
        buttonActive()
    }
}