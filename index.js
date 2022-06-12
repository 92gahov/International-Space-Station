let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        streetViewControl: false,
        maxZoom: 3,
        minZoom: 2,
        fullscreenControl: false
    })
};

function issPosition() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then(res => res.json())
        .then(data => {
            map.setCenter({
                lat: parseFloat(data.iss_position.latitude),
                lng: parseFloat(data.iss_position.longitude)
            })
        })
};

function changePosition() {
    setInterval(() => {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(res => res.json())
            .then(data => {
                map.setCenter({
                    lat: parseFloat(data.iss_position.latitude),
                    lng: parseFloat(data.iss_position.longitude)
                })
            })
    }, 3000)
};

changePosition();

window.onload = () => {
    issPosition();
};

