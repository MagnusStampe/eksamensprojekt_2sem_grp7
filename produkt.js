let produkter;

let urlParams = new URLSearchParams(window.location.search);
let produktID = urlParams.get("id");
console.log(produktID);
let produktKategori = urlParams.get("kategori");
console.log(produktID);
console.log(produktKategori);

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentJson();
}

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/acf/v3/produkterne?filter[orderby]=modified&per_page=100");
    produkter = await jsonData.json();

    visProdukter();
}

function visProdukter() {
    console.log(produkter);
    produkter.forEach(produkt => {
        console.log("count")

        let dest = document.querySelector("[data-dest]");
        let temp = document.querySelector("[data-template]");

        if (produktKategori == produkt.acf.kategori && produktID != produkt.id) {
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
                location.href = "produkt.html?id=" + produkt.id;
            });

            dest.appendChild(klon);
        }

        if (produktID == produkt.id) {
            document.querySelector("[data-navn]").textContent = produkt.acf.navn;
            document.querySelector("[data-materialer]").textContent = produkt.acf.materialer;
            document.querySelector("[data-pris]").textContent = produkt.acf.pris;
            document.querySelector("[data-beskrivelse]").innerHTML = produkt.acf.beskrivelse;

            document.querySelector("[data-billede]").src = produkt.acf.billede.url;
            document.querySelector("[data-billede]").alt = produkt.acf.navn;
        }

    });
}
