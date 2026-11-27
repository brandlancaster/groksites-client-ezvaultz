(function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  var form = document.getElementById("reserve-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("form-msg");
      if (!msg) return;
      msg.textContent = "This is a sample form — scheduling will be connected before launch.";
      msg.classList.add("show", "ok");
      msg.setAttribute("role", "status");
    });
  }

  var zipForm = document.getElementById("zip-check");
  if (zipForm) {
    zipForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("zip-msg");
      if (!msg) return;
      msg.textContent =
        "This is a sample coverage check. The first service area is planned for Kearny Mesa / central San Diego, within a defined drive-time radius (final radius TBD). Contact us to confirm coverage for your ZIP — scheduling will be connected before launch.";
      msg.classList.add("show", "ok");
      msg.setAttribute("role", "status");
    });
  }
})();
