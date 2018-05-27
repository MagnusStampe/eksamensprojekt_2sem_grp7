let billede = [];

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/wp/v2/lookbook");
    billeder = await jsonData.json();

    jsonInput();

}

function jsonInput() {
    console.log("jsonInput")

    indsaetHTML("privat");

    document.querySelector("[data-privat]").addEventListener("click", () => {
        document.querySelector("[data-privat]").classList.add("selected");
        document.querySelector("[data-erhverv]").classList.remove("selected");

        indsaetHTML("privat");
    });
    document.querySelector("[data-erhverv]").addEventListener("click", () => {
        document.querySelector("[data-privat]").classList.remove("selected");
        document.querySelector("[data-erhverv]").classList.add("selected");

        indsaetHTML("erhverv");
    });
}

function indsaetHTML(filtrer) {
    console.log(filtrer);

    let temp = document.querySelector("[data-temp]");
    let dest = document.querySelector("[data-dest]");

    billeder.forEach(billede => {

        if (filtrer == billede.acf.kategori) {

            console.log("billede");
            let klon = temp.cloneNode(true).content;

            klon.querySelector("[data-img]").src = billede.acf.billede.url;
            klon.querySelector("[data-img]").alt = billede.acf.navn;
            dest.appendChild(klon);
        }
    });
}
