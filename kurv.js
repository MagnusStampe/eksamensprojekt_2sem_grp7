let kurvKode = "<div id='top_bar_vare'><p>Vare</p><p>Pris</p><p>Antal</p><p>Total</p></div><button class='x'>x</button><div class='vare'><p><strong>Plankebord</strong></p><p>12.000,-</p><input data-input1 type='number' min='0' name='antal_vare' required placeholder='1'><p data-total1>12.000,-</p></div><button class='x'>x</button><div class='vare'><p><strong>Kopperlampe Ø35</strong></p><p>3.000,-</p><input data-input2 type='number' min='0' name='antal_vare' required placeholder='2'><p data-total2>6.000,-</p></div><div><h2>Subtotal</h2><p><em>18.000,-</em></p><button data-tilKassen>Gå til kassen</button></div>"

let kasseKode = "<h2>Faktureringsoplysninger</h2><button class='tilbage'>&larr;Tilbage</button><p><span>*</span> skal udfyldes</p><h3>Navn</h3><input type='text' name='fornavn' required placeholder='Fornavn'><span>*</span><br><input type='text' name='efternavn' required placeholder='Efternavn'><span>*</span><h3>Evt. firmanavn</h3><input type='text' name='Firmanavn' placeholder='Firmanavn'><h3>Adresse</h3><p><em>Levering kun til Danmark</em></p><input type='text' name='gade' required placeholder='Gadenavn og nr.'><span>*</span><br><input type='text' name='postnummer' required placeholder='Postnummer'><span>*</span><br><input type='text'' name='by' required placeholder='By'><span>*</span><h3>Kontaktoplysninger</h3><input type='text' name='telefon' required placeholder='Telefon'><br><input type='text' name='email' required placeholder='Email'><span>*</span><h2>Din Odre</h2><h3>Vare(r)</h3><p>Vare</p><div id='subtotal_grid'><p>Plankebord <strong>x 1</strong></p><p class='pris'>DKK12000</p><p>Kobberlampe <strong>x 2</strong></p><p class='pris'>DKK6000</p></div><h3>Subtotal</h3><p class='pris'>DKK18000</p><h3>Levering</h3><select><option value='gls'>GLS - DKK1000</option><option value='lokal'>Lokal afhentning</option></select><h3>Total</h3><p class='pris'>DKK19000</p><button data-odre>Afgiv odre</button>";

let odreKode = "<h2>Din odre er bekræftet</h2><p>Din vare vil blive leveret hurtigst muligt</p><button class='tilbage'>&larr;Tilbage</button>";

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    kurv();
}

function kurv() {
    document.querySelector("[data-tilKassen]").addEventListener("click", kasseBtnHandler);
}

function kasseBtnHandler() {
    document.querySelector("#kurv_box").innerHTML = kasseKode;
    document.querySelector("[data-odre]").addEventListener("click", odreBtnHandler);
    document.querySelector(".tilbage").addEventListener("click", tilbageBtnHandler);
}

function odreBtnHandler() {
    document.querySelector("#kurv_box").innerHTML = odreKode;
    document.querySelector(".tilbage").addEventListener("click", tilbageBtnHandler);
}

function tilbageBtnHandler() {
    document.querySelector("#kurv_box").innerHTML = kurvKode;
    kurv();
}
