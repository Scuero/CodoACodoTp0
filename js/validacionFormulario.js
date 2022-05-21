function validar(){

    let formulario=document.formulario;
    let expArroba = /@/;
    let expDotCom = /.com/;

    if (formulario.nombre.value == ""){
        alert("el campo nombre esta vacio");
        return false;
    }

    if (formulario.nombre.value.length < 6){
        alert("nombre invalido");
        return false;
    }

    if (formulario.emailFormulario.value == ""){
        alert("el campo email esta vacio");
        return false;
    }

    if ( expDotCom.test(formulario.emailFormulario.value) == false || expArroba.test(formulario.emailFormulario.value) == false ){
        alert("el email es invalido");
        return false;
    }

    if ( 18 > formulario.edad.value || formulario.edad.value > 99 ){
        alert("edad invalida");
        return false;
    }

    if (formulario.dropdown.value ==""){
            alert("seleccione una ocupacion");
            return false;
    }

    if ( ningunGeneroCheckeado() ){
        alert("selecione un genero");
        return false;
    }   

    function ningunGeneroCheckeado(){
        for ( let i=0; i < formulario.genero.length; i++ ){
            if (formulario.genero[i].checked){
                return false;
            }
        }
        return true;
    }

    if ( ningunProductoAdquirido() ){
        alert("selecione un producto");
        return false;
    }   

    function ningunProductoAdquirido(){
        for ( let i=0; i < formulario.productos.length; i++ ){
            if (formulario.productos[i].checked){
                return false;
            }
        }
        return true;
    }    
}