// http://api.weatherapi.com/v1/current.json?key=2afb9458d32d4425bfd12235251705&q=London&aqi=yes

let inputText = document.getElementById("input-text");
let searchButton = document.getElementById("search-button");
let cityName = document.getElementById("city-name");
let cityTime = document.getElementById("city-time");
let cityTemp = document.getElementById("city-temp");

async function fetchData(data){

  let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2afb9458d32d4425bfd12235251705&q=${data}&aqi=yes`);

  return await response.json();
}

searchButton.addEventListener("click",async ()=>{
  let value = inputText.value;
  let result = await fetchData(value);
  cityName.innerText = result.location.country;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
  
})