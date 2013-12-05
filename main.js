function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(48.498408, 34.968624),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);

    var markers = [];

    google.maps.event.addListener(map, 'click', function (e) {
        markers[e.latLng.toString()] = new google.maps.Marker({
            position: e.latLng,
            map: map,
            title: 'Click to delete'
        });
        google.maps.event.addListener(markers[e.latLng.toString()], 'click', function (e) {
            this.setMap(null);
        });
    });

//            google.maps.event.addListener(markers, 'dblclick', function(e) {
//                var marker = new google.maps.Marker({
//                    position: e.latLng,
//                    map: map,
//                    title: 'Click to zoom'
//                });
//            });

//            google.maps.event.addListener(marker, 'click', function() {
//                map.setZoom(8);
//                map.setCenter(marker.getPosition());
//            });
}

$( "form" ).submit(function( event ) {
    if ( $( "input:first" ).val() === "correct" ) {
        $( "span" ).text( "Validated..." ).show();
        return;
    }

    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
});