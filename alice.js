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
var dropdownContainer = document.querySelector('.dropdown-container');

dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target) && !dropdownContainer.contains(event.target)) {
        dropdownContainer.style.display = 'none';
    }
});
