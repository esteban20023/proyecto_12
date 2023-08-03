function registro (){
    let nombre = $('#nombre').val();
    let tipoDocumento = $('#tipoDocumento').val();
    let email = $('#email').val();
    let direccion = $('#direccion').val();
    let password = $('#password').val();
    let apellido = $('#apellido').val();
    let documento =$('#documento').val();
    let telefono =$('#telefono').val();
    let genero =$('#genero').val();
    let Ciudad = 1
    // console.log('abuela');
    // console.log(nombre + tipoDocumento + email + direccion + password + apellido + documento + telefono + genero + confirmarContraseña);

    if (nombre == null || nombre == undefined || nombre == ''){
        alert("Ingrese el Nombre");
        return false;
    }
    if (tipoDocumento == null || tipoDocumento == undefined || tipoDocumento == ''){
        alert("Ingrese su tipo de documento");
        return false;
    }
    if (email == null || email == undefined || email == ''){
        alert("Ingrese su Correo Electronico");
        return false;
    }
    if (direccion == null || direccion == undefined || direccion == ''){
        alert("Ingrese la Dirección");
        return false;
    }
    if (password == null || password == undefined || password == ''){
        alert("Ingrese una Contraseña");
        return false;
    }
    if (apellido == null || apellido == undefined || apellido == ''){
        alert("Ingrese Apellidos");
        return false;
    }
    if (telefono == null || telefono == undefined || telefono == ''){
        alert("Ingrese Teléfono");
        return false;
    }
    if (genero == null || genero == undefined || genero ==''){
        alert("Seleccione Género");
        return false;
    }
    if (documento == null || documento == undefined || documento == ''){
        alert("Seleccione el tipo de Documento");
        return false;
    }


    $.ajax({
        url: `../app/registro.php?nombre=${nombre}&apellido=${apellido}&telefono=${telefono}&email=${email}&direccion=${direccion}&ciudad=${ciudad}&tipoDocumento=${tipoDocumento}&documento=${documento}&genero=${genero}&password=${password}`,
        type :'get',
        dataType: 'json',
        success: function (json) {       
           console.log(json);
           if(json==0){
            alert('El usuario ya se encuentra registrado');
           }else{
            alert('Usuario registrado con exito');
            location.href = '../vistas/login.html';
           }
        },
        error: function (xhr, status) {
            // console.log('Disculpe, existió un problema');
            // $('#titulo').html('Correo Registrado Correctamente');
            // location.href = '../vistas/login.html';
    
    
        },
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            //console.log('Consulta hecha');
            }
        });
}

