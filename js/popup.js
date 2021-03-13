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
      console.log("Нужно ввести дату Заезда и Выезда");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });