let billede = [];
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("http://www.magnusstampe.dk/2sem_eksamen/wp/wp-json/wp/v2/lookbook");
    //let jsonData = await fetch("test.json");
    billede = await jsonData.json();

    jsonInput();

}

function jsonInput() {
    billede.forEach(bil => {
        console.log(bil.acf.billede.url);

    });
}
