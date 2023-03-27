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

    let formData = new FormData(form);
    console.log();

    const form_button = document.getElementById("send_button");
    form_button.addEventListener("click", formSend);

    function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);
      let formDate = new FormData(form);
      let files = $("#formImage").prop("files");
      for (let i = 0; i < files.length; i++) {
        formDate.append("files[]", files[i]);
      }
      if (error == 0) {
        $.ajax({
          url: "/php/saindmail.php",
          method: "POST",
          data: formDate,
          processData: false,
          contentType: false,
          cache: false,
          dataType: "html",
          beforeSend: function () {},
          success: function (data) {
            console.log(data.data);
          },
        });
      }
    }

    function formValidate(form) {
      let error = 0;

      if (input.classList.contains("phone")) {
        if (telTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }

    for (var i = 0; i < button.length; i++) {
      button[i].addEventListener("click", function () {
        if (input.value !== "") {
          console.log(form.form);
        } else {
          alert("поля пустые");
        }
      });
    }
  });
});
