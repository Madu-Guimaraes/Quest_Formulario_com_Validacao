# Formulário com Validação 📄✔️

![imagem-final-formulario-com-validacao](https://github.com/Madu-Guimaraes/Quest_Formulario_com_Validacao/assets/146151781/b345b5fe-3e5d-49ea-b4a6-c27edd4bfc66)

## Visão Geral 💡

É um  exercício simples onde o objetivo é que se o usuário escrever no ```input``` e clicar no ```button``` de enviar a borda dos ```input``` ficará verde, caso contrário a borda ficará vermelha e aparecerá uma mensagem informando quais campos não foram preenchidos e se eles são obrigatórios, no caso desse exercício todos os ```input``` são obrigatórios. 

Esse exercício foi desenvolvido com o intuito de treinar minhas habilidades de HTML, CSS e JavaScript.

## Tecnologias Usadas 📌

- HTML5
- CSS
- JavaScript

## ⚠️ Problemas enfrentados -> Criação da lógica no JavaScripit

### Problema 1:
Como acessar a tag de ```span``` que estava abaixo do ```input``` com a mensagem "campo obrigatório".

* Como solucionar: Usando o metodo `nextElementSibling` irá retornar o próximo elemento que vem após um elemento no DOM, que nesse exercício foi o `input`, depois é só acessar o estilo CSS e colocar a propriedade e o valor dependendo do comportamento para exibição desejada.

Segue código abaixo:

```javascript
....
input.nextElementSibling.style.display = 'inline';
     input.classList.add("nao-preenchido");
     input.classList.add("mensagem-campo-obrigatorio");
....
```

## Resultado Final ✨

![formulario-com-validacao](https://github.com/Madu-Guimaraes/Quest_Formulario_com_Validacao/assets/146151781/97d56b7f-5657-4d81-a911-b5ca871f13cc)

## Link para o deploy 🌐

[Fomulário com Validação](https://madu-guimaraes.github.io/Quest_Formulario_com_Validacao/)

## Design Responsivo 📱🖥️

![formulario-com-validacao-responsivo](https://github.com/Madu-Guimaraes/Quest_Formulario_com_Validacao/assets/146151781/515bf534-0a24-4c16-8f4c-3c8fd5186f0f)
