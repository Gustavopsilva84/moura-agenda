import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import IndexRota from '../routes/IndexRota.js';

export class Servidor {
    constructor() {
        this.servidor = express();

        this.iniciar();
    }

    iniciar() {
        this.servidor
            .use(express.static('public'))
            .use(express.static('views'))
            .use(bodyParser.urlencoded({ extended: true }))
            .use(bodyParser.json())
            .use(cors())
            .use('/', IndexRota);
    }

    ligar(porta, callback) {
        if (typeof callback !== typeof Function) {
            this.servidor.listen(porta);

            return;
        }

        this.servidor.listen(porta, callback());
    }
}
