document.querySelector("#login-signup").style.display = "none";
let data2 = JSON.parse(localStorage.getItem("login-status")) || [];

document.querySelector("#logout").addEventListener("click",function(){
    
    localStorage.removeItem("login-status");
    swal("Log Out Success", "", "success").then(function () {
        window.location.reload();

    });
    
})

document.querySelector("#login1").addEventListener("click", function () {

    if (data2["status"] == true) {
        

    }
    else {
        document.querySelector("#login-signup").style.display = "block";
        document.querySelector("#login-signup").style.display = "grid";

    }


})

if (data2["status"] == true) {
    document.querySelector("#login1").innerText = `Welcome,${data2["name"]}`;
    document.querySelector("#logout").style.display="block";
}
else {
    document.querySelector("#login1").innerText = "Login";

}

let user_details = JSON.parse(localStorage.getItem("user-details")) || [];

let box = document.getElementById("megamenu-box").style.display = "none";
document.querySelector("#mega-menu").addEventListener("click", function () {
    let box = document.getElementById("megamenu-box");


    if (box.style.display == "none") {
        box.style.display = "block";

    }
    else {
        box.style.display = "none"

    }
})

document.querySelector("#btn-checklogin").addEventListener("click", function () {
    let email = document.getElementById("check_email").value;

    let count = 0;
    if (user_details.length == 0) {
        count = 0;
    }
    else {
        user_details.forEach(el => {
            if (el.email == email) {
                count++;
            }
            else {
                count = 0;
            }

        });

    }


    if (count == 0) {
        document.querySelector("#auth-container").style.display = "none";
        document.querySelector("#login").style.display = "none";
        document.querySelector("#signup").style.display = "block";

        document.getElementById("signup_email").setAttribute("value", email);
        document.getElementById("signup_email").disabled = true;

    }
    else if (count >= 1) {
        document.querySelector("#auth-container").style.display = "none";
        document.querySelector("#login").style.display = "block";
        document.querySelector("#signup").style.display = "none";

        document.getElementById("login_email").setAttribute("value", email);
        document.getElementById("login_email").disabled = true;

    }
})

document.querySelector("#btn-signup").addEventListener("click", function () {
    function data1(e, p, n) {
        this.email = e;
        this.name = n;
        this.pass = p;

    }

    let name = document.getElementById("signup_name").value
    let email = document.getElementById("signup_email").value
    let pass = document.getElementById("signup_pass").value
    let cpass = document.getElementById("signup_cpass").value

    if (pass!= cpass) {
        swal("Password and Confirm Password Not Matched", "", "error").then(function () {
            localStorage.setItem("login-status", JSON.stringify({ 'name': el.name, 'status': true }));
            window.location.reload();

        });

    }
    else {
        let details = new data1(email, pass, name);

        user_details.push(details);
        localStorage.setItem("user-details", JSON.stringify(user_details));

        swal("Signup Success", "", "success").then(function () {
            localStorage.setItem("login-status", JSON.stringify({ 'name': name, 'status': true }));
            window.location.reload();

        });

    }


})

document.querySelector("#btn-login").addEventListener("click", function () {
    let email = document.getElementById("login_email").value;
    let pass = document.getElementById("login_pass").value;


    user_details.forEach(el => {
        if (el.email == email && el.pass == pass) {

            localStorage.removeItem("login-status");
            swal("Login Success", "", "success").then(function () {
                localStorage.setItem("login-status", JSON.stringify({ 'name': el.name, 'status': true }));
                window.location.reload();

            });
        }
        else {
            localStorage.removeItem("login-status");
            swal("Invalid Details", "", "error").then(function () {


            });
        }

    });
})
// sell button
document.querySelector("#sell").addEventListener("click",function(){
    if(data2["status"]==true){
        window.location.href="sell.html";
    }
    else{
        swal("You are not logged in ", "", "error").then(function () {
            window.location.reload();


        });

    }
})
document.querySelector("#home").style.cursor="pointer";
document.querySelector("#home").addEventListener("click",function(){
    
 
window.location.href="index.html";


      
    
})