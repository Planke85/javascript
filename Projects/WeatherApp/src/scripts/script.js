let navigationService = {
    cityInput: document.getElementById("cityInput"),
    content: document.getElementById("content"),
    btn: document.getElementById("btn"),
    timer: document.getElementById("timer"),
    currentTime: (callback) => {
        callback()
    },
    getNewTime: () => {
        setInterval(() => this.timer.innerHTML = `Current time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,1000 )
    },
    registerListeners: () => {
        btn.addEventListener("click", () => {
            apiService.getWeather();
        })
    },
    formatTime: (time) => {
        newTime = new Date(time * 1000);
        let hours = newTime.getHours();
        let min = "0" + newTime.getMinutes();
        let sec = "0" + newTime.getSeconds();
        let formated = `${hours}:${min.substr(-2)}:${sec.substr(-2)}`;
        return formated
    }
}

let apiService = {
    apiKey: "6e6c8db0474b782f9e3f25b7ca738205",
    getWeather: async () => {
        try {
            let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${navigationService.cityInput.value.toLowerCase()}&units=metric&appid=${apiService.apiKey}`);
            let cityWeather = await result.json();
            uiService.renderWeathers(cityWeather)
            navigationService.cityInput.value = "";
        } catch (error){
            console.warn(error);
        }
    }
}

let uiService = {
    renderWeathers: (cityWeather) => {
        return  navigationService.content.innerHTML = `
            <div class="card">
                <small id="timer" class="text-end">${navigationService.currentTime(navigationService.getNewTime)}</small>
                <img src="src/img/weather.png" width="300" height="400" class="card-img-top" alt="weatherApp">
                <div class="card-body">
                    <h2 class="card-title text-center">${cityWeather.name} &nbsp;${cityWeather.main.temp.toFixed()} 'C</h2>
                    <div class="temp">
                        <p class="col-6 text-center">Wind: ${cityWeather.wind.speed}m</p>
                        <p class="col-6 text-center">MaxTemp: ${cityWeather.main.temp_max.toFixed()} 'C</p>
                    </div>
                    <div class="temp">
                        <p class="col-6 text-center">Sunrise: ${navigationService.formatTime(cityWeather.sys.sunrise)}</p>
                        <p class="col-6 text-center">Sunset: ${navigationService.formatTime(cityWeather.sys.sunset)}</p>
                    </div>
                    <div class="temp">
                        <p class="col-6 text-center">Description: ${cityWeather.weather[0].description}</p>
                        <p class="col-6 text-center">Pressure: ${cityWeather.main.pressure}hPa</p>
                    </div>
                </div>
                <small class="text-center">MyWeatherApp&copy; / by <a href="https://github.com/Planke85" target="blank">Aleksandar</a></small>
            </div>
        `;
    }
}

navigationService.registerListeners()

