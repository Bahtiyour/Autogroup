$(document).ready(function () {
  // Нажатие на бургер
  $(".burger__header").click(function (event) {
    $(".burger__header,.header__group").toggleClass("show");
  });
  // Маска для номера
  $(".phone").mask("+375 (99) 99-99-999");
  // Проверка на заполненность
  $("#send_button").click(function (e) {
    let form = this.closest("form");
    var field = [];
    $(form)
      .find("input.required")
      .each(function () {
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
    // Отправка формы
    let error = (error);

    if error( = 0 ){
      let formData = new FormData(form)
      console.log()
      $.ajax({
        url: "/php/saindmail.php", //Не уверен это не точно
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
          console.log(data.data);
        },
      });
    };
  });
  //
});
