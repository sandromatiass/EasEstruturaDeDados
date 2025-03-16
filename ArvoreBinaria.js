class Node {
  constructor(valor) {
      this.valor = valor;
      this.esquerda = null;
      this.direita = null;
      this.altura = 1;
  }
}

class ArvoreAVL {
  constructor() {
      this.raiz = null;
  }

  obterAltura(no) {
      return no ? no.altura : 0;
  }

  calcularFatorBalanceamento(no) {
      return no ? this.obterAltura(no.esquerda) - this.obterAltura(no.direita) : 0;
  }

  rotacaoDireita(y) {
      let x = y.esquerda;
      let T2 = x.direita;
      
      x.direita = y;
      y.esquerda = T2;
      
      y.altura = Math.max(this.obterAltura(y.esquerda), this.obterAltura(y.direita)) + 1;
      x.altura = Math.max(this.obterAltura(x.esquerda), this.obterAltura(x.direita)) + 1;
      
      return x;
  }

  rotacaoEsquerda(x) {
      let y = x.direita;
      let T2 = y.esquerda;
      
      y.esquerda = x;
      x.direita = T2;
      
      x.altura = Math.max(this.obterAltura(x.esquerda), this.obterAltura(x.direita)) + 1;
      y.altura = Math.max(this.obterAltura(y.esquerda), this.obterAltura(y.direita)) + 1;
      
      return y;
  }

  inserir(valor) {
      this.raiz = this._inserirRec(this.raiz, valor);
  }

  _inserirRec(no, valor) {
      if (!no) return new Node(valor);
      
      if (valor < no.valor) {
          no.esquerda = this._inserirRec(no.esquerda, valor);
      } else if (valor > no.valor) {
          no.direita = this._inserirRec(no.direita, valor);
      } else {
          return no; 
      }
      
      no.altura = Math.max(this.obterAltura(no.esquerda), this.obterAltura(no.direita)) + 1;
      
      let balance = this.calcularFatorBalanceamento(no);
      
      if (balance > 1 && valor < no.esquerda.valor) {
          return this.rotacaoDireita(no);
      }
      if (balance < -1 && valor > no.direita.valor) {
          return this.rotacaoEsquerda(no);
      }
      if (balance > 1 && valor > no.esquerda.valor) {
          no.esquerda = this.rotacaoEsquerda(no.esquerda);
          return this.rotacaoDireita(no);
      }
      if (balance < -1 && valor < no.direita.valor) {
          no.direita = this.rotacaoDireita(no.direita);
          return this.rotacaoEsquerda(no);
      }
      
      return no;
  }

  emOrdem() {
      this._emOrdemRec(this.raiz);
  }

  _emOrdemRec(no) {
      if (no !== null) {
          this._emOrdemRec(no.esquerda);
          console.log(no.valor);
          this._emOrdemRec(no.direita);
      }
  }
}

// Exemplo de uso
const arvoreAVL = new ArvoreAVL();
arvoreAVL.inserir(50);
arvoreAVL.inserir(30);
arvoreAVL.inserir(70);
arvoreAVL.inserir(20);
arvoreAVL.inserir(40);
arvoreAVL.inserir(60);
arvoreAVL.inserir(80);

console.log("Árvore AVL em ordem:");
arvoreAVL.emOrdem();
