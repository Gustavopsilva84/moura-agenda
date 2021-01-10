import express from 'express';
import { IndexController } from '../controllers/IndexController.js';
import { RedirecionamentoController } from '../controllers/RedirecionamentoController.js';

const router = express.Router();

router
    .get('/', IndexController.getIndex)
    .get('/*', RedirecionamentoController.getIndex);

export default router;
