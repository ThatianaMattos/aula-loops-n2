# aula-loops-n2

Aula Loops N2

Este projeto foi criado para praticar a estrutura de repetição em JavaScript, utilizando for, while e do while.
O objetivo da aula foi entender como loops funcionam e aplicar um exemplo prático somando os números de 1 a 10 e exibindo o resultado na tela.

Tecnologias utilizadas

HTML5

JavaScript

Git e GitHub

O que foi praticado na aula

Estruturas condicionais

Estruturas de repetição

Uso do DOM com document.getElementById

Código principal da atividade
let soma = 0
for (let i = 1; i <= 10; i++) {
soma += i
console.log(soma)
}
document.getElementById("resultado").textContent = "Soma total: " + soma

Resultado final

O loop soma todos os números de 1 a 10 e mostra o valor total no HTML.
Resultado esperado: 55

Como executar

Abra o arquivo index.html no navegador

O resultado aparecerá na tela dentro da tag com id resultado

Confira o console do navegador para ver cada etapa da soma

Estrutura do projeto
aula-loops-n2
│ index.html
│ script.js

Aprendizados

Como controlar repetições com for

Como evitar loops infinitos

Como usar o while e o do while

Como inserir resultados no HTML usando DOM
