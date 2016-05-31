$(window).load(function() {
    $('.send').click(function(e) {
        e.preventDefault();

        // setting variables + regex
        var error = 0;
        var regexObj = {
            check_name: /^[A-Za-z0-9 ]{3,20}$/,
            check_message: /^[A-Za-z0-9,.!?\s]{10,300}$/,
            check_email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }

        var validateObj = {
            name: $('.name').val(),
            email: $('.email').val(),
            message: $('.message').val()
        }

        var selectToValidate = $('.validate');
        selectToValidate.each(function(index) {
            var theInputValue = $(this).val();
            var typeOfData = $(this).data("input");
            var propertyName = "check_" + typeOfData;

            if (!regexObj[propertyName].test(validateObj[typeOfData])) {
                $('.error[data-contact="' + typeOfData + '"]').addClass('show');
                error = 1;
            } else {
                $('.error[data-contact="' + typeOfData + '"]').removeClass('show');
            }
        });

        if (error == 0) {
            console.log("The message has been sent!");
            $.post("contact.php", {name: validateObj.email, email: validateObj.email, message: validateObj.message}, function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
        }

    });
});
