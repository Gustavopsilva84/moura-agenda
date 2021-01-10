import { PessoaLogic } from '../logic/PessoaLogic.js';

export class PessoaController {

    constructor() {
        throw new Error("Não é possível instanciar uma classe estática.");
    }

    static async getPessoa(req, res) {
        try {
            const codigo = req.params.codigo;
            const pessoa = await new PessoaLogic(codigo).ler();

            res.status(200).json(pessoa);
        } catch (ex) {
            res.status(404).json({ error: ex.message });
        }
    }

    static async getPessoas(req, res) {
        try {
            const listaDePessoas = await new PessoaLogic().ler();

            res.status(200).json(listaDePessoas);
        } catch (ex) {
            res.status(404).json({ error: ex.message });
        }
    }

    static async postPessoa(req, res) {
        try {
            const nome = req.body.nome;
            const telefone = req.body.telefone;
            const endereco = req.body.endereco;

            const insercao = await new PessoaLogic(undefined, nome, telefone, endereco).inserir();

            if (insercao) res.status(200).end();
        } catch (ex) {
            res.status(404).json({ error: ex.message });
        }
    }

    static async putPessoa(req, res) {
        try {
            const codigo = req.params.codigo;
            const nome = req.body.nome;
            const telefone = req.body.telefone;
            const endereco = req.body.endereco;

            const atualizacao = await new PessoaLogic(codigo, nome, telefone, endereco).atualizar();

            if (atualizacao) res.status(200).end();
        } catch (ex) {
            res.status(404).json({ error: ex.message });
        }
    }

    static async deletePessoa(req, res) {
        try {
            const codigo = req.params.codigo;

            const remocao = await new PessoaLogic(codigo).remover();

            if (remocao) res.status(200).end();
        } catch (ex) {
            res.status(404).json({ error: ex.message });
        }
    }

}
