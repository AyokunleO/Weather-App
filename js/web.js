
const wind = document.querySelector(".wind");
const temp = document.querySelector("#tempt");
const weatherImg = document.querySelector("#weather-img");
const desc = document.querySelector(".desc");

// My API from Open Weather
const api = "ffaeef5ace0e1b34313f602403d982e1";

document.addEventListener("DOMContentLoaded", Location);

function Location() {
    // var long;
    // var lat;

    // if(navigator.geolocation){
        // navigator.geolocation.getCurrentPosition((location)=> {
        // long = location.coords.longitude;
        // lat = location.coords.latitude;
        const entry= "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ffaeef5ace0e1b34313f602403d982e1";
        
        fetch(entry).then((response) => {
            return response.json()
            .then((data)=>{
                console.log(data);

                const Kelvin = 273;

                const {icon} = data.weather[0];
                const desc1 = data.weather[0].description;
                console.log(desc);
                const{speed} = data.wind;
                const temp = data.main.temp-Kelvin;
                
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

                weatherImg.src = iconUrl;
                desc.textContent = `${desc1}`;
                tempt.textContent = `${temp.toFixed(2)} °C`;
                wind.textContent = `${speed}km/h`;
            });
          });


        

    // }
    
}




