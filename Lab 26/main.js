var earth;
function initialize() {
    earth = new WE.map('earth_div');
    earth.setView([46.8011, 8.2266], 3);
    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 16,
        tms: true
    }).addTo(earth);

    var iss = WE.marker([0, 0], 'https://s3.amazonaws.com/cdn.misakai.com/www-temp/iss/iss.png', 64, 64).addTo(earth)
    iss.bindPopup('<b>International Space Station!</b>');

    // animation
    var before = null;
    requestAnimationFrame(function animate(now) {
        //get iss location
        fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
            longitude = data.iss_position.longitude;
            latitude = data.iss_position.latitude;
            earth.setCenter([latitude, longitude]);
            iss.setLatLng([latitude, longitude]);
            requestAnimationFrame(animate); 
        })
    });    
}
