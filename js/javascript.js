let content = [];
let url = "https://api.openweathermap.org/data/2.5/weather?";
let def = "Montpellier";
init();
document.getElementById("inputField").addEventListener("submit", function (event) {
    def = document.getElementById("searchCity").value;
    event.preventDefault();
    init();
});

function init() {
    AjaxGet(url);
}


function AjaxGet(url) {
    let requete = new XMLHttpRequest();
    requete.open("GET", url+"q="+def+"&appid=db5623316d39a13d9b1bce30973bfecb", true);
    requete.addEventListener("load", function () {
        let response = JSON.parse(requete.responseText);
        if(response.cod == "200") {
            def = response.name;
            document.getElementById("titreCarte").innerHTML = def + "";
            let temp = response.main.temp - 273.15;
            temp = Math.round(temp);
            document.getElementsByClassName("temp")[0].innerHTML = "<span class=\"badge badge-light\">" + temp + " °C</span>";
            let icon = response.weather[0].icon;
            document.getElementById("image").innerHTML = "<img src=\"https://openweathermap.org/img/wn/" + icon + "@2x.png\">";

            let tempMax = response.main.temp_max - 273.15;
            tempMax = Math.round(tempMax);
            let pression = response.main.pressure;
            let humidite = response.main.humidity;
            document.getElementById("tempMax").innerHTML = tempMax + " °C";
            document.getElementById("pression").innerHTML = pression + " hPa";
            document.getElementById("humidite").innerHTML = humidite + "%";
            document.getElementsByClassName("section1")[0].style.visibility = "visible";
            document.getElementsByClassName("section2")[0].style.visibility = "hidden";
        }
        else {
            document.getElementsByClassName("section1")[0].style.visibility = "hidden";
            document.getElementsByClassName("section2")[0].style.visibility = "visible";
        }
        
    });

    requete.send(null);
}
