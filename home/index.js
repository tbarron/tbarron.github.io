window.onload = show_update;
var js_update = "Updated: <2022.0214 12:35:37>";

function clean(s) {
    let tmp = s.replace("Updated: ", "");
    tmp = tmp.replace("<", "");
    tmp = tmp.replace(">", "");
    tmp = tmp.replace("\"", "");
    tmp = tmp.replace("\"", "");
    return tmp;
}

function show_update() {
    // HTML update
    let html = document.getElementById("updated");
    let html_upd = (html.innerHTML !== null) ? html.innerHTML : html.value;
    html_upd = clean(html_upd);

    // CSS update
    let css = document.getElementsByClassName("cssmeta");
    let style = window.getComputedStyle(css[0], null);
    let css_upd = clean(style.getPropertyValue("--updated"));

    // JS update
    let js_upd = clean(js_update);

    let result = "HTML: " + html_upd +
        "<br>CSS: " + css_upd +
        "<br>JS: " + js_upd;
    
    let target = document.getElementById("last_update");
    if (target !== null) {
        console.log(target);
        target.value = result;
        target.innerHTML = result;
    }
}
