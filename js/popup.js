var button = document.querySelector(".btn");

  var popup = document.querySelector(".modal");

  var form = popup.querySelector("form");
  var arrival = popup.querySelector(".arrival-date-user");
  var departure = popup.querySelector(".departure-date-user");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    arrival.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });