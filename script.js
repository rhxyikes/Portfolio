const header=document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky",window,scrollY>200)

});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navlist = document.querySelector(".navlist");

  menuIcon.addEventListener("click", function () {
    navlist.classList.toggle("open");
  });
});



