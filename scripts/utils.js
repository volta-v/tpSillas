function buscarEspacio(numeroDeSillas) {
	if (cantidadDeSillas <= 2) {
		const lugar = document.querySelector('.filaArriba')
		const clase = 'sillaArriba'
		return [lugar, clase]
	} 
	if (cantidadDeSillas === 3) {
		const lugar = document.querySelector('.columnaDerecha')
		const clase = 'sillaDerecha'
		return [lugar, clase]
	}
	if (cantidadDeSillas > 3 && cantidadDeSillas < 7) {
		const lugar = document.querySelector('.filaAbajo')
		const clase = 'sillaAbajo'
		return [lugar, clase]
	}
	if (cantidadDeSillas === 7) {
		const lugar = document.querySelector('.columnaIzquierda')
		const clase = 'sillaIzquierda'
		return [lugar, clase]
	}
}

function agregarSilla() {
	if (cantidadDeSillas <= 7){
		let propiedades = buscarEspacio(cantidadDeSillas)
	 	const silla = document.createElement('img')
	  silla.src="img/silla.png"
	  silla.classList.add(propiedades[1])
	  propiedades[0].append(silla)
	  cantidadDeSillas = cantidadDeSillas + 1	 
	}
}

function borrarSilla() {
	if (cantidadDeSillas > 0) {
			cantidadDeSillas = cantidadDeSillas - 1
			let propiedades = buscarEspacio(cantidadDeSillas)
			propiedades[0].removeChild(propiedades[0].lastChild)
		}	 
}
