function search(){
    var key = "dc0eaaa1773dce24f43a4bfe1b5af3df"
    var search = document.getElementById("weatherSearchInput").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
    fetch(url).then(res => res.json()).then(data => processWeather(data));
}

function processWeather(data){
    console.log(data)

    // Image Process
    var imgData = data.weather[0].main.toLowerCase();
    var img;
    if(imgData === "thunderstorm"){
        img = "thunderstorm.jpg";
    }
    else if(imgData === "drizzle"){
        img = "drizzle.jpg";
    }
    else if(imgData === "rain"){
        img = "rain.jpg";
    }
    else if(imgData === "snow"){
        img = "snow.jpg";
    }
    else if(imgData === "mist"){
        img = "mist.jpg";
    }
    else if(imgData === "smoke"){
        img = "smoke.jpg";
    }
    else if(imgData === "haze"){
        img = "haze.jpg";
    }
    else if(imgData === "dust"){
        img = "dust.jpg";
    }
    else if(imgData === "fog"){
        img = "fog.jpg";
    }
    else if(imgData === "sand"){
        img = "sand.jpg";
    }
    else if(imgData === "ash"){
        img = "ash.jpg";
    }
    else if(imgData === "squall"){
        img = "squall.jpg";
    }
    else if(imgData === "tornado"){
        img = "tornado.jpg";
    }
    else if(imgData === "clear"){
        img = "clear.jpg";
    }
    else if(imgData === "clouds"){
        img = "clouds.jpg";
    }

    // Icons Process
    var icon = data.weather[0].icon;
    var iconUrl =  `https://openweathermap.org/img/wn/${icon}@2x.png`;

    var content2 = document.getElementById("content-weather");
    content2.innerHTML = `
            <div class="box-2">
                <div class="content-head">
                    <p>Search Results for: <span class="highlight-1">${data.name}</span></p>
                </div>
                <div class="small-box-holder">
                    <div class="small-box">
                        <h4 class="light-text">Temperature</h4>
                        <p class="highlight-2">${data.main.temp}°C</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Feels Like</h4>
                        <p class="highlight-2">${data.main.feels_like}°C</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Humidity</h4>
                        <p class="highlight-2">${data.main.humidity}%</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Country</h4>
                        <p class="highlight-2">${data.sys.country}</p>
                    </div>
                </div>
                <div class="small-box-holder">
                    <div class="small-box">
                        <h4 class="light-text">Pressure</h4>
                        <p class="highlight-2">${data.main.pressure}</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Visibility</h4>
                        <p class="highlight-2">${data.visibility}</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Min Temp</h4>
                        <p class="highlight-2">${data.main.temp_min}°C</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Max Temp</h4>
                        <p class="highlight-2">${data.main.temp_max}°C</p>
                    </div>
                </div>
                <div class="small-box-holder">
                    <div class="small-box">
                        <h4 class="light-text">Weather</h4>
                        <p class="highlight-2">${data.weather[0].main}</p>
                    </div>
                    <div class="small-box">
                        <div class="icon-holder">
                            <img class="iconImage" src="${iconUrl}" alt="icon">
                        </div>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Wind Deg</h4>
                        <p class="highlight-2">${data.wind.deg}</p>
                    </div>
                    <div class="small-box">
                        <h4 class="light-text">Wind Speed</h4>
                        <p class="highlight-2">${data.wind.speed}</p>
                    </div>
                </div>
                <div class="small-box-image">
                    <div class="image-holder">
                        <img class="image" src="images/${img}" alt="weather">
                    </div>
                </div>
            </div>
    
    `;
}

