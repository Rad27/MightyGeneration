//Funciones
function validar(){
	//validar el nombre
	//si esta vacio
	if (document.fvalida.user.value.length==0){
		alert("Tiene que escribir un usuario");
		document.fvalida.user.focus();
		return false;
	}
	if (document.fvalida.password.value.length==0){
		alert("Tiene que escribir una contraseña");
		document.fvalida.password.focus();
		return false;
	}
	if(document.fvalida.password.value.length<8){
		alert("Debe ser mayor o igual a 8 caracteres");
		document.fvalida.password.focus();
		return false;
	}
	if(document.fvalida.user.value=="ruth" && document.fvalida.password.value=="87654321"){
		alert("Tienes acceso");
		return true;
	} else{
		alert("Usuario o contraseña incorrecta. Intenta de nuevo");
		return false;
	}
}