function Marry(Men,Women){
    
    Women.Husband = Men;
    Men.Wife = Women;

    return {
        Mother : Women,
        Father : Men
    }

}

let family = Marry({name : "Gaurav"},{name : "xyz"});
console.log(family);