document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = [
      { btnId: "dropdownBtn1", menuId: "dropdownMenu1", valueId: "dropdownValue1" },
      { btnId: "dropdownBtn2", menuId: "dropdownMenu2", valueId: "dropdownValue2" },
      { btnId: "dropdownBtn3", menuId: "dropdownMenu3", valueId: "dropdownValue3" }
    ];
  
    dropdowns.forEach(({ btnId, menuId, valueId }) => {
      const btn = document.getElementById(btnId);
      const menu = document.getElementById(menuId);
      const valueInput = document.getElementById(valueId);
  
      if (!btn || !menu || !valueInput) return;
  
      // Toggle dropdown visibility via .show
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        // Luk alle andre dropdowns
        document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
        menu.classList.toggle("show");
      });
  
      // Vælg en mulighed
      menu.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
          const selectedValue = event.target.getAttribute("data-value");
          btn.textContent = selectedValue + " ▼";
          valueInput.value = selectedValue;
          menu.classList.remove("show");
        }
      });
    });
  
    // Luk dropdowns når man klikker udenfor
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
    });
  
    // Luk dropdowns med Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
      }
    });
  
    // Tjek samtykke
    document.querySelector("form").addEventListener("submit", function (e) {
      const samtykke = document.getElementById("samtykke");
      if (!samtykke.checked) {
        alert("Du skal give samtykke for at kunne tilmelde dig.");
        e.preventDefault();
      }
    });
  });
  