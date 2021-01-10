import sqlite from 'sqlite-async';
import dotenv from 'dotenv';

dotenv.config();

export class Banco {
    constructor() {
        this.banco = null;

        this.iniciar();
    }

    async iniciar() {
        this.banco = await sqlite
            .open(process.env.ENDERECO_BANCO)
            .then(resultado => resultado)

        this.criarTabelaPessoa();

        await this.banco.close();
    }

    async criarTabela(tabela) {
        await this.banco
            .run(tabela)
            .then(resultado => resultado);
    }

    criarTabelaPessoa() {
        const tabela = `
            CREATE TABLE IF NOT EXISTS Pessoa (
                Codigo INTEGER PRIMARY KEY AUTOINCREMENT,
                Nome TEXT NOT NULL,
                Telefone TEXT NOT NULL,
                Endereco TEXT NOT NULL
            );
        `;

        this.criarTabela(tabela);
    }

}