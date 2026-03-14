let emails = [
"user1@gmail.com",
"user2@gmail.com",
"user3@gmail.com",
"user4@gmail.com",
"user5@gmail.com"
];

let btn = document.getElementById("sendBtn");
let loader = document.getElementById("loader");
let result = document.getElementById("result");

function sendEmail(email){

return new Promise((resolve,reject)=>{

setTimeout(()=>{

let success = Math.random() > 0.3;

if(success){
resolve("Email sent to " + email);
}
else{
reject("Failed to send email to " + email);
}

},2000);

});

}

btn.addEventListener("click", ()=>{

loader.classList.remove("hidden");
result.innerHTML = "";

let emailPromises = emails.map(email => sendEmail(email));

Promise.allSettled(emailPromises)

.then((responses)=>{

responses.forEach(res=>{

let li = document.createElement("li");

if(res.status === "fulfilled"){
li.textContent = res.value;
li.classList.add("success");
}
else{
li.textContent = res.reason;
li.classList.add("fail");
}

result.appendChild(li);

});

})

.finally(()=>{
loader.classList.add("hidden");
});

});