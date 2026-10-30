 // 1. Selecionar o formulário pelo ID
const formulario = document.querySelector("#formularioAcademico");
console.log(formulario);

// 2. Selecionar o botão pelo ID
const btn = document.getElementById("btn");

// 3. Selecionar elementos pela classe
const btnComClasse = document.getElementsByClassName("botão");
console.log(btnComClasse);

// 4. Selecionar um elemento pela classe
const paragrafo = document.querySelector(".texto");
console.log(paragrafo);

// 5. Selecionar um elemento pelo ID
const botaoDenovo = document.querySelector("#btn");
console.log(botaoDenovo);

// 6. Adicionar um evento de clique ao botão
btn.addEventListener("click", function () {

    // Verificar se os campos obrigatórios foram preenchidos
    if (!formulario.reportValidity()) {
        return;
    }

    // Capturar os valores digitados
    const nome = document.getElementById("nome").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);

    // Verificar se as notas estão entre 0 e 10
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10
    ) {
        alert("As notas devem estar entre 0 e 10.");
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2) / 2;

    // Mostrar o resultado na tela
    document.getElementById("resultado").textContent =
        nome + " - Média: " + media.toFixed(2);

});