import { Banco } from './database/Banco.js';
import { Servidor } from './server/Servidor.js';
import dotenv from 'dotenv';

dotenv.config();

new Banco();

const servidor = new Servidor();
const porta = process.env.PORTA || 5555;

servidor.ligar(porta, () => console.log(`Servidor iniciado em: http://127.0.0.1:${porta}`));
