var image_save_msg = 'You Can Not Save images!';
var no_menu_msg = 'Context Menu disabled!';
var smessage = "Копіювання метеріалів заборонено авторським правом";

function disableEnterKey(e) {
    if (e.ctrlKey) {
        var key;
        if (window.event) key = window.event.keyCode; else
            key = e.which;
        if (key == 97 || key == 65 || key == 67 || key == 99 || key == 88 || key == 120 || key == 26 || key == 85 || key == 83 || key == 43) {
            show_wpcp_message('Копіювання метеріалів заборонено');
            return false;
        } else
            return true;
    }
}

function disable_copy(e) {
    var elemtype = e.target.nodeName;
    elemtype = elemtype.toUpperCase();
    var checker_IMG = '';
    if (elemtype == "IMG" && checker_IMG == 'checked' && e.detail >= 2) {
        show_wpcp_message(alertMsg_IMG);
        return false;
    }
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT") {
        if (smessage !== "" && e.detail >= 2) show_wpcp_message(smessage);
        return false;
    }
}

function disable_copy_ie() {
    var elemtype = window.event.srcElement.nodeName;
    elemtype = elemtype.toUpperCase();
    if (elemtype == "IMG") {
        show_wpcp_message(alertMsg_IMG);
        return false;
    }
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT") {
        return false;
    }
}

function reEnable() {
    return true;
}

document.onkeydown = disableEnterKey;
document.onselectstart = disable_copy_ie;
if (navigator.userAgent.indexOf('MSIE') == -1) {
    document.onmousedown = disable_copy;
    document.onclick = reEnable;
}

function disableSelection(target) {
    if (typeof target.onselectstart != "undefined") target.onselectstart = disable_copy_ie; else if (typeof target.style.MozUserSelect != "undefined") {
        target.style.MozUserSelect = "none";
    } else
        target.onmousedown = function () {
            return false
        }
    target.style.cursor = "default";
}

window.onload = function () {
    disableSelection(document.body);
};
document.ondragstart = function () {
    return false;
}

function nocontext(e) {
    return false;
}

document.oncontextmenu = nocontext;
var e = document.getElementsByTagName('body')[0];
e.setAttribute('unselectable', "on");
var div_err = document.createElement('div')
div_err.className = 'msgmsg-box-wpcp warning-wpcp hideme'
div_err.id = 'wpcp-error-message'
var div_err_span = document.createElement('span')
e.appendChild(div_err);
div_err.appendChild(div_err_span);
div_err_span.innerHTML = 'Усі права захищено:'
var timeout_result;

function show_wpcp_message(smessage) {
    if (smessage != "") {
        var smessage_text = '<span>Усі права захищено: </span>' + smessage;
        document.getElementById("wpcp-error-message").innerHTML = smessage_text;
        document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, 3000);
    }
}

function hide_message() {
    document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme";
}
