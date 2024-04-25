document.addEventListener("DOMContentLoaded", function(){
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirm-password").value;
    
    let error = document.querySelector("#error");
    if(password != confirmpassword){
        error.innerHTML="*passwords do not match"
    }

    console.log("hi")
})

