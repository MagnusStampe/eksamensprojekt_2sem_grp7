let billede = [];
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/wp/v2/produkter");
    //let jsonData = await fetch("test.json");
    billede = await jsonData.json();

    visProdukter();

}

function visProdukter() {

    let dest = document.querySelector("[data-dest]");
    let temp = document.querySelector("[data-template]");



    billede.forEach(bil => {
        console.log(bil.acf.billede.url);
        let klon = temp.cloneNode(true).content;

        klon.querySelector("[data-billede]").src = bil.acf.billede.url;
        klon.querySelector("[data-billede]").alt = bil.acf.billede.url;
        dest.appendChild(klon);


    });

}
