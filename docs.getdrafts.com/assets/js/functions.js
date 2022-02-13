const iosCookie = "platform=ios; path=/"
const macCookie = "platform=mac; path=/"

function setIOS() {
    document.cookie = iosCookie;
    hideClass("doc-mac");
    showClass("doc-ios");
    updateButtons();
}
function isIOS() {
    return (document.cookie.includes("ios"));
}

function setMac() {
    document.cookie = macCookie;
    hideClass("doc-ios");
    showClass("doc-mac");
    updateButtons();
}
function isMac() {
    return (document.cookie.includes("mac"));
}

function showClass(name) {
    var elements = document.getElementsByClassName(name);
    for (var i = 0; i < elements.length; ++i) {
        var item = elements[i];
        item.classList.remove("hidden");
    }
}
function hideClass(name) {
    var elements = document.getElementsByClassName(name);
    for (var i = 0; i < elements.length; ++i) {
        var item = elements[i];
        item.classList.add("hidden");
    }
}
function updateButtons() {
    let isMac = (document.cookie.includes("mac"));
    let iOSelements = document.getElementsByClassName("doc-btn-ios");
    for (var i = 0; i < iOSelements.length; ++i) {
        var item = iOSelements[i];
        if (isMac) {
            item.classList.remove("btn-blue");
        }
        else {
            item.classList.add("btn-blue");
        } 
    }
    var macElements = document.getElementsByClassName("doc-btn-mac");
    for (var i = 0; i < macElements.length; ++i) {
        var item = macElements[i];
        if (isMac) {
            item.classList.add("btn-blue");
        }
        else {
            item.classList.remove("btn-blue");
        } 
    }
}

window.onload = function() {
    if (this.isMac()) {
        this.setMac();
    }
}
