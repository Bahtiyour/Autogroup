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
    console.log($("input[name~='name']").val());
    // Отправка формы
    // const forms = document.getElementById("form");
    // form.addEventListener("submit", formSend);

    // async function formSend(e){
    //   let FormData = new FormData(form)
    //   e.preventDefault();
    //   let form = this.closest('form')
    //   let error = formValidate(form);

    //   if(error === 0){
    //     $.ajax({
    //       url: "/saindmail.php",  // Куда отправить запрос
    //       method: "post",
    //       processData: false,
    //       contentType: false,
    //       data: FormData,
    //       success: function (data) {
    //           let info = JSON.parse(data);

    //       }
    //   })
    //   }else{
    //     alert('Заполните обязательные поля!');
    //   }
    // }

    const form_button = document.getElementById("send_button"); // ищет по всему документу эту кнопку
    form_button.addEventListener("click", formSend); // при клике на нёё происходит эта фуннкция

    function formSend(e) {
      //пописываю функцию которую обявил с верху при клике на кнопку
      e.preventDefault(); // запрещает отправку формы
      let form = this.closest("form");

      let error = formValidate(form); // обявляю переменную ерор куда передаю сам обьект формы
      let formDate = new FormData(form); // c gjvjo. formdanf выдекевает все данные полей

      if (error == 0) {
        // tckb ерор == 0 то происходит следующее

        $.ajax({
          url: "/sandmail.php", // Куда отправить запрос
          method: "post",
          processData: false,
          contentType: false,
          data: formDate,
          success: function (data) {
            let info = JSON.parse(data);
          },
        });

        form.reset();
        formPreview.innerHTML = "";
        let text = "";
        let selections = document.querySelectorAll(".select");
        selections.forEach(function (element) {
          text = element.querySelector(".select__item").innerText;
          currentText = element.querySelector(".select__current"); // текст радителя
          currentText.innerText = text;
        });

        alert("da");
      } else {
        alert("no");
      }
    }

    function formValidate(form) {
      let error = 0;
      let formRequired = document.querySelector(".required");
      for (let index = 0; index < formRequired.length; idex++) {
        const input = formRequired[index];
        formRemoveError(input);

        if (input.classList.contains(".email")) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (input.value === "") {
            formAddError(input);
            error++;
          }
        }
        return error;
      }
      function formAddError(input) {
        input.parentElement.classList.add(".required");
        input.classList.add(".error");
      }
      function formRemoveError(input) {
        input.parentElement.classList.remove(".required");
        input.classList.remove(".error");
      }
      function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
          input.value
        );
      }
    }
  });
});
