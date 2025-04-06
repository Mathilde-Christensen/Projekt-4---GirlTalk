document.addEventListener("DOMContentLoaded", function () {
    // denne finder alle ansøgningsknapperne
    const ansogKnapper = document.querySelectorAll(".hero_ansog_button, .ansog__button, .popup__ansog");
    const ansogningPopup = document.getElementById("ansogningPopup");

    // denne åbner popup'en, når en af knapperne klikkes
    ansogKnapper.forEach(knap => {
        knap.addEventListener("click", () => {
            ansogningPopup.style.display = "flex";
        });
    });

    // denne lukker popup'en
    const lukBtn = document.getElementById("lukPopup");
    if (lukBtn) {
        lukBtn.addEventListener("click", () => {
            ansogningPopup.style.display = "none";
            resetDropdowns();
        });
    }

    // denne lukker popup'en ved klik uden for formularen (og man kommer tilbage til infoen omkring de frivillige)
    window.addEventListener("click", function (event) {
        if (event.target === ansogningPopup) {
            ansogningPopup.style.display = "none";
            resetDropdowns();
        }
    });

    // denne er omkring funktionen dropdown
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation(); // dden stopPropagation ville hele vinduet fange klikket og dermed lukke dropdownen
            const dropdownMenu = this.nextElementSibling;
            closeAllDropdowns(); // denne sørger for at kun én dropdown er åben ad gangen og lukker andre dropdowns
            dropdownMenu.classList.toggle("show");
        });
    });

    // håndtering af klik på dropdown-menu elementer
    const dropdownMenus = document.querySelectorAll(".dropdown-ansogning__menu");
    dropdownMenus.forEach(menu => {
        menu.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                const selectedValue = e.target.getAttribute("data-value");
                const dropdownBtn = this.previousElementSibling;
                const hiddenInput = this.nextElementSibling;

                // opdaterer knapteksten og fjerner pilen
                const btnText = e.target.textContent;
                dropdownBtn.textContent = btnText;
                hiddenInput.value = selectedValue;

                // denne sørger for at dropdown lukker efter valg
                this.classList.remove("show");
            }
        });
    });

    // denne lukker dropdown'en ved klik udenfor, men ikke hvis der klikkes inde i dropdownen
    window.addEventListener("click", function (e) {
        if (!e.target.matches('.dropdown-btn') && !e.target.closest('.dropdown-ansogning__menu')) {
            closeAllDropdowns();
        }
    });

    // lukker alle dropdowns
    function closeAllDropdowns() {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }

    // denne nulstiller dropdowns ved lukning af popup
    function resetDropdowns() {
        dropdownBtns.forEach(btn => {
            btn.textContent = "Vælg mulighed ▼";
        });

        const hiddenInputs = document.querySelectorAll(".dropdown-value");
        hiddenInputs.forEach(input => {
            input.value = "";
        });
    }
});