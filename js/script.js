$(window).load(function() {
  $('.send').click(function(e){
    e.preventDefault();

    // setting variables + regex
    var error = 0;
    var check_name = /^[A-Za-z0-9 ]{3,20}$/;
    var check_message = /^[A-Za-z0-9 ]{3,300}$/;
    var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    var name = $('.name').val();
    var email = $('.email').val();
    var message = $('.message').val();

    var selectToValidate = $('.validate');
    selectToValidate.each(function(index){
      console.log($(this).val());
    });

    if(!check_name.test(name)){
       $('.error[data-contact="name"]').addClass('show');
       error = 1;
    }else{
      $('.error[data-contact="name"]').removeClass('show');
    }

    if(error == 0){
      console.log("The message has been sent!");
    }

  });
});
