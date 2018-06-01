let SVG;

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    getSVG();
}

async function getSVG() {
    let SVGdata = await fetch("img/interaktivSVG.svg");
    SVG = await SVGdata.text();

    indsaetSVG();
}

function indsaetSVG() {
    document.querySelector("[data-dest]").innerHTML = SVG;
}
