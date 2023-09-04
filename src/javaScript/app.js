const locationSrc = document.getElementById("city");
const temperatureSrc = document.getElementById("temperature")

const apiKey = "a9844ff28b049329fcd0a0c0a50f96c0";

window.onload = function(){
    GetWeatherData();
}

function GetWeatherData()
{
    let location = "Olkusz";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,)
        .then(response => response.json())
        .then(data => {
            temperatureSrc.innerHTML = data.main.temp.toFixed("0") + "°C";
        })
        .catch(error => {
            console.error("błąd", error);
        });
}
