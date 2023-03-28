class PersonagemRPG{

    constructor(){
    // atributos
        this.nome = 'Yuumi';
        this.classe = 'mage';
        this.idade = 20;
        this.elemento = 'fogo';
        this.inteligencia = 10;
        this.vida = 100;
        
    }
    
    // métodos
    Atacar() {
        if(this.vida > 50){
            console.log("Atacar!!!");
        }
    }

    Curar() {
        if(this.vida < 50){
            console.log("Curar!!!");
        }
    }

    Recuar() {
        if(this.vida < 10){
            console.log("Recuar base!!!");
        }
    }

}