let billede = [];
document.addEventListener("DOMContentLoaded", loaded);

let slideNum = 1;
let slideKat = "plankeborde";

function loaded() {
    hentJson();
    slide();
}

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/acf/v3/produkterne?filter[orderby]=modified&per_page=100");
    produkter = await jsonData.json();

    visProdukter(slideKat);

}

function visProdukter(kategori) {

    document.querySelector("#produkter .slide_headline").textContent = slideKat;

    let dest = document.querySelector("[data-dest]");
    let temp = document.querySelector("[data-template]");

    dest.innerHTML = "";

    produkter.forEach(produkt => {
        if (kategori == produkt.acf.kategori) {
            console.log(kategori)
            let klon = temp.cloneNode(true).content;

            //Indsæt billede med "src" og "alt"
            klon.querySelector("[data-billede]").src = produkt.acf.billede.url;
            klon.querySelector("[data-billede]").alt = produkt.acf.navn;

            //Indsæt navn, materialer og pris som kan ses ved hover på desktop
            klon.querySelector("[data-navn]").textContent = produkt.acf.navn;
            klon.querySelector("[data-materialer]").textContent = produkt.acf.materialer;
            klon.querySelector("[data-pris]").textContent = produkt.acf.pris;

            //Send til produkt.html med id
            klon.querySelector("[data-container]").addEventListener("click", () => {
                location.href = "produkt.html?id=" + produkt.id + "&kategori=" + produkt.acf.kategori;
            });

            dest.appendChild(klon);
        }
    });
}

function slide() {
    document.querySelector(".next").addEventListener("click", () => {

        //Skift til stole
        if (slideNum == 1) {
            console.log("1 til 2")

            slideNum++;
            slideKat = "stole";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);

            //Skift til lamper
        } else if (slideNum == 2) {
            console.log("2 til 3")

            slideNum++;
            slideKat = "lamper";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);

            //Skift til plankeborde
        } else {
            console.log("3 til 1")

            slideNum = 1;
            slideKat = "plankeborde";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);
        }

    });

    document.querySelector(".prev").addEventListener("click", () => {

        document.querySelector(".prev").classList.remove("animate");
        document.querySelector(".prev").classList.add("animate");

        //Skift til stole
        if (slideNum == 1) {
            console.log("1 til 3")

            slideNum = 3;
            slideKat = "lamper";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);

            //Skift til lamper
        } else if (slideNum == 2) {
            console.log("2 til 1")

            slideNum--;
            slideKat = "Plankeborde";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);

            //Skift til plankeborde
        } else {
            console.log("3 til 1")

            slideNum--;
            slideKat = "stole";

            document.querySelector(".slide").style.backgroundImage = 'url("img/produktKat' + slideNum + '.jpg")';

            visProdukter(slideKat);
        }
    });
}
