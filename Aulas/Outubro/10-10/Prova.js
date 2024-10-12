//Prova realizada em dupla por mim e Jhonatan Marcelino de Jesus


//Exercício 1: Corrigir o código fornecido pelo professor

class Pilha {
    constructor(){
        this.itens = [];
        this.totalItens = 0;
    }

    
    adicionar_elemento(elemento){
        this.itens.push(elemento);
        console.log(elemento);
        this.totalItens++;
    }

    //O push é um método que declaramos junto com o array
    //Como ele adiciona um elemento na última posição do array, não precisamos informar a posição
    //precisamos apenas colocar uma variável que receberá o valor adicionado no final da pilha 

    remover_elemento(){
        if(this.totalItens === 0){     //mantemos o if para caso a pilha esteja vazia
            console.log("Pilha vazia"); //porém, vamos utilizar o console.log pois o return quebra o loop
        }
        else{
        this.itens.pop();       //assim como no push, não precisamos indicar a posição
        this.totalItens--;}     //também não precisamos indicar o elemento ou seu valor, pois será sempre removido o último da pilha
    }

    peek(){
        return this.itens[0];
      }


}

let pilha = new Pilha();
pilha.adicionar_elemento(1);
pilha.adicionar_elemento(2);
pilha.remover_elemento();   //pop() sem console.log, pois o pop() apenas remove o objeto, não guarda valor
pilha.peek();          


//Exercício 2: criar uma fila de atendimento de um hospital, onde os pacientes com maior gravidade
//deveriam ser atendidos primeiro


class Fila {
    constructor() {
        this.pacientes = [];
    }

    adicionarPaciente(nome, gravidade) {
        let paciente = {
            nome: nome,
            gravidade: gravidade
        };

        // Adiciona o paciente no final da fila
        this.pacientes[this.pacientes.length] = paciente;

        // Ordena os pacientes manualmente pela gravidade (do mais grave para o menos grave)
        for (let i = this.pacientes.length - 1; i > 0; i--) {
            if (this.pacientes[i].gravidade > this.pacientes[i - 1].gravidade) {
                // Troca os pacientes
                let temp = this.pacientes[i];
                this.pacientes[i] = this.pacientes[i - 1];
                this.pacientes[i - 1] = temp;
            }
        }

        console.log(`${nome} adicionado à fila.`);
    }

    atenderPaciente() {
        if (this.pacientes.length === 0) {
            console.log("Fila vazia.");
            return;
        }

        const pacienteAtendido = this.pacientes[0]; // Pega o primeiro paciente
        // Realoca os pacientes
        for (let i = 0; i < this.pacientes.length - 1; i++) {
            this.pacientes[i] = this.pacientes[i + 1];
        }
        this.pacientes.length--; // Remove o último elemento (que é um duplicado)

        console.log(`O paciente ${pacienteAtendido.nome} foi atendido.`);
    }

    listarPacientes() {
        if (this.pacientes.length === 0) {
            console.log("Nenhum paciente na fila.");
            return;
        }

        for (let i = 0; i < this.pacientes.length; i++) {
            console.log(`Paciente ${i + 1}: ${this.pacientes[i].nome}, Gravidade: ${this.pacientes[i].gravidade}`);
        }
    }

    estaVazia() {
        return this.pacientes.length === 0;
    }
}

let fila = new Fila();

fila.adicionarPaciente("Joaquim", 3);
fila.adicionarPaciente("Marquinhos", 1);
fila.adicionarPaciente("Leandrinho", 2);
fila.adicionarPaciente("Felisbela", 3);

console.log(`Fila está vazia? ${fila.estaVazia()}`);
fila.listarPacientes();
fila.atenderPaciente();


//Exercício 3: Corrigir o código fornecido pelo professor

class Fila {
    constructor() {
        this.itens = [];
        this.posicao = 0;
        this.fim = 0;
    }

    isEmpty() {
        return this.fim === 0;
    }

    enqueue(elemento) {
        this.itens[this.posicao] = elemento;
        this.fim++;
        this.posicao++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Fila vazia.");
            return;
        }

        const itemRemovido = this.itens[0];

        for (let i = 1; i < this.fim; i++) {
            this.itens[i - 1] = this.itens[i]; // Move os itens para frente
        }

        this.fim--; // Decrementa o fim
        this.posicao--; // Decrementa a posição, se necessário
        this.itens[this.fim] = undefined; // Limpa a posição do item removido

        return itemRemovido; // Retorna o item removido
    }

    peek() {
        return this.isEmpty() ? undefined : this.itens[0];
    }
}

let fila = new Fila();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
console.log(fila.dequeue()); // Deve retornar "A"
console.log(fila.peek()); // Deve retornar "B"
