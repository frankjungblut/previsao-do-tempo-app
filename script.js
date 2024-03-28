const key = "8635dd4261ddadaa1e2f8abcdf1cbe37"


function displayData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + " °C"
    document.querySelector(".prediction-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%"
    document.querySelector(".prediction-img").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    displayData(data)
}

function buttonActive() {
    const city = document.querySelector(".city-input").value
    searchCity(city)

}