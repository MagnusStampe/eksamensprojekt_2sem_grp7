// Initial function

document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    hentHeader();
    hentNav();
    hentFooter();

};


//Header
async function hentHeader() {
    let headerData = await fetch("header.html");
    let header = await headerData.text();
    document.querySelector("header.include").innerHTML = header;
    document.querySelector("header.include").parentNode.appendChild(document.querySelector("header.include"));
};

//Nav
async function hentNav() {
    let navData = await fetch("nav.html");
    let nav = await navData.text();
    document.querySelector("nav.include").innerHTML = nav;
    document.querySelector("nav.include").parentNode.appendChild(document.querySelector("nav.include"));

    function toggleMenu() {
        document.querySelector("nav.include").classList.toggle("open");
        //document.querySelector("header nav").classList.toggle("show");

        console.log("toggleMenu()");
    };

    document.querySelector("#burger").addEventListener("click", toggleMenu);
};


//Footer
async function hentFooter() {
    let footerData = await fetch("footer.html");
    let footer = await footerData.text();
    document.querySelector("footer").innerHTML = footer;
    document.querySelector("footer").parentNode.appendChild(document.querySelector("footer"));


};
