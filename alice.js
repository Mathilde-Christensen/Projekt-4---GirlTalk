let sidenavs = [document.getElementById("mySidenav")];
let hamburgers = [document.querySelector(".hamburger")];

function openNav(index) {
    sidenavs[index].style.width = "200px";      /*boksens længde*/
    document.addEventListener("click", closeNavOutside); 
}

function closeNav(index) {
    sidenavs[index].style.width = "0";
    document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
    sidenavs.forEach((sidenav, index) => {
        if (!sidenav.contains(event.target) && !hamburgers[index].contains(event.target)) {
            closeNav(index);
        }
    });
}

var dropdown = document.querySelector('.dropdown-knappen');
var dropdownIndhold = document.querySelector('.dropdown-indhold');

dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownIndhold.style.display = dropdownIndhold.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !dropdownIndhold.contains(event.target)) {
        dropdownIndhold.style.display = 'none';
    }
});
