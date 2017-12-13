
function showMobileMenu(){  
    var mobileMenuIcon = document.getElementById("mobile-menu-icon");
    var mobileMenuContent = document.getElementById("mobile-menu-content");  
    if(mobileMenuContent.className === "mobile-menu-content"){
        mobileMenuContent.className = "mobile-menu-content mobile-visible";
        mobileMenuIcon.className = "fa fa-times"
    }        
    else{
        mobileMenuContent.className = "mobile-menu-content";
        mobileMenuIcon.className = "fa fa-bars"
    }
}

/*
window.onclick = function(event) {
    var moileMenu = document.getElementById("mobile-menu")
    var mobileMenuContent = document.getElementById("mobile-menu-content");
    if (event.target === moileMenu) {
        if(mobileMenuContent.className === "mobile-menu-content"){
            mobileMenuContent.className = "mobile-menu-content mobile-visible";
        }
        else{
            mobileMenuContent.className = "mobile-menu-content";
        } 
    }
    else {
        mobileMenuContent.className = "mobile-menu-content";
    }   
}
*/