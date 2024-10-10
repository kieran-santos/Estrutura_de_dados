/*Estruturas de dados básicas são ARRAYS, LISTAS e PILHAS
ARRAY: é uma coleção de itens armazenados en um local de memória
contínuo
    - Em JS é um tipo especial de objeto utilizado para armazenar
    múltiplos valores em uma única variável
ARRAY com JS vem com diversos métodos embutidos que pacilitam a
manipulação dos dados armazenados
    - push(): adc um ou mais elementos ao final de um array
    - pop(): remove o último elemento do array
    - shift(): remove o primeiro elemento do array
    - unshift(): adiciona um ou mais elementos no início do array
console.table mostra em uma tabela ao invés de uma linha
Variável de seta => serve para criar uma função sem nome (função anônima)
EXEMPLO: */

/*
let numeros = [1, 2, 3, 4];
numeros.forEach(num => {
    console.log(num);
});
*/

/*Foi criado um loop forEach com uma váriavel de controle num, que chama
uma função sem nome através do => que irá rodar o código ali dentro*/

/*Uma PILHA e uma LIST são arrays, só muda as regras pra lidar com itens*/
/*PILHA:last in, first out - o primeiro valor vai ser o último a sair
e o último a entrar no array é o primeiro a sair (arquitetura LIFO)
    - Por isso chama pilha, pq vc empilha eles e não da pra tirar o primeiro
    lá de baixo antes dos outros
A ordem dos valores não pode mudar - isso é a regra da pilha, se você
mudar deixa de ser pilha
    - Só pode usar push() e pop()
Temos também o :
    - peek() - retorna o item que está no topo da pilha sem removê-lo
    - isEmpty() - Verifica se a pilha está vazia (retorna booleano)

FILAS:
A regra é o FIFO (first in, first out)
    - Aqui usamos o push() e o shift()
    - É literalmente uma filha, o primeiro que chega também é o
    primeiro que sai
    - Os métodos são os mesmos, o que muda é a regra 
*/

/*Exercício: escreva uma função em JavaScript que recebe um array de
números inteiros e retorna a soma dos números pares do array*/

function somaPares(parametro){
let soma = 0;
parametro.forEach(num => {
    if(num%2 == 0){
        soma += num;
    }
});
return soma

}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 20, 9, 10, 11, 12, 13, 14];
console.log(somaPares(numeros));
