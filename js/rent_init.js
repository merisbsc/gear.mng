window.addEventListener('load', () => {

    let categories = ["camera", "lens", "stabilizer", "other"];
    let cat_list = document.getElementById("category_select");
    let brand_list = document.getElementById("brand_select");
    let type_list = document.getElementById("type_select");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../php/getAllGear.php', true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);

            let cat_opt;
            let brand_opt;
            let type_opt;
            let exists = false;

            for (const gear of response) {
                cat_opt = document.createElement("option");
                cat_opt.appendChild(document.createTextNode(categories[gear[0] - 1]));
                cat_opt.value = gear[0];

                brand_opt = document.createElement("option");
                brand_opt.appendChild(document.createTextNode(gear[1]));
                brand_opt.value = gear[1];

                type_opt = document.createElement("option");
                type_opt.appendChild(document.createTextNode(gear[2]));
                type_opt.value = gear[2];


                for (let catListElement of cat_list) {
                    if (catListElement.value === cat_opt.value) {
                        exists = true;
                    }
                }
                if (!exists) {
                    cat_list.appendChild(cat_opt);
                }
                exists = false;

                for (let brandListElement of brand_list) {
                    if (brandListElement.value === brand_opt.value) {
                        exists = true;
                    }
                }
                if (!exists) {
                    brand_list.appendChild(brand_opt);
                }
                exists = false;

                for (let typeListElement of type_list) {
                    if (typeListElement.value === type_opt.value) {
                        exists = true;
                    }
                }
                if (!exists) {
                    type_list.appendChild(type_opt);
                }
                exists = false;
            }



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