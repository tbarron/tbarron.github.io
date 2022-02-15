window.onload = show_update;
var js_update = "Updated: <2022.0215 17:26:02>";

function clean(s) {
    let tmp = s.replace("Updated: ", "");
    tmp = tmp.replace("<", "");
    tmp = tmp.replace(">", "");
    tmp = tmp.replace("\"", "");
    tmp = tmp.replace("\"", "");
    return tmp;
}

function show_update() {
    let css_upd;

    // HTML update
    let html = document.getElementById("updated");
    let html_upd = (html.innerHTML !== null) ? html.innerHTML : html.value;
    html_upd = clean(html_upd);

    // CSS update
    let css = document.getElementsByClassName("cssmeta");
    if (0 < css.length) {
        console.log("cssmeta items found: ", css.length);
        let style = window.getComputedStyle(css[0], null);
        css_upd = clean(style.getPropertyValue("--updated"));
    } else {
        css_upd = "";
    }

    // JS update
    let js_upd = clean(js_update);

    let result = "";

    if ("" != html_upd) {
        result += "HTML: " + html_upd;
    }

    if ("" != css_upd) {
        result += "<br>CSS: " + css_upd;
    }

    if ("" != js_upd) {
        result += "<br>JS: " + js_upd;
    }

    let target = document.getElementById("last_update");
    if (target !== null) {
        console.log(target);
        target.value = result;
        target.innerHTML = result;
    }
}
