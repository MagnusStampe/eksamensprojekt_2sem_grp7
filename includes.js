// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader();
    hentFooter();

};


//Header

async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("#top_includes").innerHTML = header;
    document.querySelector("#top_includes").parentNode.appendChild(document.querySelector("#top_includes"));

    function toggleMenu() {
        document.querySelector("#top_includes #main_nav").classList.toggle("open");
        //document.querySelector("header nav").classList.toggle("show");

        console.log("toggleMenu()");
    };

    document.querySelector("#burger").addEventListener("click", toggleMenu);
};



async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
    document.querySelector("footer").parentNode.appendChild(document.querySelector("footer"));


};
