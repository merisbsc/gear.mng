let request = new XMLHttpRequest();
function addGear() {
    let category = document.getElementById("category").value;
    let brand = document.getElementById("brand").value;
    let type = document.getElementById("type").value;
    alert(category + ";" + brand + ";" + type);
    request.open('GET', '../php/add.php?category=' + category + '&brand=' + brand + '&type=' + type);
    request.onreadystatechange = checkData;
    request.send(null);
}

function checkData() {
    alert(request.readyState);
    alert(request.status);
    if (request.readyState === 4 && request.status === 200) {
        alert(request.responseText);
    }
}