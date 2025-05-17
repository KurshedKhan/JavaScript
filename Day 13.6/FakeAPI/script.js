// https://jsonplaceholder.typicode.com/posts

async function fetchData(){
  
  let datafetch = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonData = await datafetch.json()
  for(let i = 0 ; i < 100 ; i++){
    console.log("--------------------");
    console.log(jsonData[i].title);
    console.log(jsonData[i].body);
    console.log("--------------------");
  }
  
}

fetchData();


