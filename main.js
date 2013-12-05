/**
 * @author Valeriy Garzha
 */

(function ($) {
    "use strict";
    var markers = [];

    $( document ).ready(function() {
        var mapOptions = {
            center: new google.maps.LatLng(48.498408, 34.968624),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

        google.maps.event.addListener(map, 'click', function (e) {
            markers[e.latLng.toString()] = new google.maps.Marker({
                position: e.latLng,
                map: map,
                title: 'Click to delete'
            });
            google.maps.event.addListener(markers[e.latLng.toString()], 'click', function (e) {
                this.setMap(null);
                markers.splice(e.latLng.toString(), 1);
            });
        });
    });

    $("form").submit(function (event) {
        if ($("input:first").val() === "correct") {
            $("span").text("Validated...").show();
            return;
        }

        $("span").text("Not valid!").show().fadeOut(1000);
        event.preventDefault();
    });

})(jQuery);