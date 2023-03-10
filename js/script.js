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
  // console.log( $( "input[name~='name']" ).val()),
  $.ajax({
    type: "POST",
    url: "saindmail.php", //Не уверен это не точно
    data: {
      name: $("input[name~='name']").val(),
      phone:  $(".phone").val(),
      city: $("input[name~='city']").val(),
    },
    success: function (data) {
      console.log(data.data);
    },
  });
  // Проверка на заполнение
  $(document).ready(function(){
    $("#demoForm").validate();
  });
  $.validator.messages.required = "Заполните поле!";
  $.validator.messages.email = "Неверный формат email";
  $.validator.messages.url = "Неверный формат url,";
});
