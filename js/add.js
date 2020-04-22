let request = new XMLHttpRequest();
function addGear() {
    let category = document.getElementById("category").selectedIndex;
    let brand = document.getElementById("brand").value;
    let type = document.getElementById("type").value;
    if (sessionStorage.getItem("loggedIn")) {
        request.open('GET', '../php/add.php?category=' + category + '&brand=' + brand + '&type=' + type);
        request.onload = checkData;
        request.send(null);
    } else {
        alert("sign in to add gear");
    }
}

function checkData() {
    if (request.status === 200) {
        alert(request.responseText);
    }
}