function init() {
    httpGetAsync("/api/get/version", loadVersion);

    window.setInterval(verifyStatus, 2500);
    initWeather();
}

/*
 * Toolbar
 */

//Loads the version of the app
function loadVersion(responseText){
    document.getElementById("version-textbox").innerHTML = "Version: " + responseText;
}

//Checks every 2.5 seconds if the server is online
function verifyStatus(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        //The server is offline
        if(xmlHttp.readyState != 4)
            return;

        statusSpan = document.getElementById("consoleSpan");
        if (xmlHttp.status == 200){
            statusSpan.innerHTML = "Online!";
            statusSpan.style = "color:lightgreen;";    
        }else if(xmlHttp.status == 0){
            statusSpan.innerHTML = "Offline!";
            statusSpan.style = "color:orange ;"; 
        }else{
            console.log("Server Error: " + xmlHttp.status);
            statusSpan.innerHTML = xmlHttp.status;
            statusSpan.style = "color:orange;"; 
        }
            
    }
    xmlHttp.open("GET", "/actuator/health", true); // true for asynchronous
    xmlHttp.send(null);
}

//Runs a HTTP Get request and then calls
//the handler after the request is over
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

//Runs a HTTP Get request and then calls
//the handler after the request is over
function httpPostAsync(theUrl) {
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}