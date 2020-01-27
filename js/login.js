let req = new XMLHttpRequest();
function login() {
    //let display = document.getElementById("username_display").innerHTML;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // alert(display);
    let url = "../php/login.php?username=" + username + "&password=" + password + "&name=" + name;
    req.open("GET", url);
    req.onload = check;
    req.send(null);
}

function check() {
    if (req.status === 200) {
        if (req.responseText !== "null") {
            //alert(req.responseText);
            sessionStorage.setItem("username", req.responseText);
            alert("eingeloggt als " + sessionStorage.getItem("username"));
            sessionStorage.setItem("loggedIn", true);
            window.location = "../index.html";
            document.getElementById("user_name").innerHTML = sessionStorage.getItem("username");
        } else {
            alert("Einloggen nicht möglich");
        }
    }
}

function loginOrOf() {
    if (sessionStorage.getItem("loggedIn")) {
        window.location = "./html/logout.html";
    } else {
        window.location = "./html/login.html";
    }
}

function logout() {
    sessionStorage.setItem("username", null);
    sessionStorage.setItem("loggedIn", false);
}