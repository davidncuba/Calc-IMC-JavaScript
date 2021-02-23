
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado('Peso Invalido', false)
    return
  }
  if (!altura) {
    setResult('Altura Invalido', false)
    return
  }
  const imc = getImc(peso, altura)
  const level = getLevelImc(imc)
  const msg = `Your IMC is ${imc} and your classification is ${level}.`
  setResult(msg, true)
})

function getLevelImc (imc) {
  const nivel = ['Underweight', 'Normal Weight', 'Over Weight',
    'Grade 1 Obesity', 'Grade 2 Obesity', 'Grade 3 Obesity']
  if (imc > 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}
function getImc (peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function criaP (className) {
  const p = document.createElement('p')
  return p
}
function setResult (msg, isValid) {
  const resultado = document.querySelector('#resultado')
  const p = criaP()
  if (isValid) {
    p.classList.add('sucess')
  } else {
    p.classList.add('bad')
  }
  resultado.innerHTML = ''
  p.innerHTML = msg
  resultado.appendChild(p)
}
