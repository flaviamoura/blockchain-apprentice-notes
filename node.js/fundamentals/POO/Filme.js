class Filme{

    constructor(){
        // atributos
        this.titulo = '';
        this.ano = 2000;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }
    
    // métodos

    Reproduzir() {
        console.log("Reproduzindo...")
    }

    Pausar() {
        console.log("Pausado ||")
    }

    Avancar() {
        console.log("Avançar >>")
    }

    Fechar() {
        console.log("Fechar X")
    }

}

// objetos
var vingadores = new Filme();

vingadores.titulo = "Vingadores 2";
vingadores.ano = 2014;
vingadores.genero = "Ação";

console.log(vingadores.titulo);
console.log(vingadores.ano);