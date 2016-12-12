define( function(){
    $( '#registerForm' ).click(function(){
        console.log('submit');
        debugger;
        var data = {
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
        console.log(data);
        $.ajax({
            url: '/register',
            type: 'post',
            dataType: 'json',
            data: data,
            success: function( ret ){
                console.log( ret );
            }
        });
        return false;
    });
});
