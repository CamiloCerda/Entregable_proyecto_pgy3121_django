$(document).ready(function(){
    $(".formularioContacto").submit(function(){
        if($("#checkboxTerminos").prop('checked')){
            $("#errorTerminos").css("display","none");
            //validar nombre
            if($("#nombreFormu").val().length == 0) {
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
                $("#nombreFormu").addClass('fondoRojo');
                $("#errorNombre").css("display","block");
            }
            //validar apellido
            else if($("#apellidoFormu").val().length == 0) {
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
                $("#apellidoFormu").addClass('fondoRojo');
                $("#errorApellido").css("display","block");
            }
            //validar mail
            else if(validarMail()){
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
                $("#mailFormu").addClass('fondoRojo');
                $("#errorEmail").css("display","block");
            }
            //validar texto
            else if($("#mensajeFormu").val().length < 50) {
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
                $("#mensajeFormu").addClass('fondoRojo');
                $("#errorMensaje").css("display","block");
            }
            //validar rut
            else if(validarRut()){
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
            }
            //validar region 
            else if($("#region option:selected").val() == '0'){
                event.preventDefault();
                $(".alertPreventDefault").css("display","block");
                $("#region").addClass('fondoRojo');
                $("#errorRegion").css("display","block");
            }
        }else {
            event.preventDefault();
            $(".alertPreventDefault").css("display","block");
            $("#errorTerminos").css("display","block");
        }
    });
    //checkbox terminos y condiciones
    $("#checkboxTerminos").click(function(){
        if($("#checkboxTerminos").prop('checked')){
            $("#errorTerminos").css("display","none");
        }
    });
    //Reaccion para el nombre
    $("#nombreFormu").keyup(function(){
        if($(this).val().length > 0){
            $(this).removeClass('fondoRojo');
            $("#errorNombre").css("display","none");
        }else {
            $(this).addClass('fondoRojo');
            $("#errorNombre").css("display","block");
        }
    });
   
    //Reaccion para el apellido
    $("#apellidoFormu").keyup(function(){
        if($(this).val().length > 0){
            $(this).removeClass('fondoRojo');
            $("#errorApellido").css("display","none");
        }else {
            $(this).addClass('fondoRojo');
            $("#errorApellido").css("display","block");
        }
    });
    //validar mail
    function validarMail(){
        var partesCorreo = $("#mailFormu").val().split("@");
        if(partesCorreo.length != 2){
            return true;
        }else {
            var dominio = partesCorreo[1];
            var partesDominio = partesCorreo[1].split('.');

            if (partesDominio.length != 2){
                return true;
            }else {
                return false;
            }
        }
    }
    //Reaccion para el email
    $("#mailFormu").keyup(function(){
        var partesCorreo = $("#mailFormu").val().split("@");
        if(partesCorreo.length != 2){
            $(this).addClass('fondoRojo');
            $("#errorEmail").css("display","block");

        }else {
            var dominio = partesCorreo[1];
            var partesDominio = partesCorreo[1].split('.');

            if (partesDominio.length != 2){
                $(this).addClass('fondoRojo');
                $("#errorEmail").css("display","block");
            }else {
        
                $(this).removeClass('fondoRojo');
                $("#errorEmail").css("display","none");
            }
        }
    });
    //Reaccion para el mensaje enviado
    $("#mensajeFormu").keyup(function(){
        if($(this).val().length >= 50){
            $(this).removeClass('fondoRojo');
            $("#errorMensaje").css("display","none");
        }else {
            $(this).addClass('fondoRojo');
            $("#errorMensaje").css("display","block");
        }
    });
    
    //eliminar caracteres no deseados del input rut
    function limpiar(aux){
        var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                      'ñ','o','p','q','r','s','t','u','v','W','x','y','z'];
        
        var caracteres = ['/','*','.','+','-',',',';',':','(',')','&','%','$'
                          ,'|','!','"','#','°','?','¿','¡',' ',"'"];

        aux = aux.toLowerCase();
        for(let i = 0; i < letras.length; i++){
            aux = aux.replaceAll(letras[i], '');
        }
        for(let i = 0; i < caracteres.length; i++){
            aux = aux.replaceAll(caracteres[i], '');
        }
        return aux;
    }
    //funcion validar rut
    function validarRut(){
        var rut = "";
        var aux = "";
        
        if ($('input[name=rutPasap]:checked', '.formularioContacto').val() == 'rut') {
            aux = $("#rutPasaporte").val();
            for (let i = aux.length; i > 0; i--) {
                rut += aux[i-1];
            }
            var suma = 0;
            var factor = 2;

            for(let i = 1; i < rut.length; i++){
                suma += parseInt(rut[i])*factor;
                factor += 1;
                if (factor == 8){
                    factor = 2;
                }
            }
            var restodiv = parseInt(suma / 11);
            var sustraendo = restodiv*11;
            var suma = suma - sustraendo;
            var digitover = 11 - suma;
            if (digitover == 11) {
                digitover = 0;
            }
            else if (digitover == 10) {
                digitover = 'k';
            }
            if (digitover == aux[aux.length-1]) {
                $("#errorRut").css("display","none");
                $("#rutPasaporte").removeClass('fondoRojo');
                return false;
            }else {
                $("#errorRut").css("display","block");
                $("#rutPasaporte").addClass('fondoRojo');
                return true;
            }
                      
        }else {
            $("#errorRut").css("display","none");
            $("#rutPasaporte").removeClass('fondoRojo');
            return false;
        }
    }
    //Reaccion para el input de rut o pasaporte
    $("#rutPasaporte").keyup(function(){
        var rut = "";
        var aux = "";
        
        if ($('input[name=rutPasap]:checked', '.formularioContacto').val() == 'rut') {

            aux = $(this).val();
            aux = limpiar(aux);
            $(this).val(aux);

            for (let i = aux.length; i > 0; i--) {
                rut += aux[i-1];
            }
            var suma = 0;
            var factor = 2;

            for(let i = 1; i < rut.length; i++){
                suma += parseInt(rut[i])*factor;
                factor += 1;
                if (factor == 8){
                    factor = 2;
                }
            }
            var restodiv = parseInt(suma / 11);
            var sustraendo = restodiv*11;
            var suma = suma - sustraendo;
            var digitover = 11 - suma;
            if (digitover == 11) {
                digitover = 0;
            }
            else if (digitover == 10) {
                digitover = 'k';
            }
            if (digitover == aux[aux.length-1]) {
                $("#errorRut").css("display","none");
                $(this).removeClass('fondoRojo');
            }else {
                $("#errorRut").css("display","block");
                $(this).addClass('fondoRojo');
            }
                      
        }else {
            $("#errorRut").css("display","none");
            $(this).removeClass('fondoRojo');
        }
    });
    $('#region').change(function(){
        if($("#region option:selected").val() == '0'){
            $("#region").addClass('fondoRojo');
            $("#errorRegion").css("display","block");
        }else {
            $("#region").removeClass('fondoRojo');
            $("#errorRegion").css("display","none");
        }
    });
    $("#pasaporte").click(function(){
        $("#errorRut").css("display","none");
        $("#rutPasaporte").removeClass('fondoRojo');
    });

    $("#rut").click(function(){
        var vr = validarRut();
    });
});