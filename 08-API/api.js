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
*/

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


