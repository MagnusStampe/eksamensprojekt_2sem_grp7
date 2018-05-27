let kasseKode = "";

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    kasseBtnHandler();
}

function kasseBtnHandler() {
    document.querySelector("[data-tilKasse]").addEventListener("click", kassen);
}

function kassen() {
    document.querySelector("#kurv_box").innerHTML = kasseKode;
}
