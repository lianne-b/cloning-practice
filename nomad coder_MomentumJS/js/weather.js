
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You are ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = `${data.name} / ${data.main.temp}℃`;
    })
}

function onGeoError() {
    alert("Can't find your position.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);


