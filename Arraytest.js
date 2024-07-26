
let arr = [];
let condition;
let value;

alert(" Create a array and read this value , make a  program ");
while(true){
    alert("Check your condition : ");
    alert("1.Run \n2.Stop \n3.Read.");
    condition = parseInt(prompt("Enter your condition : "));
    switch(condition){
        case 1:
            value =  prompt("Enter your value for our array : ");
            arr.push(value);
            break;

        case 2:
            exit(0);
            break;
        
        case 3:
            for(let i = 0 ; i < arr.length ; i++){
                console.log(arr[i]);
            }

   }
}