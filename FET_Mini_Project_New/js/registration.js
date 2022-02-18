$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        var password=$('#password').val();
        var email=$('#email').val();
        var name=$('#name').val();

        if (username == "" && password == "" && email == "" && name == "" ) {
            $("div#message").innerHTML(alert("Please enter the details"));
        }
        
        else if (username == "" || password == "" || email == "" || name == "" ) {
            if(name == ""){
                $("div#message").innerHTML(alert("Please enter Your Name"));
            }
            else if(email == ""){
                $("div#message").innerHTML(alert("Please enter the email"));
            }
            else if(username == "") {
                $("div#message").innerHTML(alert("Please enter the username"));
            }
            else if(password == ""){
                $("div#message").innerHTML(alert("Please enter the password"));
            }
        }

        else {
            $.ajax({
                url: "http://localhost:3000/employees",
                method: "POST",
                data:{
                    "name":name,
                    "email":email,
                    "username":username,
                    "password":password,
                },
                dataType: "json",
                success: (x) => {
                    alert("Registration Successful "+username)
                    window.location.href="http://127.0.0.1:5501/html/login.html"
                    return true;
                }
            })
        }
    })
});