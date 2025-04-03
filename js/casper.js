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

    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
      menu.classList.toggle("show");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const selectedValue = event.target.getAttribute("data-value");
        btn.textContent = selectedValue + " ▼";
        valueInput.value = selectedValue;
        menu.classList.remove("show");
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
    }
  });

  // 👇 Her definerer vi popup’en
  const ansogningPopup = document.getElementById("ansogningPopup");

  // Åbn popup på knap klik
  document.querySelectorAll(".ansog__button, .popup__ansog").forEach(knap => {
    knap.addEventListener("click", () => {
      ansogningPopup.style.display = "flex";
    });
  });

  // Luk popup
  const lukBtn = document.getElementById("lukPopup");
  if (lukBtn) {
    lukBtn.addEventListener("click", () => {
      ansogningPopup.style.display = "none";
    });
  }

  // Tjek samtykke
  const form = ansogningPopup.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const samtykke = document.getElementById("samtykke");
      if (!samtykke || !samtykke.checked) {
        alert("Du skal give samtykke for at kunne tilmelde dig.");
        e.preventDefault();
      }
    });
  }
});
