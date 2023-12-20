const resultado = document.querySelector('.velocidad')
const bajar = document.querySelector('.bajar')
const subir = document.querySelector('.subir')
const circulo = document.querySelector('.circulo')
const resetear = document.querySelector('.resetear')

function incrementar () {
  const contador = parseInt(resultado.innerHTML)
  resultado.innerHTML = contador + 1
}

bajar.onclick = function () {
  const contador = parseInt(resultado.innerHTML)
  resultado.innerHTML = contador - 1
}

/* bajar.onclick = function () {
  resultado.style.color = 'red'
} */

resetear.addEventListener('click', () => {
  resultado.innerHTML = 0
})

resetear.addEventListener('click', function () {
  resultado.style.color = 'red'
})

const aumentarTamanio = () => {
  resultado.style.fontSize = '30px'
}

resetear.addEventListener('click', aumentarTamanio)

let posY = 0
let posX = 0

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      posY -= resultado.innerHTML
      circulo.style.top = posY + 'px'
      break
    case 'ArrowDown':
      posY += parseInt(resultado.innerHTML)
      circulo.style.top = posY + 'px'
      break
    case 'ArrowLeft':
      posX -= parseInt(resultado.innerHTML)
      circulo.style.left = posX + 'px'
      break
    case 'ArrowRight':
      posX += parseInt(resultado.innerHTML)
      circulo.style.left = posX + 'px'
      break
  }
})

const objeto = {
  nombre: 'fabio',
  apellido: 'argañaraz',
  saludar: function () {
    console.log('hola')
  }
}
console.log(JSON.stringify(objeto))
