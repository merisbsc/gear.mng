let req = new XMLHttpRequest();
let request = new XMLHttpRequest();
function return_items() {
    let user = sessionStorage.getItem("username");
    let brand = this.innerText.split(" ")[0];
    let type = this.innerText.split(" ")[1];
    //
    // request.open("GET", "../php/return.php?user=" + user + "&brand=" + brand + "&type=" + type)
    // request.onload = function () {
    //     alert(request.responseText);
    // };
    // request.send(null);

    this.innerHTML = "";
    // alert(user);
    // alert(brand);
    // alert(type);
}

function return_init() {
    let rentedItems = [];
    req.open("GET", "../db/rental.csv", false);
    req.onreadystatechange = function () {
        let all = req.responseText;
        let rentals = all.split("&");
        for (let i = 0; i < rentals.length; i++) {
            let rental_data = rentals[i].split(";");
            if (rental_data[0] === sessionStorage.getItem("username")) {
                rentedItems.push(rental_data[2] + " " + rental_data[3]);
            }
        }
    };
    req.send(null);

    let list = document.getElementById("return_list");
    for (let i = 0; i < rentedItems.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(rentedItems[i]));
        list.appendChild(li);
        li.addEventListener("click", return_items);
    }
    return rentedItems;
}
