$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        // alert(username);
        var password=$('#password').val();
        // alert(password);
        var messages=$("#messages");

        if (username == "" && password == "") {

            $("div#message").innerHTML(alert("Please enter the username and password"));
        }
        
        else if (username == "" || password == "") {
            if(username == "") {
                $("div#message").innerHTML(alert("Please enter the username"));
            }
            else if(password == ""){
                $("div#message").innerHTML(alert("Please enter the password"));
            }
        }

        else if (username == "admin") {
            $.ajax({
                url: "http://localhost:3000/employees",
                method: "GET",
                dataType: 'json',
    
                success: function(data){
                    console.table([data]);
                    $.each(data, function(key, value) {
                        // console.log(value.username);
                        if(value.username != "" && value.password != "") {
                            if(value.username == username && value.password == password)
                            {
                                alert("Welcome "+ value.username)
                                window.location.href="http://127.0.0.1:5501/html/admin.html"
                                return true;
                            }
                            
                        }
                        
                    })
                },
    
                error: (x)=> {
                    alert("Wrong credentials");
                    window.location="http://127.0.0.1:5501/html/login.html"
                }
            })
        }

        else {
            $.ajax({
                url: "http://localhost:3000/employees",
                method: "GET",
                dataType: 'json',

                success: function(data){
                    console.table([data]);
                    $.each(data, function(key, value) {
                        if(value.username != "" && value.password != "") {
                            if(value.username == username && value.password == password)
                            {
                                alert("Welcome "+ value.username)
                                window.location.href="http://127.0.0.1:5501/html/user.html";
                                return true;
                            }
                        }
                    })
                },

                error: (x)=> {
                    alert("Wrong credentials");
                    window.location.href="http://127.0.0.1:5501/html/login.html";
                }
            })
        }
    })
});