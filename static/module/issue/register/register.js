$( function(){
    $('#registerForm').click(function(){
        console.log('submit');
        var data = {
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val()
        };
        console.log(data);
        $.post('/register1', data, function( ret ){
            console.log( ret );
        });
        /*$.ajax({
            url: '/register',
            type: 'post',
            dataType: 'json',
            data: data,
            success: function( ret ){
                console.log( ret );
            }
        });*/
        return false;
    });
});
