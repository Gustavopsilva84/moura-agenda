import express from 'express';
import { PessoaController } from '../controllers/PessoaController.js';

const router = express.Router();

router
    .get('/', PessoaController.getPessoas)
    .get('/pessoa/:codigo', PessoaController.getPessoa)
    .post('/pessoa', PessoaController.postPessoa)
    .put('/pessoa/:codigo', PessoaController.putPessoa)
    .delete('/pessoa/:codigo', PessoaController.deletePessoa);

export default router;