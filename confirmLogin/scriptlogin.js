function ConfirmLogin(){

    let password = document.myform.password.value;
    let CPassword = document.myform.CPassword.value;


    if(password === CPassword){
        let mypassword = document.getElementById("ShowPassword");
        mypassword.textContent = "Confirm Password";
        return;
    }
    else{
        alert("Password does not match..Please Enter your confirm password");
        return false;
    }


}