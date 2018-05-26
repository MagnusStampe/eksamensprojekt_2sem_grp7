let totalKode = "<h2>Totalløsning</h2><button class='tilbage' data-tilbage>&larr;Tilbage</button><input type='text' name='navn' required placeholder='Dit navn'><br><input type='number' name='antal_rum' required placeholder='Antal rum'><br><textarea name='beskrivelse' required placeholder='Beskrivelse af boligen og andet relevant'></textarea><br><input type='email' name='email' required placeholder='Din email'><br><input class='submit' type='submit' value='Indsend mail' data-tak>";

let enkeltKode = "<h2>Enkelte møbler</h2><button class='tilbage' data-tilbage>&larr;Tilbage</button><input type='text' name='navn' required placeholder='Dit navn'><br><input type='number' name='antal_mpbler' required placeholder='Antal møbler'><br><input type='text' name='mobel' required placeholder='Hvilket type møbel ønsker du at få lavet? f. eks stol, bord m.m.'><br><textarea name='beskrivelse' required placeholder='Beskrivelse af møblet såsom cirka mål, materiale m.m.'></textarea><br><input type='email' name='email' required placeholder='Din email'><br><input class='submit' type='submit' value='Indsend mail' data-tak>";

let andetKode = "<h2>Andet</h2><button class='tilbage' data-tilbage>&larr;Tilbage</button><input type='text' name='navn' required placeholder='Dit navn'><br><input type='text' name='emne' required placeholder='Emne'><br><textarea name='beskrivelse' required placeholder='Skriv din besked her'></textarea><br><input type='email' name='email' required placeholder='Din email'><br><input class='submit' type='submit' value='Indsend mail' data-tak>";

let takKode = "<h2>Tak for din henvendelse</h2><p>Din besked er sendt og vi vil svarer hurtigst muligt<button class='tilbage' data-tilbage>&larr;Tilbage</button></p>";

let tilbageKode = document.getElementById("kontakt_box").innerHTML;

console.log(document.getElementById("kontakt_box"));
console.log(tilbageKode);

let emne = "Ukendt emne";

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    kontaktKnapper();
}

function kontaktKnapper() {
    document.querySelector("[data-total]").addEventListener("click", totalBtnHandler);
    document.querySelector("[data-enkelt]").addEventListener("click", enkeltBtnHandler);
    document.querySelector("[data-andet]").addEventListener("click", andetBtnHandler);
}

function totalBtnHandler() {
    document.querySelector("#kontakt_box").innerHTML = totalKode;
    document.querySelector("[data-tak]").addEventListener("click", takBtnHandler);
    document.querySelector("[data-tilbage]").addEventListener("click", tilbageBtnHandler);
}

function enkeltBtnHandler() {
    document.querySelector("#kontakt_box").innerHTML = enkeltKode;
    document.querySelector("[data-tak]").addEventListener("click", takBtnHandler);
    document.querySelector("[data-tilbage]").addEventListener("click", tilbageBtnHandler);
}

function andetBtnHandler() {
    document.querySelector("#kontakt_box").innerHTML = andetKode;
    document.querySelector("[data-tak]").addEventListener("click", takBtnHandler);
    document.querySelector("[data-tilbage]").addEventListener("click", tilbageBtnHandler);
}

function takBtnHandler() {
    document.querySelector("#kontakt_box").innerHTML = takKode;
    document.querySelector("[data-tilbage]").addEventListener("click", tilbageBtnHandler);
}

function tilbageBtnHandler() {
    document.querySelector("#kontakt_box").innerHTML = tilbageKode;
    kontaktKnapper();
}
