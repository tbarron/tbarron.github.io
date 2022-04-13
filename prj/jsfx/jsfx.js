var js_update = "Updated: <2022.0410 19:32:20>"
function element(name) {
    var rv = document.getElementById(name);
    return rv;
}


function holdColor() {
    var elm = document.getElementById("which_color");
    console.log("element value: ", elm.value);

    var body = document.getElementsByTagName("body")[0];
    console.log(body);
    body.style.background = elm.value;
    body.setAttribute("onclick", "resetColor()");
}

function resetColor() {
    console.log("resetColor: ...")
    var body = document.getElementsByTagName("body")[0];
    body.style.background = "lightyellow";
}
