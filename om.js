let SVG;
let x = 1;



document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    getSVG();
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
        console.log("#brackets-" + x + "-v");

        //classes
        document.querySelector("#lag-" + x).classList.add("lag");
        document.querySelector("#brackets-" + x + "-v").classList.add("v_bracket");
        document.querySelector("#brackets-" + x + "-h").classList.add("h_bracket");
        document.querySelector("#box-" + x).classList.add("text_svg");
        document.querySelector("#logo-" + x).classList.add("logo_svg");

        //mouseover

        //set variabel
        x++;
    }
}

function mouseOver1() {
    console.log("hej")
}
