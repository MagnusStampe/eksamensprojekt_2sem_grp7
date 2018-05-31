let billede = [];
let destColumn;

let media1 = window.matchMedia("(max-width: 1000px)");
let media2 = window.matchMedia("(max-width: 1300px)");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/wp/v2/lookbook");
    billeder = await jsonData.json();

    jsonInput();

}

function jsonInput() {
    console.log(billeder);

    indsaetHTML("Privat");

    document.querySelector("[data-privat]").addEventListener("click", () => {
        document.querySelector("[data-privat]").classList.add("selected");
        document.querySelector("[data-erhverv]").classList.remove("selected");

        indsaetHTML("Privat");
    });
    document.querySelector("[data-erhverv]").addEventListener("click", () => {
        document.querySelector("[data-privat]").classList.remove("selected");
        document.querySelector("[data-erhverv]").classList.add("selected");

        indsaetHTML("Erhverv");
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

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}
