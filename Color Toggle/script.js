let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";
        getSidebar.style.visibility = "visible"

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
           getSidebarLinks[i].style.opacity = "1"; 
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        
        getSidebar.style.width = "0px";
        getSidebarUl.style.visibility = "hidden";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
           getSidebarLinks[i].style.opacity = "0"; 
        }

        toggleNavStatus = false;
    }
}

const grijs = document.getElementById('lightgrey');
const rood = document.getElementById('red');
const oranje = document.getElementById('orange');
const paars = document.getElementById('purple');
const groen = document.getElementById('green');

grijs.addEventListener('click', function(){
document.body.classList.add ('lightgrey');
document.body.classList.remove ('red', 'orange', 'purple', 'green');
document.getElementById('colorname').innerHTML='Lightgrey';
toggleNav();
});

rood.addEventListener('click', function(){
document.body.classList.add ('red');
document.body.classList.remove ('lightgrey', 'orange', 'purple', 'green');
document.getElementById('colorname').innerHTML='Red';
toggleNav();
});

oranje.addEventListener('click', function(){
document.body.classList.add ('orange');
document.body.classList.remove ('lightgrey', 'red', 'purple', 'green');
document.getElementById('colorname').innerHTML='Orange';
toggleNav();
});

paars.addEventListener('click', function(){
document.body.classList.add ('purple');
document.body.classList.remove ('lightgrey', 'red', 'orange', 'green');
document.getElementById('colorname').innerHTML='Purple';
toggleNav();
});

groen.addEventListener('click', function(){
document.body.classList.add ('green');
document.body.classList.remove ('lightgrey', 'red', 'orange', 'purple');
document.getElementById('colorname').innerHTML='Green';
toggleNav();
});

