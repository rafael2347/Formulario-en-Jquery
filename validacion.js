const formulario = document.getElementById('formulario');/*Accedemos al formulario */
const inputs = document.querySelectorAll('#formulario input');/*Almacenamos todos los inputs de nuestro formulario y como es in id pues ponemos # */


jQuery(document).ready(function() {
	// se une el envío de formularios y campos para el motor de validación
	jQuery("#formulario").validationEngine();
  });




const expresiones = {/*Expresiones regulares*/
	segundonombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contrasena: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	postal: /^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/, //Código Postal
}

const campos = {/*Estos objetos representan si un campo está valido o no*/
	segundonombre: false,
	nombre: false,
	contrasena: false,
	correo: false,
	postal: false
}

const validarFormulario = (e) => {/*Comprueba los campos con las expresiones regulares */
	switch (e.target.name) {
		case "segundonombre":
			validarCampo(expresiones.segundonombre, e.target, 'segundonombre');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "contrasena":
			validarCampo(expresiones.contrasena, e.target, 'contrasena');
			validarPassword2();
		break;
		case "contrasena2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "postal":
			validarCampo(expresiones.postal, e.target, 'postal');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {/*Esta función nos va a comprobar que todo sea correcto y nos va a comprobar las expresiones, los inputs y los campos */
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {/*Aquí vamos a comprobar de la contraseña que hemos puesto primero con la segunda */
	const inputPassword1 = document.getElementById('contrasena');
	const inputPassword2 = document.getElementById('contrasena2');

	if(inputPassword1.value !== inputPassword2.value){/*Comprueba la contraseña para ver si es igual*/
		document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['contraseña'] = true;
	}
}

inputs.forEach((input) => {/*Comprueba que cada vez que escribamos una letra o clicamos fuera de la casilla que estemos escribiendo nos lo comprobará y validará el formulario  */
	input.addEventListener('keyup', validarFormulario);/*keyup significa que cuando el usuario presiona una letra se va a estar ejecutando un código y llama al código de arriba */
	input.addEventListener('blur', validarFormulario);/*Comprueba la validación si clicamos fuera de la casilla que estemos escribiendo*/
});







formulario.addEventListener('submit', (e) => {/*Comprueba que si los campos está vacios no envíe la información */
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.segundonombre && campos.nombre && campos.contrasena && campos.correo && campos.postal && terminos.checked ){/*Si todos estos camposestá rellenos nos enviará y reseteará el formulario */
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {/*Esto es para que el mensajito que nos sale abajo se borre despues de haber pasadoo 5 segundos */
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);/*Tiempo que queremos que la línea de código de arriba se ejecute*/

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {/*Esto lo ponemos para que el icono de correcto se borre despues de enviar el formulario */
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');/*Esto es para que si el usuario no tiene nada pues aprarezca el mensaje de error */
	}
});