let SVG;
let x = 1;

let clickEvents = {
    CE_1: function () {
        svgEventListners(1, "http://ekstrabladet.dk/Haandvaerkeren/stor-succes-selvlaerte-kasper-laver-moebler-der-giver-mere-plads/6353994");
    },
    CE_2: function () {
        svgEventListners(2, "https://www.brandebladet.dk/lokal-iv%C3%A6rks%C3%A6tter-nomineret-til-prestigefyldt-pris");
    },
    CE_3: function () {
        svgEventListners(3, "http://connery.dk/kasper-boye-ugens-profil.126594.html");
    },
    CE_4: function () {
        svgEventListners(4, "http://csr.dk/en-funky-passion-m%C3%B8bler");
    },
    CE_5: function () {
        svgEventListners(5, "https://boligcious.dk/2015/03/29/mand-til-mand-onefunkyfurniture/");
    },
    CE_6: function () {
        svgEventListners(6, "http://costume.dk/se-min-bolig/se-min-bolig-mobeldesigner-kasper-boye");
    },
    CE_7: function () {
        svgEventListners(7, "https://www.bdo.dk/da-dk/nyheder/bdo-debatterer/m%C3%B8bler-af-genbrugstr%C3%A6");
    },
    CE_8: function () {
        svgEventListners(8, "http://www.densocialekapitalfond.dk/blog/2015/02/06/vil-du-lave-3-eller-30-millioner/");
    },
    CE_9: function () {
        svgEventListners(9, "http://annegadegaard.com/2014/05/vores-laekre-sofabord/");
    },
    CE_10: function () {
        svgEventListners(10, "http://sonomaseven.dk/one-funky-bench/");
    },
    CE_11: function () {
        svgEventListners(11, "https://styleitems.wordpress.com/2014/05/14/onefunkyfurniture/");
    },
    CE_12: function () {
        svgEventListners(12, "https://onefunkyfurniture.dk/wp-content/uploads/2017/06/ONEFUNKYFURNITURE_VOL47_K3.pdf");
    },
    CE_13: function () {
        svgEventListners(13, "http://www.setbyus.com/media/BGoeCzKlcpU/1");
    },
    CE_14: function () {
        svgEventListners(14, "http://my-pleasure.dk/2015/10/one-funky-furniture-og-en-mand-der-heder-kasper-boye/");
    },
    CE_15: function () {
        svgEventListners(15, "http://hsfo.dk/forside/Moebeldesigner-fra-Brande-deltager-i-nyt-DR-program/artikel/65405");
    },
    CE_16: function () {
        svgEventListners(16, "http://maschavang.dk/2014/03/nyt-skrivebord/");
    }
}

function svgEventListners(svgNum, linkAddress) {
    document.querySelector("#lag-" + svgNum).addEventListener("click", () => {
        if (document.querySelector("#lag-" + svgNum).classList.contains("animate")) {
            console.log(document.querySelector("#lag-" + svgNum).classList.length);
            window.open(linkAddress, '_blank');
        }
    });

    document.querySelector("#lag-" + svgNum).addEventListener("click", () => {
        clearAnimate();
        document.querySelector("#lag-" + svgNum).classList.add("animate");
    });
}

function clearAnimate() {
    let svgNum = 1;

    while (svgNum < 17) {
        console.log(svgNum);
        document.querySelector("#lag-" + svgNum).classList.remove("animate");
        svgNum++;
    }
}

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    getSVG();
    btnHandler();
}

function btnHandler() {
    console.log("btnHandler()");

    document.querySelector("[data-presse]").addEventListener("click", () => {
        document.querySelector("[data-presse]").classList.add("selected");
        document.querySelector("[data-presseSection]").classList.add("selected");
        document.querySelector("[data-videoer]").classList.remove("selected");
        document.querySelector("[data-videoerSection]").classList.remove("selected");
    });
    document.querySelector("[data-videoer]").addEventListener("click", () => {
        document.querySelector("[data-presse]").classList.remove("selected");
        document.querySelector("[data-presseSection]").classList.remove("selected");
        document.querySelector("[data-videoer]").classList.add("selected");
        document.querySelector("[data-videoerSection]").classList.add("selected");
    });
}

async function getSVG() {
    let SVGdata = await fetch("img/svg_til_logo_text.svg");
    SVG = await SVGdata.text();

    indsaetSVG();
}

function indsaetSVG() {
    document.querySelector("[data-dest]").innerHTML = SVG;

    animateSVG();
}

function animateSVG() {

    console.log("animateSVG()")
    //Bracket venstre class(#brackets-x-v)  =   v_bracket
    //Bracket højre class(#brackets-y-h)    =   h_bracket
    //Sort box class(#box-x)                =   text_svg
    //Logo class(#logo-x)                   =   logo_svg

    while (x < 17) {
        console.log("#lag-" + x);

        //classes
        document.querySelector("#lag-" + x).classList.add("lag");
        document.querySelector("#brackets-" + x + "-v").classList.add("v_bracket");
        document.querySelector("#brackets-" + x + "-h").classList.add("h_bracket");
        document.querySelector("#box-" + x).classList.add("text_svg");
        document.querySelector("#logo-" + x).classList.add("logo_svg");

        //listner click
        clickEvents["CE_" + x]();

        //set variabel
        x++;
    }
}
