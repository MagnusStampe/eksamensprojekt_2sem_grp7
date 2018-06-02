let SVG;
let x = 1;

let mouseOver = {
    MO_1: function () {
        document.querySelector("#box-1").addEventListener("mouseover", () => {
            document.querySelector("#brackets-1-v").classList.add("animate");
            document.querySelector("#brackets-1-h").classList.add("animate");
            document.querySelector("#box-1").classList.add("animate");
            document.querySelector("#logo-1").classList.add("animate");
        });
        document.querySelector("#box-1").addEventListener("mouseout", () => {
            document.querySelector("#brackets-1-v").classList.remove("animate");
            document.querySelector("#brackets-1-h").classList.remove("animate");
            document.querySelector("#box-1").classList.remove("animate");
            document.querySelector("#logo-1").classList.remove("animate");
        });
    },
    MO_2: function () {
        document.querySelector("#box-2").addEventListener("mouseover", () => {
            document.querySelector("#brackets-2-v").classList.add("animate");
            document.querySelector("#brackets-2-h").classList.add("animate");
            document.querySelector("#box-2").classList.add("animate");
            document.querySelector("#logo-2").classList.add("animate");
        });
        document.querySelector("#box-2").addEventListener("mouseout", () => {
            document.querySelector("#brackets-2-v").classList.remove("animate");
            document.querySelector("#brackets-2-h").classList.remove("animate");
            document.querySelector("#box-2").classList.remove("animate");
            document.querySelector("#logo-2").classList.remove("animate");
        });
    },
    MO_3: function () {
        document.querySelector("#box-3").addEventListener("mouseover", () => {
            document.querySelector("#brackets-3-v").classList.add("animate");
            document.querySelector("#brackets-3-h").classList.add("animate");
            document.querySelector("#box-3").classList.add("animate");
            document.querySelector("#logo-3").classList.add("animate");
        });
        document.querySelector("#box-3").addEventListener("mouseout", () => {
            document.querySelector("#brackets-3-v").classList.remove("animate");
            document.querySelector("#brackets-3-h").classList.remove("animate");
            document.querySelector("#box-3").classList.remove("animate");
            document.querySelector("#logo-3").classList.remove("animate");
        });
    },
    MO_4: function () {
        document.querySelector("#box-4").addEventListener("mouseover", () => {
            document.querySelector("#brackets-4-v").classList.add("animate");
            document.querySelector("#brackets-4-h").classList.add("animate");
            document.querySelector("#box-4").classList.add("animate");
            document.querySelector("#logo-4").classList.add("animate");
        });
        document.querySelector("#box-4").addEventListener("mouseout", () => {
            document.querySelector("#brackets-4-v").classList.remove("animate");
            document.querySelector("#brackets-4-h").classList.remove("animate");
            document.querySelector("#box-4").classList.remove("animate");
            document.querySelector("#logo-4").classList.remove("animate");
        });
    },
    MO_5: function () {
        document.querySelector("#box-5").addEventListener("mouseover", () => {
            document.querySelector("#brackets-5-v").classList.add("animate");
            document.querySelector("#brackets-5-h").classList.add("animate");
            document.querySelector("#box-5").classList.add("animate");
            document.querySelector("#logo-5").classList.add("animate");
        });
        document.querySelector("#box-5").addEventListener("mouseout", () => {
            document.querySelector("#brackets-5-v").classList.remove("animate");
            document.querySelector("#brackets-5-h").classList.remove("animate");
            document.querySelector("#box-5").classList.remove("animate");
            document.querySelector("#logo-5").classList.remove("animate");
        });
    },
    MO_6: function () {
        document.querySelector("#box-6").addEventListener("mouseover", () => {
            document.querySelector("#brackets-6-v").classList.add("animate");
            document.querySelector("#brackets-6-h").classList.add("animate");
            document.querySelector("#box-6").classList.add("animate");
            document.querySelector("#logo-6").classList.add("animate");
        });
        document.querySelector("#box-6").addEventListener("mouseout", () => {
            document.querySelector("#brackets-6-v").classList.remove("animate");
            document.querySelector("#brackets-6-h").classList.remove("animate");
            document.querySelector("#box-6").classList.remove("animate");
            document.querySelector("#logo-6").classList.remove("animate");
        });
    },
    MO_7: function () {
        document.querySelector("#box-7").addEventListener("mouseover", () => {
            document.querySelector("#brackets-7-v").classList.add("animate");
            document.querySelector("#brackets-7-h").classList.add("animate");
            document.querySelector("#box-7").classList.add("animate");
            document.querySelector("#logo-7").classList.add("animate");
        });
        document.querySelector("#box-7").addEventListener("mouseout", () => {
            document.querySelector("#brackets-7-v").classList.remove("animate");
            document.querySelector("#brackets-7-h").classList.remove("animate");
            document.querySelector("#box-7").classList.remove("animate");
            document.querySelector("#logo-7").classList.remove("animate");
        });
    },
    MO_8: function () {
        document.querySelector("#box-8").addEventListener("mouseover", () => {
            document.querySelector("#brackets-8-v").classList.add("animate");
            document.querySelector("#brackets-8-h").classList.add("animate");
            document.querySelector("#box-8").classList.add("animate");
            document.querySelector("#logo-8").classList.add("animate");
        });
        document.querySelector("#box-8").addEventListener("mouseout", () => {
            document.querySelector("#brackets-8-v").classList.remove("animate");
            document.querySelector("#brackets-8-h").classList.remove("animate");
            document.querySelector("#box-8").classList.remove("animate");
            document.querySelector("#logo-8").classList.remove("animate");
        });
    },
    MO_9: function () {
        document.querySelector("#box-9").addEventListener("mouseover", () => {
            document.querySelector("#brackets-9-v").classList.add("animate");
            document.querySelector("#brackets-9-h").classList.add("animate");
            document.querySelector("#box-9").classList.add("animate");
            document.querySelector("#logo-9").classList.add("animate");
        });
        document.querySelector("#box-9").addEventListener("mouseout", () => {
            document.querySelector("#brackets-9-v").classList.remove("animate");
            document.querySelector("#brackets-9-h").classList.remove("animate");
            document.querySelector("#box-9").classList.remove("animate");
            document.querySelector("#logo-9").classList.remove("animate");
        });
    },
    MO_10: function () {
        document.querySelector("#box-10").addEventListener("mouseover", () => {
            document.querySelector("#brackets-10-v").classList.add("animate");
            document.querySelector("#brackets-10-h").classList.add("animate");
            document.querySelector("#box-10").classList.add("animate");
            document.querySelector("#logo-10").classList.add("animate");
        });
        document.querySelector("#box-10").addEventListener("mouseout", () => {
            document.querySelector("#brackets-10-v").classList.remove("animate");
            document.querySelector("#brackets-10-h").classList.remove("animate");
            document.querySelector("#box-10").classList.remove("animate");
            document.querySelector("#logo-10").classList.remove("animate");
        });
    },
    MO_11: function () {
        document.querySelector("#box-11").addEventListener("mouseover", () => {
            document.querySelector("#brackets-11-v").classList.add("animate");
            document.querySelector("#brackets-11-h").classList.add("animate");
            document.querySelector("#box-11").classList.add("animate");
            document.querySelector("#logo-11").classList.add("animate");
        });
        document.querySelector("#box-11").addEventListener("mouseout", () => {
            document.querySelector("#brackets-11-v").classList.remove("animate");
            document.querySelector("#brackets-11-h").classList.remove("animate");
            document.querySelector("#box-11").classList.remove("animate");
            document.querySelector("#logo-11").classList.remove("animate");
        });
    },
    MO_12: function () {
        document.querySelector("#box-12").addEventListener("mouseover", () => {
            document.querySelector("#brackets-12-v").classList.add("animate");
            document.querySelector("#brackets-12-h").classList.add("animate");
            document.querySelector("#box-12").classList.add("animate");
            document.querySelector("#logo-12").classList.add("animate");
        });
        document.querySelector("#box-12").addEventListener("mouseout", () => {
            document.querySelector("#brackets-12-v").classList.remove("animate");
            document.querySelector("#brackets-12-h").classList.remove("animate");
            document.querySelector("#box-12").classList.remove("animate");
            document.querySelector("#logo-12").classList.remove("animate");
        });
    },
    MO_13: function () {
        document.querySelector("#box-13").addEventListener("mouseover", () => {
            document.querySelector("#brackets-13-v").classList.add("animate");
            document.querySelector("#brackets-13-h").classList.add("animate");
            document.querySelector("#box-13").classList.add("animate");
            document.querySelector("#logo-13").classList.add("animate");
        });
        document.querySelector("#box-13").addEventListener("mouseout", () => {
            document.querySelector("#brackets-13-v").classList.remove("animate");
            document.querySelector("#brackets-13-h").classList.remove("animate");
            document.querySelector("#box-13").classList.remove("animate");
            document.querySelector("#logo-13").classList.remove("animate");
        });
    },
    MO_14: function () {
        document.querySelector("#box-14").addEventListener("mouseover", () => {
            document.querySelector("#brackets-14-v").classList.add("animate");
            document.querySelector("#brackets-14-h").classList.add("animate");
            document.querySelector("#box-14").classList.add("animate");
            document.querySelector("#logo-14").classList.add("animate");
        });
        document.querySelector("#box-14").addEventListener("mouseout", () => {
            document.querySelector("#brackets-14-v").classList.remove("animate");
            document.querySelector("#brackets-14-h").classList.remove("animate");
            document.querySelector("#box-14").classList.remove("animate");
            document.querySelector("#logo-14").classList.remove("animate");
        });
    },
    MO_15: function () {
        document.querySelector("#box-15").addEventListener("mouseover", () => {
            document.querySelector("#brackets-15-v").classList.add("animate");
            document.querySelector("#brackets-15-h").classList.add("animate");
            document.querySelector("#box-15").classList.add("animate");
            document.querySelector("#logo-15").classList.add("animate");
        });
        document.querySelector("#box-15").addEventListener("mouseout", () => {
            document.querySelector("#brackets-15-v").classList.remove("animate");
            document.querySelector("#brackets-15-h").classList.remove("animate");
            document.querySelector("#box-15").classList.remove("animate");
            document.querySelector("#logo-15").classList.remove("animate");
        });
    },
    MO_16: function () {
        document.querySelector("#box-16").addEventListener("mouseover", () => {
            document.querySelector("#brackets-16-v").classList.add("animate");
            document.querySelector("#brackets-16-h").classList.add("animate");
            document.querySelector("#box-16").classList.add("animate");
            document.querySelector("#logo-16").classList.add("animate");
        });
        document.querySelector("#box-16").addEventListener("mouseout", () => {
            document.querySelector("#brackets-16-v").classList.remove("animate");
            document.querySelector("#brackets-16-h").classList.remove("animate");
            document.querySelector("#box-16").classList.remove("animate");
            document.querySelector("#logo-16").classList.remove("animate");
        });
    }
}

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    getSVG();
}

async function getSVG() {
    let SVGdata = await fetch("img/svg_til_logo.svg");
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
        console.log("#brackets-" + x + "-v");

        //classes
        document.querySelector("#brackets-" + x + "-v").classList.add("v_bracket");
        document.querySelector("#brackets-" + x + "-h").classList.add("h_bracket");
        document.querySelector("#box-" + x).classList.add("text_svg");
        document.querySelector("#logo-" + x).classList.add("logo_svg");

        //mouseover
        mouseOver["MO_" + x]();

        //set variabel
        x++;
    }
}

function mouseOver1() {
    console.log("hej")
}
