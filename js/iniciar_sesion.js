function InicioSecion (){
    let email = $('#email').val();
    let password = $('#password').val();

    console.log(email + password);

 if (email == null || email == undefined || email ==''){
    alert('Ingrese su correo');
 }
 if (password == null || password == undefined || password == ''){
    alert('Ingrese su contraseña');
    }
    $.ajax({
        url: `../app/inicio_sesion.php?email=${email}&password=${password}`,
        
        dataType: 'text',
        success: function (json) {
            
            // $('#titulo').text('Correo ya registrado');              
            location.href = '../vistas2/index_.html';
        },
        error: function (xhr, status) {
            // console.log('Disculpe, existió un problema');
            // $('#titulo').html('Correo Registrado Correctamente');
            // location.href = '../vistas/index.html';
     
     
        },
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log('Consulta echa');
           }
     });
}


