$("#sendmail").on("click", function () {
    var name = $("#name").val().trim();
    var mail = $("#mail").val().trim();
    var phone = $("#phone").val().trim();
    var mesag = $("#mesag").val().trim();

    if(name == ""){
       $("#erorMesag").text("Введіть імя");
       return false;
    }else if (mail == ""){
        $("#erorMesag").text("Введіть email");
        return false;
    }else if (phone == ""){
        $("#erorMesag").text("Введіть телефон");
        return false;
    }else if(mesag.length < 5){
        $("#erorMesag").text("Напишіть повідомлення");
        return false;
    }
    $("#erorMesag").text("");

    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'mail': mail, 'phone': phone, 'mesag': mesag},
        dataType: 'html',
        beforeSend: function () {
           $("#sendmail").prop("disabled", true);
        },
        success: function (data) {
            if (!data)
           alert("Повідомлення не відправлено, заповніть коректно усі поля");
            else
                $('#feedback').trigger("reset");
           $("#sendmail").prop("disabled", false);
        }
    });

});