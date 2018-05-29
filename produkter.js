let billede = [];
document.addEventListener("DOMContentLoaded", loaded);

let slideNum = 1;

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

function slide(){
console.log("slide()")
    document.querySelector(".next").addEventListener("click", ()=> {
        console.log("next");
        if(slideNum < 3){
            console.log("under 3")
            slideNum++;
            document.querySelector(".slide").setAttribute.backgroundImage = "img/produktKat" + slideNum + ".jpg";
        } else {
            console.log("equal 3")
            slideNum = 1;
            document.querySelector(".slide").setAttribute.backgroundImage = "img/produktKat" + slideNum + ".jpg";
        }
    });
}

function setKat(kat) {

    if(kat == "plankeborde") {
        slide()
    } else if(kat == "lamper") {

    }

}

