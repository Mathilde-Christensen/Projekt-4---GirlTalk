document.addEventListener("DOMContentLoaded", function () {
  // denne variabel finder alle knapper med de relevante klasser
  const ansogKnapper = document.querySelectorAll(".hero_ansog_button, .ansog__button, .popup__ansog");

  // denne variabel finder popup-elementet
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
          resetDropdowns();  // her nulstilles dropdowns, når popup'en lukkes
      });
  }

  // denne lukker popup'en ved klik uden for formularen
  window.addEventListener("click", function (event) {
      if (event.target === ansogningPopup) {
          ansogningPopup.style.display = "none";
          resetDropdowns();  
      }
  });

  // Dropdown funktionalitet
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach(btn => {
      btn.addEventListener("click", function () {
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle("show");
      });
  });

  // denne opdaterer dropdown-knappen med valgt mulighed/input
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  dropdownMenus.forEach(menu => {
      menu.addEventListener("click", function (e) {
          if (e.target.tagName === "LI") {
              const selectedValue = e.target.getAttribute("data-value");
              const dropdownBtn = this.previousElementSibling;
              const hiddenInput = this.nextElementSibling;

              // opdaterer knapteksten uden pilen
              dropdownBtn.textContent = `${e.target.textContent}`;
              hiddenInput.value = selectedValue;

              // Lukker dropdown efter valgt mulighed
              this.classList.remove("show");
          }
      });
  });

  // Lukker dropdown'en, når der klikkes udenfor formularen
  window.addEventListener("click", function (e) {
      if (!e.target.matches('.dropdown-btn')) {
          dropdownMenus.forEach(menu => {
              menu.classList.remove('show');
          });
      }
  });

  // dette er funktionen til at nulstille dropdowns
  function resetDropdowns() {
      dropdownBtns.forEach(btn => {
          btn.textContent = "Vælg mulighed ▼";  // nulstiller til placeholderen i feltet
      });

      const hiddenInputs = document.querySelectorAll(".dropdown-value");
      hiddenInputs.forEach(input => {
          input.value = "";  // denne tømmer den skjulte input-værdi
      });
  }
});