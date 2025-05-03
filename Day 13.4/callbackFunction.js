// function userName1(){

//   console.log("Kuldeep and Hemant Kumawat.");

// }


// function Greet(callback1,callback2){
//   console.log("Hello Dear , ");
//   callback1();
//   callback2();
// }

// Greet(userName1,function userName(){

//   console.log("Ketan and Yashveer.");

// });


// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }

// let name1 = "Kurshed";

// greet(name1, function() {
//   console.log("Welcome to JavaScript!");
// });


// function dataset(callback1){

//   setTimeout(()=>{
//     console.log("data process");
//     callback1();
//   },3000);

// }

// dataset(callback);

// function callback(){
//   console.log("Processing the fetched data...");
// }


function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback();
  }, 1000);
}

function getPosts(callback) {
  setTimeout(() => {
    console.log("User's posts fetched");
    callback();
  }, 1000);
}

function getComments() {
  setTimeout(() => {
    console.log("Comments on posts fetched");
  }, 1000);
}

getUser(
 ()=>{
  getPosts(getComments);
 }
)