// let nota = 20;

// if (nota >= 5 && nota < 10) {
//   console.log("Aprovado");
// } else {
//   console.log("Reprovado");
// }

// let diaDeAula = Number(prompt("Digite um numero de 1 a 4:"));

// switch (diaDeAula) {
//   case 1:
//     console.log("Segunda-feira");
//     break;
//   case 2:
//     console.log("Quarta-feira");
//     break;
//   case 3:
//     console.log("Quinta-feira");
//     break;
//   case 4:
//     console.log("Sexta-feira");
//     break;
//   default:
//     console.log("Número inválido");
// }

// Loops

// for (let i = 20; i >= 0; i--) {
//   console.log(`${i} Boa noite!`);
// }

// while

// let num = 1;
// while (num <= 5) {
//   console.log("Boa noite!");
//   num++;
// }

// do while

// let numero = 6;

// do {
//   console.log("Olá");
//   numero++;
// } while (numero <= 5);

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
  console.log(soma);
}
document.getElementById("resultado").textContent = "Soma total:" + soma;