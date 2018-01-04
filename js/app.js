(function() {
    addEvent(window,'load',function(){
        var m = document.getElementById('mobile-menu-icon');
        var items = document.getElementsByClassName('pt-trigger'),
        len = items.length;
        for(var i=0;i<len;i++){
            addEvent(items[i],'click',pageToggle);
        }
        addEvent(window,'scroll',fixTopMenu);
        addEvent(m,'click',mobileMenuToggle);
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
    function pageToggle() {
        console.log(this.id);
            switch(this.id) {
                case 'pt-home':
                    setActiveMenu(0);
                    setCurrentPage(0);
                    break;
                case 'm-pt-home':
                    setCurrentPage(0);
                    break;
                case 'pt-resume':
                    setActiveMenu(1);
                    setCurrentPage(1);
                    break;
                case 'm-pt-resume':
                    setCurrentPage(1);
                    break;
                case 'pt-services':
                    setActiveMenu(2);
                    setCurrentPage(2);
                    break;
                case 'm-pt-services':
                    setCurrentPage(2);
                    break;
                case 'pt-blog':
                    setActiveMenu(3);
                    setCurrentPage(3);
                    break;
                case 'm-pt-blog':
                    setCurrentPage(3);
                    break;
                case 'pt-contact':
                    setActiveMenu(4);
                    setCurrentPage(4);
                    break;
                case 'm-pt-contact':
                    setCurrentPage(4);
                    break;
                default:
                    break;
            }
    }
    function setActiveMenu(i) {
        var ul = document.getElementById('nav');
        var activeItem = ul.getElementsByClassName('active');
        var items = ul.getElementsByTagName('li');
        if(activeItem[0]!=items[i]) {
            activeItem[0].className = '';
            items[i].className = 'active';
        }
    }
    function setCurrentPage(i) {
        var div = document.getElementById('main');
        var curPage = div.getElementsByClassName('pt-page current-page');
        var items = div.getElementsByTagName('section');
        if(curPage[0]!=items[i]) {
            curPage[0].className = 'pt-page';
            items[i].className = 'pt-page current-page';
            mobileMenuToggle();
        }
 }

    function mobileMenuToggle(){  
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