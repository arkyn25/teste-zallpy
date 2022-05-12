
const address = document.getElementById('cep');
  address.addEventListener('blur', () => {
    let Cep = document.getElementById('cep').value;
    fetch(`https://api.postmon.com.br/v1/cep/${Cep}`).then(response => {
      response.json().then(data => {
       
        document.getElementById('street').value = data.logradouro;
        document.getElementById('neighborhood').value = data.bairro;
        document.getElementById('city').value = data.cidade;
        document.getElementById('state').value = data.estado_info.nome;
        console.log(data)
      })
    }
    ).catch(error => {
      console.log(error);
    });
  })
