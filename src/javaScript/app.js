const search = document.querySelector("#search");
const city = document.querySelector(".city");

function searchCity()
{
    localStorage.setItem("city", city.value);
    window.location.href = "src/main.html";
}

search.addEventListener("click", searchCity);