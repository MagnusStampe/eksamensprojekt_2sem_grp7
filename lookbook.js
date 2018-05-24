let billede = [];
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/wp/v2/lookbook");
    billeder = await jsonData.json();

    jsonInput();

}

function jsonInput() {
    console.log("jsonInput")
    let temp = document.querySelector("[data-temp]");
    let dest = document.querySelector("[data-dest]");
    billeder.forEach(billede => {

        console.log("billede");
        let klon = temp.cloneNode(true).content;

        klon.querySelector("[data-img]").src = billede.acf.billede.url;
        klon.querySelector("[data-img]").alt = billede.acf.navn;
        dest.appendChild(klon);
    });
}
