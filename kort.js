let map;

let onefunky = {
    lat: 55.673857,
    lng: 12.552146
};



function initMap() {
    let map = new google.maps.Map(document.querySelector("#map"), {
        center: onefunky,
        zoom: 10
    });

    let marker = new google.maps.Marker({
        position: onefunky,
        title: "One Funky Furniture",

        map: map
    });


    let infowindow = new google.maps.InfoWindow({
        content: "<h2>One Funky Furniture</h2> <p>Gl. Kongevej 39A <br> 1610 København V </p>"
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    })

}
