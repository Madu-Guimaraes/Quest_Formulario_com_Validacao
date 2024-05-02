const formularioElementos = document.querySelectorAll('.formulario input');
const botaoDeEnviarFormulario = document.querySelector('.btn');

    formularioElementos.forEach(input => {
    input.addEventListener('input', function(){
        if (input.value !== "") {
            input.classList.add("preenchido");
        } else {
            input.classList.remove("preenchido");
        }
    });
});

botaoDeEnviarFormulario.addEventListener('click', function() {
    formularioElementos.forEach(input => {
        
        if(input.value === "") {
            input.nextElementSibling.style.display = 'inline';
            input.classList.add("nao-preenchido");
            input.classList.add("mensagem-campo-obrigatorio");
        }else {
            input.nextElementSibling.style.display = 'none';
            input.classList.remove("nao-preenchido");
            input.classList.remove("mensagem-campo-obrigatorio");
        }

    });
});
