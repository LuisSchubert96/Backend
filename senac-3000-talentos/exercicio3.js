/*
3) Sistema de Avaliação
Crie uma função que determine se um aluno passou ou reprovou com base em duas notas. 
Para passar, o aluno deve ter uma média maior ou igual a 6 e não ter faltado em mais de 10% das aulas.
*/

let nota1 = 7;
let nota2 = 5;
let faltas = 8;
let totalAulas = 100;
const aprovacao = (nota1, nota2) => ((nota1 + nota2)/2)
const presenca = ( faltas, totalAulas) => ((faltas/totalAulas)*100)
if(aprovacao(nota1, nota2) >= 6 && presenca(faltas, totalAulas) < 10){
    console.log("Aluno aprovado")
}else{
    console.log("Aluno reprovado")
}

// Verifique se o aluno passou ou reprovou
