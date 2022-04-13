var js_update = "Updated: <2022.0410 19:32:20>"

addLoadHandler(start);

function element(name) {
    var rv = document.getElementById(name);
    return rv;
}

function start() {
    var below = document.getElementById("below");
    below.style.height = "" + (wHeight() - 120) + "px";
}

function holdColor() {
    var elm = element("which_color");
    console.log("element value: ", elm.value);

    var above = element("above");
    above.style.height = "" + wHeight() + "px";

    var below = element("below");
    below.style.height = "0px";

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

function wHeight() {
    var rv;
    if (typeof window.innerHeight != 'undefined') {
        rv = window.innerHeight;
    } else if (typeof document.documentElement != 'undefined'
               && typeof document.documentElement.clientHeight != 'undefined'
               && document.documentElement.clientHeight != 0) {
        rv = document.documentElement.clientHeight;
    } else {
        rv = document.getElementsByTagName('body')[0].clientHeight;
    }
    return rv;
}
