(function() {
    addEvent(window,'load',function(){
        var m = document.getElementById('mobile-menu-icon');
        addEvent(window,'scroll',fixTopMenu);
        addEvent(m,'click',showMobileMenu);
    });
    function addEvent (node,type,listener) {
        if (node.addEventListener) {
            node.addEventListener(type,listener);
        } else if (node.attachEvent) {
            node.attachEvent('on'+type, listener); // For IE 8 and earlier versions
        }
    }
    function scrolltop() {
        var top = 0;
        if (typeof(window.pageYOffset) == "number") {
            top = window.pageYOffset;
        } else if (document.body && document.body.scrollTop) {
            top = document.body.scrollTop;
        } else if (document.documentElement && document.documentElement.scrollTop) { // IE9 and earlier
            top = document.documentElement.scrollTop;
        }
        return top;
    }
    function fixTopMenu() {
        var top;
        top = scrolltop();
        if(top>10){
            document.getElementById('navtop').className = 'header sticky';
        } else {
            document.getElementById('navtop').className = 'header';
        }
    }
    function showMobileMenu(){  
        var mobileMenuIcon = document.getElementById("mobile-menu-icon");
        var mobileMenuContent = document.getElementById("mobile-menu-content");  
        if(mobileMenuContent.className === "mobile-menu-content"){
            mobileMenuContent.className = "mobile-menu-content mobile-visible";
            mobileMenuIcon.className = "fa fa-times";
        }        
        else{
            mobileMenuContent.className = "mobile-menu-content";
            mobileMenuIcon.className = "fa fa-bars";
        }
    }
    function myMap() {
        var mapOptions = {
            center: new google.maps.LatLng(-27.4698, 153.0251),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var infoWindow = new google.maps.InfoWindow({map: map});
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        }, function() {
             handleLocationError(true, infoWindow, map.getCenter());
        });
        } else {
    // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation?'Error: The Geolocation service failed.' :'Error: Your browser doesn\'t support geolocation.');
    }
})();