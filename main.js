$(document).ready(function(){

  var menu = $(".header-right a");
  var menuList = $(".hamburger-menu");
  var close= $(".close");
  
  menu.click(function(){
      console.log("apro")
      menuList.fadeIn(1000);
  });

  close.click(function(){
    console.log("chiudo");
    menuList.fadeOut(1000);
  })


});

