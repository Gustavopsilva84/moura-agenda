import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import PessoaRota from '../routes/PessoaRota.js';

export class Servidor {
    constructor() {
        this.servidor = express();

        this.iniciar();
    }

    iniciar() {
        this.servidor
            .use(bodyParser.urlencoded({ extended: true }))
            .use(bodyParser.json())
            .use(cors())
            .use('/pessoas', PessoaRota);
    }

    ligar(porta, callback) {
        if (typeof callback !== typeof Function) {
            this.servidor.listen(porta);

            return;
        }

        this.servidor.listen(porta, callback());
    }
}
