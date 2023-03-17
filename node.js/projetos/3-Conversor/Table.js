class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift(); // .shift função que remove o primeiro elemento do array
        this.rows = arr;
    }

    get RowCount(){ // campo virtual: faz a conta de elementos atuais dentro do array
        return this.rows.length; 
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;