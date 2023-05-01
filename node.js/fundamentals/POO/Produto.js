class Produto{

    constructor(){
    // atributos
        this.nome = 'monster';
        this.sabor = 'watermelon';
        this.quantidade = 20;
        this.preco = 8;
        this.validade = 2023;
        
    }
    
    // métodos
    Vender() {
        if(this.quantidade > 0){
            console.log("Vender...");
            this.quantidade--;
        }
    }

    RetirarDoEstoque() {
        if(this.validade > 2023){
            console.log("Retirar do estoque...");
        }
    }
}