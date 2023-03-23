$(document).ready(function () {
  // Нажатие на бургер
  $(".burger__header").click(function (event) {
    $(".burger__header,.header__group").toggleClass("show");
  });
  // Маска для номера
  const phoneInput = document.querySelector(".phone");
  $(".phone").mask("+375 (99) 99-99-999"), { placeholder: "mm/dd/yyyy" };
});
// Отправка формы на js
$("#send_button").click(function (e) {
  var form = $(this.closest("form"));
  var field = [];
  form.find("input.required").each(function () {
    field.push("input.required");
    var value = $(this).val(),
      line = $(this);
    for (var i = 0; i < field.length; i++) {
      if (!value) {
        line.addClass("feedback__group-required");
        setTimeout(
          function () {
            line.removeClass("feedback__group-required");
          }.bind(this),
          2000
        );
        event.preventDefault();
      }
    }
  });
  // console.log( $( "input[name~='name']" ).val()),
  $.ajax({
    type: "POST",
    url: "saindmail.php", //Не уверен это не точно
    data: {
      name: $("input[name~='name']").val(),
      phone: $(".phone").val(),
      city: $("input[name~='city']").val(),
    },
    success: function (data) {
      console.log(data.data);
    },
  });
});
//
