$('.product__slider').slick({
    arrows:true,
});
window.onscroll = function() {
    let scrolled = window.pageYOffset;
    let headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
    let navBar = document.getElementsByClassName("nav-bar")[0];
    let navBarHeight = navBar.offsetHeight;
    if(scrolled >= headerHeight-navBarHeight){
        navBar.classList.add("nav-bar_fixed-top");
    }
    else{
        navBar.classList.remove("nav-bar_fixed-top");
    }
}