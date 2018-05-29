let billede = [];
document.addEventListener("DOMContentLoaded", loaded);

let next = "stole";
let prev = "lamper";
let now = "plankeborde";

function loaded() {
    hentJson();
    slide();
}

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
        let klon = temp.cloneNode(true).content;

        klon.querySelector("[data-billede]").src = bil.acf.billede.url;
        klon.querySelector("[data-billede]").alt = bil.acf.billede.url;
        dest.appendChild(klon);


    });

}

function slide() {
    console.log("Slide prev:  " + prev + " next: " + next + " now: " + now)

    document.querySelector(".next").addEventListener("click", ()=> {
        console.log(next);
        document.querySelector(".slide").setAttribute.backgroundImage = next + ".jpg";
    });
}

function setKat(kat) {

    if(kat == "plankeborde") {
        slide()
    } else if(kat == "lamper") {

    }

}

