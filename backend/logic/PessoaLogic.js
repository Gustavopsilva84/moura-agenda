import { Pessoa } from '../models/Pessoa.js';
import { PessoaData } from '../data/PessoaData.js';
import { errosValidacao } from '../helpers/ErrosHelper.js';
import { FiltroHelper } from '../helpers/FiltroHelper.js';

export class PessoaLogic extends PessoaData {

    constructor(codigo, nome, telefone, endereco) {
        super();

        this.pessoa = new Pessoa(codigo, nome, telefone, endereco);
    }

    inserir() {
        if (!FiltroHelper.ehValido(this.pessoa.nome)) throw errosValidacao["nome"];
        if (!FiltroHelper.ehValido(this.pessoa.telefone)) throw errosValidacao["telefone"];
        if (!FiltroHelper.ehValido(this.pessoa.endereco)) throw errosValidacao["endereco"];

        return super.inserir(this.pessoa);
    }

    ler() {
        if (this.pessoa.codigo <= 0) throw errosValidacao["codigo"];

        return super.ler(this.pessoa);
    }

    atualizar() {
        if (!FiltroHelper.ehValido(this.pessoa.codigo)) throw errosValidacao["codigo"];
        if (!FiltroHelper.ehValido(this.pessoa.nome)) throw errosValidacao["nome"];
        if (!FiltroHelper.ehValido(this.pessoa.telefone)) throw errosValidacao["telefone"];
        if (!FiltroHelper.ehValido(this.pessoa.endereco)) throw errosValidacao["endereco"];

        return super.atualizar(this.pessoa);
    }

    remover() {
        if (!FiltroHelper.ehValido(this.pessoa.codigo)) throw errosValidacao["codigo"];

        return super.remover(this.pessoa);
    }

}
