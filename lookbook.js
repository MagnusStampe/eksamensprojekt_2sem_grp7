let billede = [];
let destColumn;

let media1 = window.matchMedia("(max-width: 1000px)");
let media2 = window.matchMedia("(max-width: 1300px)");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://magnusstampe.dk/2sem_eksamen/wp/wp-json/acf/v3/lookbook?filter[orderby]=modified&per_page=100");
    billeder = await jsonData.json();

    jsonInput();

}

function jsonInput() {
    console.log(billeder);

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

    let destNum = 1;

    if (media1.matches) {
        destColumn = 3;
    } else if (media2.matches) {
        destColumn = 5;
    } else {
        destColumn = 7;
    }

    console.log(destColumn);

    let temp = document.querySelector("[data-temp]");
    let dest = document.querySelector("[data-dest" + destNum + "]");


    document.querySelector("[data-dest1]").innerHTML = "";
    document.querySelector("[data-dest2]").innerHTML = "";
    document.querySelector("[data-dest3]").innerHTML = "";
    document.querySelector("[data-dest4]").innerHTML = "";
    document.querySelector("[data-dest5]").innerHTML = "";
    document.querySelector("[data-dest6]").innerHTML = "";
    document.querySelector("[data-dest7]").innerHTML = "";

    billeder.forEach(billede => {
        console.log(billede.acf.kategori);
        console.log(dest);
        if (filtrer == billede.acf.kategori) {

            destNum++;
            if (destNum < destColumn) {
                dest = document.querySelector("[data-dest" + destNum + "]");
            } else {
                dest = document.querySelector("[data-dest" + destNum + "]");
                destNum = 0;
            }


            console.log("billede");
            let klon = temp.cloneNode(true).content;

            klon.querySelector("[data-img]").src = billede.acf.startbillede.url;

            klon.querySelector("[data-img]").alt = billede.acf.navn;
            dest.appendChild(klon);
        }
    });
}
