export class RedirecionamentoController {

    constructor() {
        throw new Error("Não é possível instanciar uma classe estática.");
    }

    static getIndex = async (req, res) => {
        res.redirect(301, '/');
    }

}