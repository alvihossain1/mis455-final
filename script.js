function searchWeather(){
    var key = "dc0eaaa1773dce24f43a4bfe1b5af3df"
    var search = document.getElementById("weatherSearchInput").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
    fetch(url).then(res => res.json()).then(data => processWeather(data));
}

function processWeather(data){
    console.log(data)
    var content2 = document.getElementById("content-weather");
    content2.innerHTML = `
    <div class="mt-1">
        <p>Search Results for: <span class="highlight-1">${data.name}</span></p>
    </div>
    <div class="d-flex flex-wrap mt-3 gap-3">
        <div class="small-box">
            <h5 class="my-0 light-text">Weather</h5>
            <p class="my-0 highlight-2">${data.weather[0].main}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Temperature</h5>
            <p class="my-0 highlight-2">${data.main.temp}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Feels Like</h5>
            <p class="my-0 highlight-2">${data.main.feels_like}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Humidity</h5>
            <p class="my-0 highlight-2">${data.main.humidity}%</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Pressure</h5>
            <p class="my-0 highlight-2">${data.main.pressure}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Visibility</h5>
            <p class="my-0 highlight-2">${data.visibility}</p>
        </div>
        <div class="small-box">
            <h5 class="my-0">Min Temp</h5>
            <p class="my-0 highlight-2">${data.main.temp_min}°C</p>
        </div>
        <div class="small-box">
            <h5 class="my-0 light-text">Max Temp</h5>
            <p class="my-0 highlight-2">${data.main.temp_max}°C</p>
        </div>                
    </div>
    
    `;
}


