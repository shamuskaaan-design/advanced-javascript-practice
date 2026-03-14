/* fetch("https://randomuser.me/api/")
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data.results[0].name.last);
})

async function getData(){
  let response = await fetch("https://randomuser.me/api/");
  let realData = await response.json();
  console.log(realData.results[0].name.last);
}

getData(); 

// Output
// any random name 


async function getUser() {
  let response = await fetch("https://randomuser.me/api/");
  let data = await response.json();
  let user = data.results[0];

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let country = document.getElementById("country");

  name.innerText = user.name.first + " " + user.name.last;
  email.innerText = user.email;
  country.innerText = user.location.country;
}

getUser();

*/

//WeatherAPI

/*let apikey = "d2e402797441d54b6578de6f0cbc6318";

async function getWeather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    
    let response = await fetch(url);

    let data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    let tempCelsius = data.main.temp - 273.15;  //0°C = 273.15 k

    if(tempCelsius > 40){
      throw new Error("Extremely hot");
    }

    if(tempCelsius < 0){
      throw new Error("Extremely cold");
    }

    console.log("City :", data.name);
    console.log("Cod :", data.cod);
    console.log("Temperature:", tempCelsius.toFixed(2) + "°C");
    console.log("Weather:", data.weather[0].description);


  } catch(error){
    console.log("Error:", error.message);
  }
}

  getWeather("Hyderabad");
*/

  let apikey = "d2e402797441d54b6578de6f0cbc6318";

async function getWeather(){

  try{

  let city = document.getElementById("cityInput").value;


  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

  let data = await response.json();

  if(data.cod !== 200){
    console.log(data.message);
  }

  let tempCelsius = data.main.temp - 273.15;

  if(tempCelsius > 40){
    console.log("Extremely Hot");
  }

  if(tempCelsius < 0){
    console.log("Extremely Cold");
  }

  document.getElementById("city").innerText = "city:" + data.name;

  document.getElementById("temp").innerText = "Temparature:" + tempCelsius.toFixed(2) + "°C";

   document.getElementById("weather").innerText = "Weather:" + data.weather[0].description;

  document.getElementById("error").innerText = "";

}

catch(error){

  document.getElementById("error").innerText = "Error:" + error.message;
}
}

