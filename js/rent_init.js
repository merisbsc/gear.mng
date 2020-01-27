let req = new XMLHttpRequest();

function rent_init() {
    req.open("GET", "../db/gear.csv", false);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status === 0) {
                let allText = req.responseText;
                let lines = allText.split("&");
                //TODO: options ned hardcoden
            }
        }
    };
    req.send(null);
}