function search(){
    var key = "dc0eaaa1773dce24f43a4bfe1b5af3df"
    var search = document.getElementById("weatherSearchInput").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
    fetch(url).then(res => res.json()).then(data => processWeather(data));
}

function processWeather(data){
    console.log(data)
    var content2 = document.getElementById("content-weather");
    content2.innerHTML = `
            
    
    `;
}


