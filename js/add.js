let request = new XMLHttpRequest();
function addGear() {
    let category = document.getElementById("category").value;
    let brand = document.getElementById("brand").value;
    let type = document.getElementById("type").value;
    alert(category + ";" + brand + ";" + type);
    request.open('GET', '../php/add.php?category=' + category + '&brand=' + brand + '&type=' + type);
    request.onload = checkData;
    request.send(null);
}

function checkData() {
    if (request.status === 200) {
        alert(request.responseText);
    }
}