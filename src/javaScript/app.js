const search = document.getElementById("search");
const city = document.querySelector(".city");

function load()
{
    localStorage.setItem("city", city.value);

    window.location.href = "src/main.html";
}

search.addEventListener("click", load)