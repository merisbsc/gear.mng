let req = new XMLHttpRequest();
function createAcc() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let url = "../php/createAcc.php?username=" + username + "&password=" + password + "&name=" + name;
    req.open("GET", url);
    req.onload = check;
    req.send(null);
}

function check() {
    if (req.status === 200) {
        window.location = req.responseText;
    }

}