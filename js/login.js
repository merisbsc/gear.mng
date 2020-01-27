let req = new XMLHttpRequest();
function login() {
    let display = document.getElementById("username_display").innerHTML;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    alert(display);
    let url = "../php/login.php?username=" + username + "&password=" + password + "&name=" + name;
    req.open("GET", url);
    req.onload = check;
    req.send(null);
}

function check() {
    if (req.status === 200) {
        //alert(req.responseText);
        sessionStorage.setItem("username", req.responseText);
        alert("eingeloggt als " + sessionStorage.getItem("username"));
        window.location = "../index.html";
        document.getElementById("username_display").innerHTML = sessionStorage.getItem("username");
    }
}