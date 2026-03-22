// Funcionalidade 1: Troca de tema claro/escuro
let botaoTema = document.getElementById('btn-tema');

botaoTema.onclick = function() {
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão
    if (document.body.classList.contains('dark-mode')) {
        botaoTema.innerHTML = 'Tema Claro';
    } else {
        botaoTema.innerHTML = 'Tema Escuro';
    }
};

// Funcionalidade 2: Validação do formulário de contato
let formulario = document.getElementById('form-contato');

formulario.onsubmit = function(evento) {
    evento.preventDefault(); // Evita recarregar a página ao enviar

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão vazios
    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Verifica se o email é valido (precisa ter @ e ponto)
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Por favor, digite um e-mail válido com @ e ponto.");
        return false;
    }

    // Simula o envio
    alert("Mensagem enviada com sucesso!");
    formulario.reset(); // Limpa os campos após o envio
};