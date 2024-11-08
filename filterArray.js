const words = ['spray', 'spray','elite', 'spray', 'exuberant', 'destruction', 'present'];

let filterArray = words.filter((item)=>{

    if(item.length > 5){
        return item;
    }

});

console.log(filterArray);
