let input = document.querySelector(".search-input")
let button = document.querySelector(".search-button")
let ota = document.querySelector(".weather-info")
let key = "638946c6e29a809f3fbed541d6250f45"
let time = new Date().getDate()


button.addEventListener("click", ()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    
    ota.innerHTML = `  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" class="weather-icon" />
      <div class="temperature">${(data.main.temp -273.15).toFixed(2)}°</div>
      <div class="city">${data.name}</div>
      <div class="temp-range">Max: ${(data.main.temp_max-273.15).toFixed(2)}° &nbsp;&nbsp; Min: ${(data.main.temp_min -273.15).toFixed(2)}°</div>
      <div class="date-row">
        <span>Today</span>
        <span>${time}</span>
      </div>    `
}
)
})













//



// let input = document.querySelector(".search input");
// let button = document.querySelector(".search button");
// let key = "638946c6e29a809f3fbed541d6250f45";
// let ota = document.querySelector(".weather-info ");
// let time = new Date().getDate();


// button.addEventListener("click", function () {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);


//         ota.innerHTML = `  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" class="weather-icon" />
//       <div class="temperature">${(data.main.temp -273.15).toFixed(2)}°</div>
//       <div class="city">${data.name}</div>
//       <div class="temp-range">Max: ${(data.main.temp_max-273.15).toFixed(2)}° &nbsp;&nbsp; Min: ${(data.main.temp_min -273.15).toFixed(2)}°</div>
//       <div class="date-row">
//         <span>Today</span>
//         <span>${time}</span>
//       </div>    `


// }
// )   
// })















//

 













