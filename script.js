/* Mascaras */
$(document).ready(function () {
  $('#Nascimento').mask('00/00/0000', { reverse: true });
  $('#CEP').mask('00000-000', { reverse: true });
});

const consomeCEP = async () => {
  let CEP = document.getElementById('CEP').value;
  let url = `http://viacep.com.br/ws/${CEP}/json/`;
  let dados = await fetch(url);
  let endereco = await dados.json();

  document.getElementById('estado').value = endereco.uf
  document.getElementById('bairro').value = endereco.bairro
  document.getElementById('rua').value = endereco.logradouro
  document.getElementById('cidade').value = endereco.localidade
}

const erroCEP = () => {
  let CEP = document.getElementById('CEP').value;

  if (CEP.length < 9 || CEP === "") {

    document.getElementById('estado').value = "Cep indefinido"
    document.getElementById('bairro').value = "Cep indefinido"
    document.getElementById('rua').value = "Cep indefinido"
    document.getElementById('cidade').value = "Cep indefinido"

  }

}

const limpaendereco = async () => {
  document.getElementById('estado').value = ""
  document.getElementById('bairro').value = ""
  document.getElementById('rua').value = ""
  document.getElementById('cidade').value = ""

}

/*limpar campos endereço*/
document.getElementById('CEP')
addEventListener('input', limpaendereco);

/*buscar endereço*/
document.getElementById('CEP')
addEventListener('focusout', consomeCEP);

/*buscar endereço*/
document.getElementById('CEP')
addEventListener('focusout', erroCEP);