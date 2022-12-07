$(function () {

    $('.slickslider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        nextArrow: '.icon-leftArrow',
        prevArrow: '.icon-rightArrow'
        

    }); 

});

function openCity(evt, cityName) {
    var i, content__tabs, content__btn;
    content__tabs = document.getElementsByClassName("content__tabs");
    for (i = 0; i < content__tabs.length; i++) {
        content__tabs[i].style.display = "none";
    }
    content__btn = document.getElementsByClassName("content__btn");
    for (i = 0; i < content__btn.length; i++) {
        content__btn[i].className = content__btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }