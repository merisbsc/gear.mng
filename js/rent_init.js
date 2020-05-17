window.addEventListener('load', () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './php/getAllGear.php', true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);

            console.table(response);
        }
    }
});

let request = new XMLHttpRequest();
function rent_gear() {
    let category = document.getElementById("category_select").value;
    let brand = document.getElementById("brand_select").value;
    let type = document.getElementById("type_select").value;
    let date_from = document.getElementById("date_from").value;
    let date_to = document.getElementById("date_to").value;
    let username = sessionStorage.getItem("username");
    if (sessionStorage.getItem("loggedIn")) {

        //alert(category + ";" + brand + ";" + type + ";" + date_from + ";" + date_to);
        request.open('GET', '../php/rent.php?user=' + username + '&category=' + category + '&brand=' + brand + '&type=' + type + "&dateFrom=" + date_from + "&dateTo=" + date_to);
        request.onload = checkData;
        request.send(null);

    } else {
        alert("log in to rent gear");
    }


}
function checkData() {
    if (request.status === 200) {
        alert(request.responseText);
    }
}
//
// function showMessage() {
//     console.log("message");
//     let message = document.getElementById("message_box");
//     message.style.display = "inline";
// }

function unseeMessage() {
    let message = document.getElementById("message_box");
    message.style.display = "none";
}

function initialize() {
    if (request.status === 200) {
        alert(request.responseText);
    }
}