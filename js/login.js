let req = new XMLHttpRequest();
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let url = "../php/login.php?username=" + username + "&password=" + password + "&name=" + name;
    req.open("GET", url);
    req.onload = check;
    req.send(null);
}

function check() {
    if (req.status === 200) {
        alert(req.responseText);
    }
}