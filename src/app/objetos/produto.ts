export class Produto {
    constructor(public id: any, public nome: string, public preco: number, private desconto: number = 10){

    }

    public aplicarDesconto = (preco: number) => {
        return preco - this.desconto
    }
}