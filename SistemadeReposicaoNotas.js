class PilhaReposicaoNotas {
  constructor() {
      this.pilha = [];
  }

  adicionarPedido(aluno, disciplina, novaNota) {
      this.pilha.push({ aluno, disciplina, novaNota });
      console.log(`Pedido de reposição de nota para ${aluno} em ${disciplina} adicionado.`);
  }

  processarPedido() {
      if (this.pilha.length > 0) {
          const pedido = this.pilha.pop();
          console.log(`Processando reposição de nota: ${pedido.aluno} - ${pedido.disciplina} -> Nova Nota: ${pedido.novaNota}`);
      } else {
          console.log("Nenhum pedido de reposição de nota na fila.");
      }
  }

  exibirPedidos() {
      if (this.pilha.length > 0) {
          console.log("Pedidos pendentes:", this.pilha);
      } else {
          console.log("Nenhum pedido pendente.");
      }
  }
}


const reposicaoNotas = new PilhaReposicaoNotas();
reposicaoNotas.adicionarPedido("João", "Matemática", 8.5);
reposicaoNotas.adicionarPedido("Maria", "História", 9.0);
reposicaoNotas.adicionarPedido("Carlos", "Física", 7.5);

reposicaoNotas.exibirPedidos();
reposicaoNotas.processarPedido();
reposicaoNotas.exibirPedidos();
