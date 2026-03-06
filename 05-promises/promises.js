let prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 1000);
});

prm.then((result) => {
  console.log(result);
});

//Task Completed

let prm2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task Not Completed");
  }, 2000);
});

prm2
  .then((result) => {
    console.log(result);
  })

  .catch(function(error){
    console.log(error);
  });

//Task Not Completed

let prm3 = new Promise((resolve, reject) =>{
  setTimeout(()=>{
     resolve("Data Locked");
  },2000)
})

prm3.then((result)=>{
  console.log(result);
})

//Data Loaded

let prm4 = new Promise((resolve, reject) =>{
  setTimeout(()=>{
     let success = false;

     if(success){
      resolve("Login Successful");
     }
     else{
      reject("Login Failed");
     }
  }, 2000)
})

prm4
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    })

// Login Failed

let prm5 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
     resolve({id : 101, username: "Muskaan", College: "Osmania University"});
  }, 4000);
})

prm5.then((user)=>{
  console.log("User ID:" + user.id);
  console.log("Username:" + user.username);
  console.log("College:" + user.College);
})

//User ID:101
//Username:Muskaan
//College:Osmania University