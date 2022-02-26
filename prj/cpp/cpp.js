var js_update = "Updated: <2022.0226 10:35:53>"

/* ----------------------------------------------------------------------
 * Add load handler (see index.js) to hook the keydown event
 */
addLoadHandler(function () {
    document.addEventListener("keydown", keyHandler);
})

/* ----------------------------------------------------------------------
 * If the user presses Enter, attempt to calculate a result
 */
function keyHandler(e) {
    if ("Enter" == e.code) {
        if (pinkReady()) {
            pkg_compute();
        } else if (blueReady()) {
            groz_compute();
        }
    }
}

/* ----------------------------------------------------------------------
 * Manage calling pkg_calculation. This function is called from the
 * HTML.
 */
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

/* ----------------------------------------------------------------------
 * Calculate a result based on the packaging fields.
 */
function pkg_calculation(cps, spp, wpp, unit_pp) {
    if (isNaN(spp)) {
        request_spp();
    } else if (isNaN(wpp)) {
        request_wpp();
    } else {
        var cal_p_pkg = cps * spp;
        var lb_p_pkg = wpp / unit_pp;
        return Math.round(cal_p_pkg / lb_p_pkg);
    }
}

/* ----------------------------------------------------------------------
 * When focus leaves the "calories per ounce/gram" field, compute the 
 * result.
 */
function groz_compute() {
    var cpw = getFloatValue("cpw");
    var cp_unit = getFloatValue("cp_unit");

    if (!isNaN(cpw)) {
        result = wgt_calculation(cpw, cp_unit);
        setElementValue("cpp", result);
    }
}

/* ----------------------------------------------------------------------
 * Return true if all of the pink fields contain a numeric value
 */
function pinkReady() {
    var cps = getFloatValue("cps");
    var spp = getFloatValue("spp");
    var wpp = getFloatValue("wpp");
    var unit_pp = getFloatValue("unit_pp");

    if (isNaN(cps) || isNaN(spp) || isNaN(wpp) || isNaN(unit_pp)) {
        return false;
    } else {
        return true;
    }
}

/* ----------------------------------------------------------------------
 * Return true if the blue field contains a numeric value
 */
function blueReady() {
    var cpw = getFloatValue("cpw");
    var cp_unit = getFloatValue("cp_unit");

    if (isNaN(cpw) || isNaN(cp_unit)) {
        return false;
    } else {
        return true;
    }
}

/* ----------------------------------------------------------------------
 * Calculate a result based on the weight field.
 */
function wgt_calculation(cpw, cp_unit) {
    return Math.round(cpw * cp_unit);
}

/* ----------------------------------------------------------------------
 * After the "per package" ounce/grams selector is manipulated, we
 * want the focus to go the to the nearest field.
 */
function pkg_sel_done() {
    setFocus("wpp");
}

/* ----------------------------------------------------------------------
 * After the "calories per" ounce/grams selector is manipulated, we 
 * want the focus to go the nearest field.
 */
function groz_sel_done() {
    setFocus("cpw");
}

/* ----------------------------------------------------------------------
 * If we try to recalculate when the spp field is NaN, ask the user to
 * respond usefully.
 */
function request_spp() {
    alert("Please fill in servings per package");
}

/* ----------------------------------------------------------------------
 * If we try to recalculate when the wpp field is NaN, ask the user to
 * respond usefully.
 */
function request_wpp() {
    alert("Please fill in ounces/grams per package");
}

/* ----------------------------------------------------------------------
 * Clear all visible fields
 */
function resetFields() {
    setElementValue("cps", "");
    setElementValue("spp", "");
    setElementValue("wpp", "");
    setElementValue("cpw", "");
    setElementValue("cpp", "");
    setFocus("cps");
}

/* ----------------------------------------------------------------------
 * Given an element *id*, set that element to *value*.
 */
function setElementValue(id, val) {
    var el = document.getElementById(id);
    el.value = val;
    el.innerHTML = val;
}

/* ----------------------------------------------------------------------
 * Given an element *id*, set the focus to that element.
 */
function setFocus(id) {
    var el = document.getElementById(id);
    el.focus();
}

/* ----------------------------------------------------------------------
 * Given an element id *element*, retrieve its value and parse it as a
 * float.
 */
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

