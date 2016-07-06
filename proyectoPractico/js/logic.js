var GeoLoc = document.getElementById("BTNlocation");

function Storage(latitude, longitude) {
    if (typeof(Storage) !== "undefined") {
    localStorage.setItem("latitude", "position.coords.latitude");

    //Retrive
    document.getElementById("result").innerHTML = localStorage.getItem("latitude", "longitude");
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        GeoLoc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    GeoLoc.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    Storage(position.coords.latitude, position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            GeoLoc.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            GeoLoc.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            GeoLoc.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            GeoLoc.innerHTML = "An unknown error occurred."
            break;
    }
}
