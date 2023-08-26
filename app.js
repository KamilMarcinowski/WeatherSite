const locationSrc = document.getElementById("city");
const temperatureSrc = document.getElementById("temperature")
const selectCityBtn = document.getElementById("BtnSelectCity");

const apiKey = "a9844ff28b049329fcd0a0c0a50f96c0";

window.onload = function(){
    GetWeatherData();
}

function GetWeatherData()
{
    let location = localStorage.getItem("city");
    locationSrc.innerHTML = location;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            temperatureSrc.innerHTML = data.main.temp.toFixed("0") + "°C";
        })
        .catch(error => {
            console.error("błąd", error);
        });
}

function SetCity()
{
    location = selectCity.value;
    localStorage.setItem("city", location);
}

selectCityBtn.addEventListener("click", SetCity);
