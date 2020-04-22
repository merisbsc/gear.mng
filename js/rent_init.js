let req = new XMLHttpRequest();

function rent_init() {
    //TODO: brand und type abhängig von auswahl bei category machen
    /*req.open("GET", "../db/gear.csv", false);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status === 0) {
                let allText = req.responseText;
                let lines = allText.split("&");
                let categories = [];
                let brands = [];
                let types = [];
                for (let i = 0; i < lines.length - 1; i++) {
                    let gears = lines[i].split(";");
                    categories.push(gears[0]);
                    brands.push(gears[1]);
                    types.push(gears[2]);
                }
                categories =Array.from(new Set(categories));
                brands = Array.from(new Set(brands));
                console.log(brands);
                types = Array.from(new Set(types));
                console.log(types);

                let category_select = document.getElementById("category_select");
                let brand_select = document.getElementById("brand_select");
                let type_select = document.getElementById("type_select");

                for (let i = 0; i < categories.length; i++) {
                    let opt = categories[i];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    category_select.appendChild(el);
                }

                for (let i = 0; i < brands.length; i++) {
                    let opt = brands[i];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    brand_select.appendChild(el);
                }

                for (let i = 0; i < types.length; i++) {
                    let opt = types[i];
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    type_select.appendChild(el);
                }

            }
        }
    };
    req.send(null);*/



}

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