granvilleID = "5156270";
appID = "70cdfa5ef07957f3c7049d8b6668e427";
apiURL = "http://api.openweathermap.org/data/2.5/";

function initWeather(){
    updateWeather();
    window.setInterval(updateWeather, 2500);
}

function updateWeather(){
    console.log("Updating Weather...");
    httpGetAsync(formatRequest(), onWeatherDataReceived);
}

function formatRequest(){
    return apiURL + "weather?id=" + granvilleID + "&appid=" + appID + "&units=imperial";
}

function onWeatherDataReceived(response){
    var json = JSON.parse(response);

    var temp = json.main.temp;
    var weather = json.weather[0].description;
    var weatherElement = document.getElementById("weather-description");
    weatherElement.innerHTML = weather;

    var icon = json.weather[0].icon;
    var iconElement = document.getElementById("weather-icon");
    iconElement.src = "http://openweathermap.org/img/w/" + icon + ".png";
}

