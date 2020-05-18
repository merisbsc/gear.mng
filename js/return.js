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
    req.open("GET", "../php/return.php?rental_id=", false);
    req.onreadystatechange = function () {

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
