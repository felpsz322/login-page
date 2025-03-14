 function validarNome(event) {
    let nome = event.target.value;
    nome = nome.replace(/[^A-Za-z\s]/g, '');
    event.target.value = nome;
  }

  function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
  }
  
  if (validarEmail(email)) {
    console.log("Email válido!");
  } else {
    console.log("Email inválido. Certifique-se de que o email tenha '@'.");
  }
function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, '');
    
    if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    if (cpf.length > 6) cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (cpf.length > 9) cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    campo.value = cpf;
}

function validarSenha() {
    const senha = document.getElementById('senha').value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const erro = document.getElementById('erro');


    if (!regex.test(senha)) {
      erro.style.display = 'block'; 
    } else {
      erro.style.display = 'none'; 
    }
  }

  function redirecionar() {
    window.location.href = "sucesso_tela.html";
  }
  function voltar() {
    window.location.href = "index.html";
  }

