var js_update = "Updated: <2022.0223 20:10:04>"

function setElementValue(id, val) {
    var el = document.getElementById(id);
    el.value = val;
    el.innerHTML = val;
}

function setFocus(id) {
    var el = document.getElementById(id);
    el.focus();
}

function cal_by_weight(cal_p_unit, unit_mult) {
    return(cal_p_unit * unit_mult);
}

function clear_elements(elist) {
    for (var idx = 0 ; idx < elist.length ; idx++) {
        setElementValue(elist[idx], "");
    }
}

function instruct() {
    msg = "Please fill in the first three fields or"
        + " the cal per ounce/gram field with numbers";
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

function pkg_calculation(cps, spp, wpp, unit_pp) {
    if (isNaN(spp)) {
        request_spp();
    } else if (isNaN(wpp)) {
        request_wpp();
    } else {
        var cal_p_pkg = cps * spp;
        var lb_p_pkg = wpp / unit_pp;
        // setElementValue(cpp_id, cal_p_pkg / lb_p_pkg);
        return cal_p_pkg / lb_p_pkg;
    }
}

function wgt_calculation(cpw, cp_unit) {
    return cpw * cp_unit;
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

    if (isNaN(cps) && isNaN(cpw)) {
        instruct();
    } else if (!isNaN(cps)) {
        pkg_calculation(cps, spp, wpp, unit_pp, "cpp");
    } else if (!isNaN(cpw)) {
        wgt_calculation(cpw, cp_unit, "cpp");
    } else {
        hell_frozen();
    }
}

function pkg_sel_done() {
    var el = document.getElementById("wpp");
    el.focus();
}

function groz_sel_done() {
    var el = document.getElementById("cpw");
    el.focus();
}

function groz_compute() {
    var cpw = getFloatValue("cpw");
    var cp_unit = getFloatValue("cp_unit");

    if (!isNaN(cpw)) {
        result = wgt_calculation(cpw, cp_unit);
        setElementValue("cpp", result);
    }

    setFocus("cps");
}

function pkg_compute() {
    var cps = getFloatValue("cps");
    var spp = getFloatValue("spp");
    var wpp = getFloatValue("wpp");
    var unit_pp = getFloatValue("unit_pp");
    
    if (isNaN(cps) || isNaN(spp) || isNaN(wpp)) {
        return;
    }

    var result = pkg_calculation(cps, spp, wpp, unit_pp);

    setElementValue("cpp", result);
}

function resetFields() {
    setElementValue("cps", "");
    setElementValue("spp", "");
    setElementValue("wpp", "");
    setElementValue("cpw", "");
    setElementValue("cpp", "");
    setFocus("cps");
}
