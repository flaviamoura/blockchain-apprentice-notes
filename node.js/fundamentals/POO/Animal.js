class Animal {
    
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    checarEstoque(){
        return 10;
    }
}
// herença
class Cachorro extends Animal {

    Latir(){
        console.log('Au! Au!');
    }

}

var dog = new Cachorro("Dogão", 5, 250);

console.log(dog.checarEstoque());
dog.Latir();