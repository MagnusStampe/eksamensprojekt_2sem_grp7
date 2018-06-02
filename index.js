let startHtml = '<button id="luk">Luk</button><h2>Vil du holdes opdateret med nye events og produkter?</h2><input type="email" name="email" required placeholder="Din email"><br><button data-tilmeldBtn>Tilmeld</button>';

let slutHtml = '<button id="luk">Luk</button><h2>Tak fordi du tilmeldte dig vores nyhedsbrev!</h2>';

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    nyhedsbrev();
}

function nyhedsbrev() {
    document.querySelector("#tilmeld").addEventListener("click", () => {
        document.querySelector("#popup").classList.add("show");
    });
    document.querySelector("#luk").addEventListener("click", () => {
        document.querySelector("#popup").classList.remove("show");
        document.querySelector("#popup_vindue").innerHTML = startHtml;
        nyhedsbrev();
    });
    document.querySelector("#clickable").addEventListener("click", () => {
        document.querySelector("#popup").classList.remove("show");
        document.querySelector("#popup_vindue").innerHTML = startHtml;
        nyhedsbrev();
    });
    document.querySelector("[data-tilmeldBtn]").addEventListener("click", () => {
        document.querySelector("#popup_vindue").innerHTML = slutHtml;
        document.querySelector("#luk").addEventListener("click", () => {
            document.querySelector("#popup").classList.remove("show");
            document.querySelector("#popup_vindue").innerHTML = startHtml;
            nyhedsbrev();
        });
    });
}
