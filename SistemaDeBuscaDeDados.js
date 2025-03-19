class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.left = null;
        this.right = null;
    }
}

class CatalogoProdutos {
    constructor() {
        this.raiz = null;
    }

    inserir(produto) {
        if (this.raiz === null) {
            this.raiz = produto;
        } else {
            this._inserirRecursivo(this.raiz, produto);
        }
    }

    _inserirRecursivo(node, produto) {
        if (produto.id < node.id) {
            if (node.left === null) {
                node.left = produto;
            } else {
                this._inserirRecursivo(node.left, produto);
            }
        } else {
            if (node.right === null) {
                node.right = produto;
            } else {
                this._inserirRecursivo(node.right, produto);
            }
        }
    }

    buscar(id) {
        return this._buscarRecursivo(this.raiz, id);
    }

    _buscarRecursivo(node, id) {
        if (node === null || node.id === id) {
            return node;
        }
        if (id < node.id) {
            return this._buscarRecursivo(node.left, id);
        }
        return this._buscarRecursivo(node.right, id);
    }
}

const catalogo = new CatalogoProdutos();
catalogo.inserir(new Produto(10, "Teclado", 150.00));
catalogo.inserir(new Produto(5, "Mouse", 70.00));
catalogo.inserir(new Produto(15, "Monitor", 900.00));
catalogo.inserir(new Produto(2, "Fone de Ouvido", 200.00));
catalogo.inserir(new Produto(8, "Webcam", 300.00));

const produto = catalogo.buscar(8);
if (produto) {
    console.log(`Produto encontrado: ${produto.nome} - R$${produto.preco}`);
} else {
    console.log("Produto não encontrado");
}