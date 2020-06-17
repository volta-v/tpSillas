window.onload = function() {
	const botonMas = document.querySelector('.botonMas')
	const botonMenos = document.querySelector('.botonMenos')
	cantidadDeSillas = 0

	botonMas.onclick = function () {
		agregarSilla() 
	}

	botonMenos.onclick = function () {
		borrarSilla()
	}

	document.addEventListener('keyup', function(event) {
    if (event.key === '+') {
    	agregarSilla()
		} 
	})

	document.addEventListener('keyup', function(event){
    if (event.key === '-') {
      borrarSilla()
		}
	})

}