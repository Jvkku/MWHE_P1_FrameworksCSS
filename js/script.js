document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuOptions = document.getElementById("menuOptions");

    function toggleMenu() {
        menuOptions.classList.toggle("d-none");
        menuButton.classList.toggle("active"); // Cambiar color del botón activo
    }

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", function (event) {
        if (!menuOptions.classList.contains("d-none") && !menuButton.contains(event.target)) {
            menuOptions.classList.add("d-none");
            menuButton.classList.remove("active");
        }
    });

    window.addEventListener("scroll", function () {
        if (!menuOptions.classList.contains("d-none")) {
            menuOptions.classList.add("d-none");
            menuButton.classList.remove("active");
        }
    });
});

function toggleSearch() {
    const searchBar = document.getElementById("searchInput");
    if (searchBar.classList.contains("d-none")) {
        searchBar.classList.remove("d-none");
        searchBar.focus();
    } else {
        searchBar.classList.add("d-none");
    }
}

function searchFunction() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query === 'noticias') {
        window.location.href = 'news.html';
    }
}

$(document).ready(function(){
    $('.marquee').marquee({
        duration: 8000,
        gap: 20,
        duplicated: true,
        delayBeforeStart: 0,
        startVisible: true,
    });
});