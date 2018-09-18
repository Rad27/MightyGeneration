 $(document).ready(main);
 var contador = 1;
 function main(){
 	$('.menu_bar').click(function(){
 		//$('nav').toggle(); mas directo el menu
 		if(contador == 1){
 			$('nav').animate({
 				left: '0'
 			});
 			contador = 0;
 		} else {
 			contador = 1;
 			$('nav').animate({
 				left: '-100%'
 			});
 		}
 	});
 };
// $(document).ready(main);
//  function main(){
// 	$('.menu_bar').click(function(){
// 		//console.log('El boton esta funcionando');
// 		var menu = document.getElementsByClassName('desaparece');
// 		for(var i = 0; i < menu.length; i++){
// 			menu(i).classList.toggle('desaparece');
// 		 	$('nav').animate({
// 		 		left: '-100%'
// 		 	});
// 		 };
// 	});
//  };
