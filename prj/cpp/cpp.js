var js_update = "Updated: <2022.0217 09:03:23>"
function setElementValue(id, val) {
    var el = document.getElementById(id);
    el.value = val;
    el.innerHTML = val;
}

function cal_by_weight(cal_p_unit, unit_mult) {
    return(cal_p_unit * unit_mult);
}

function clear_elements(elist) {
}

function decide(cps, cpw) {
    if (isNaN(cps) && isNaN(cpw)) {
        return 0;
    } else if (!isNaN(cps)) {
        return 1;
    } else if (!isNaN(cpw)) {
        return 2;
    } else {
        return 3;
        setElementValue(elist[idx], "");
    }
}

function instruct() {
    msg = "Please fill in the first three fields or"
        + " the cal per ounce/gram field";
    alert(msg);
}

function request_spp() {
    alert("Please fill in servings per package");
}

function request_wpp() {
    alert("Please fill in ounces/grams per package");
}

function hell_frozen() {
    alert("Hell has frozen over");
}

function pkg_calculation(cps, spp, wpp, unit_pp, cpp_id) {
    if (isNaN(spp)) {
        request_spp();
    } else if (isNaN(wpp)) {
        request_wpp();
    } else {
        var cal_p_pkg = cps * spp;
        var lb_p_pkg = wpp / unit_pp;
        setElementValue(cpp_id, cal_p_pkg / lb_p_pkg);
    }
}

function wgt_calculation(cpw, cp_unit, cpp_id) {
    setElementValue(cpp_id, cpw * cp_unit)
}

function click_clear() {
    clear_elements(["cps", "spp", "wpp", "cpw", "cpp"]);
}

function getFloatValue(element) {
    var el = document.getElementById(element);
    var zz;
    if (null !== el.value) {
        zz = el.value;
    } else if (null !== el.innerHTML) {
        zz = el.innerHTML;
    } else {
        zz = "";
    }

    var rv = parseFloat(zz);
    return rv;
}

function click_calculate() {
    var cps = getFloatValue("cps");
    var cpw = getFloatValue("cpw");
    var spp = getFloatValue("spp");
    var wpp = getFloatValue("wpp");
    var cpw = getFloatValue("cpw");
    var unit_pp = getFloatValue("unit_pp");
    var cp_unit = getFloatValue("cp_unit");

    switch (decide(cps, cpw)) {
    case 0:
        instruct();
        break;
    case 1:
        pkg_calculation(cps, spp, wpp, unit_pp, "#cpp");
        break;
    case 2:
        wgt_calculation(cpw, cp_unit, "#cpp");
        break;
    case 3:
        hell_frozen();
        break;
    }
}
