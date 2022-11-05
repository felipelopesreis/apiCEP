const formConsultarCep =  document.querySelector('#consultarCep')
const inputCep = formConsultarCep.inputCep
const divDados = ducument.querySelector('#dados')

formConsultarCep.addEventListener('submit', function(event){
  event.preventDefault() //anula o comportamento padrao de envio do formulario
  ConsultarCep(inputCep.value)
})

async function ConsultarCep(cep){
  let response = await fetch('https://viacep.com.br/ws/${cep}/json/')
  let dadosCep = await response.json()
  divDados.innerHTML = `
  <p>Endereço: ${dadosCep.logradouro} </p>
  <p>Localidade: ${dadosCep.localidade} </p>
  `
}

ConsultarCep()
