document.addEventListener("DOMContentLoaded",function(){
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scroll >50){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }
    });

});
