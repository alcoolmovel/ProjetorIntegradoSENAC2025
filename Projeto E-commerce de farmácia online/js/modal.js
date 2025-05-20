const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.querySelector(".close");

    loginBtn.onclick = function () {
      loginModal.style.display = "block";
    }

    closeModal.onclick = function () {
      loginModal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == loginModal) {
        loginModal.style.display = "none";
      }
    }

    // Toggle Menu Dropdown
    const menuLink = document.getElementById("menuLink");
    const menuDropdown = document.getElementById("menuDropdown");

    menuLink.addEventListener("click", function (e) {
      e.preventDefault();
      menuDropdown.style.display = (menuDropdown.style.display === "none" || menuDropdown.style.display === "") ? "flex" : "none";
    });

    // Fechar menu se clicar fora
    window.addEventListener("click", function (event) {
      if (!menuDropdown.contains(event.target) && event.target !== menuLink) {
        menuDropdown.style.display = "none";
      }
    });