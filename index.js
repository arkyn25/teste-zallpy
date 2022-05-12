window.onload = function(){
  id('telefone').onkeyup = function(){
    mascara( this, mtel );
  }
}

function mascaraData(campo, valor){
  let mydata = '';
  mydata = mydata + valor;
  if (mydata.length == 2){
    mydata = mydata + '/';
    campo.value = mydata;
  }
  if (mydata.length == 5){
    mydata = mydata + '/';
    campo.value = mydata;
  }
}

function checkEmail() {
  const email = document.getElementById('email');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}
checkEmail();

function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}

function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el){
return document.getElementById(el);
}

const submitButton = document.getElementById('submit-button');
function renderForm(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index].value;
    if (userInput.length == 0) {
      alert('Preencha todos os campos');
      return false;
    }
    console.log(userInput)
  }
}

const clearButton = document.getElementById('clear');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('descricao');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

submitButton.addEventListener('click', renderForm);
clearButton.addEventListener('click', clearFields);