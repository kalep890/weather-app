const apiKey ='0d468a8d3adf8ee6cf40f5610b39dc82';
// let city="Mumbai";
 async function fetchweatherData(city) {
    const response= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    console.log(response);
    
    let data = await response.json();
    console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.wind.speed);
    // console.log(data.main.humidity);
    // console.log(data.visibility);
     updateweatherUI(data);
}
// fetchweatherData();

let cityElement = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let windspeed = document.querySelector (".wind-speed");
let humidity = document.querySelector (".humidity");
let visibility = document.querySelector(".visibility-distance");

let description = document.querySelector(".description-text");
let date = document.querySelector (".date");


// console.log(cityElement);

function updateweatherUI(value){
    console.log(value);
cityElement.textContent = value.name;
temperature.textContent = `${Math.round(value.main.temp)}°C`;
windspeed.textContent = `${value.wind.speed} KM/H`;
humidity.textContent = `${value.main.humidity}%`;
visibility.textContent =`${value.visibility/1000}KM`;
description.textContent = value.weather[0].description;

const currentDate = new Date();
date.textContent = currentDate.toDateString();

}

const formelement = document.querySelector(".search-form");
const inputelement = document.querySelector(".city-input");
formelement.addEventListener("submit" ,(event) =>{
    event.preventDefault();
    let city = inputelement.value;
    if (city!==''){
        fetchweatherData(city);
        inputelement.value ="";
    }}
);