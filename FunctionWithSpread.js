function sum(x,y,z){
    return x + y + z;
}

const number = [20,30,50];


let total = sum(...number);

console.log(total);