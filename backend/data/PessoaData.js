import sqlite from 'sqlite-async';
import dotenv from 'dotenv';

dotenv.config();

export class PessoaData {

    constructor() {
        this.banco = null;
    }

    async inserir(pessoa) {
        const consulta = `
            INSERT INTO Pessoa(Nome, Telefone, Endereco)
                VALUES (?, ?, ?)
        `;

        let resultado;

        this.banco = await sqlite.open(process.env.ENDERECO_BANCO).then();

        await this.banco
            .run(consulta, [pessoa.nome, pessoa.telefone, pessoa.endereco])
            .then(resultado = true);

        await this.banco.close().then();

        return resultado;
    }

    async ler(pessoa) {
        const consulta = `
            SELECT * 
                FROM Pessoa
                    ${!pessoa.codigo ? `` : `WHERE Codigo = ?`}
        `;

        let resultado;

        try {

            this.banco = await sqlite.open(process.env.ENDERECO_BANCO);

            if (!pessoa.codigo) {

                await this.banco
                    .all(consulta)
                    .then(registros => resultado = registros);

            } else {

                await this.banco
                    .get(consulta, [pessoa.codigo])
                    .then(registro => resultado = registro);

            }

        } catch (ex) {

        } finally {

            await this.banco.close().then();

        }

        return resultado;
    }

    async atualizar(pessoa) {
        const consulta = `
            UPDATE Pessoa 
                SET Nome = ?, Telefone = ?, Endereco = ?
                    WHERE Codigo = ?
        `;

        let resultado;

        try {

            this.banco = await sqlite
                .open(process.env.ENDERECO_BANCO)
                .then(banco => banco);

            await this.banco
                .run(consulta, [pessoa.nome, pessoa.telefone, pessoa.endereco, pessoa.codigo])
                .then(resultado = true);

        } catch (ex) {

        } finally {

            await this.banco.close().then();

        }

        return resultado;
    }

    async remover(pessoa) {
        const consulta = `
            DELETE  
                FROM Pessoa
                    WHERE Codigo = ?;
        `;

        let resultado;

        try {

            this.banco = await sqlite
                .open(process.env.ENDERECO_BANCO)
                .then(banco => banco);

            await this.banco
                .run(consulta, [pessoa.codigo])
                .then(resultado = true);

        } catch (ex) {

        } finally {

            await this.banco.close().then();

        }

        return resultado;

    }

}