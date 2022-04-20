let weather = {
    "apiKey": "45daff037ac929812e68a61c57af095f",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&lang=pt&units=metric&appid="+ this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const { name } = data;
        const{ country } = data.sys;
        const{ icon, description } = data.weather[0];
        const{ temp, humidity, temp_min, temp_max } = data.main;
        const{ speed } = data.wind;
        //console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".wheather").classList.remove("loading");
        document.querySelector(".city").innerText =  name + ", " + country;
        document.querySelector(".temp").innerText =  temp + "°C";
        document.querySelector(".max").innerText = temp_max + "°C";
        document.querySelector(".min").innerText = temp_min + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText =  description;
        document.querySelector(".humidity").innerText =  "Humidade: " + humidity + "%";
        document.querySelector(".windspeed").innerText = "Vento: " + speed + " Km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?wallpaper,"+ name +"')";
        
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

    
};

document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
});

weather.fetchWeather("Viana do castelo");