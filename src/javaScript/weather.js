const pos = document.getElementById("city");
const temperature = document.getElementById("temperature");

const api = "a9844ff28b049329fcd0a0c0a50f96c0";
let city;

function Init()
{
    city = localStorage.getItem("city");

    GetWeatherData();
}

function GetWeatherData()
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
    .then(response => response.json())
    .then(data => {
        pos.innerText = data.name;
        temperature.innerHTML = data.main.temp.toFixed("0") + "°C";
        
    })
    .catch(error => {
        console.error("error", error);
    })
}


document.addEventListener("DOMContentLoaded", Init);