export class Pessoa {

    constructor(codigo, nome, telefone, endereco) {
        this._codigo = codigo;
        this._nome = nome;
        this._telefone = telefone;
        this._endereco = endereco;
    }

    get codigo() {
        return this._codigo;
    }

    get nome() {
        return this._nome;
    }

    get telefone() {
        return this._telefone;
    }

    get endereco() {
        return this._endereco;
    }

}
