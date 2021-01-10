export class IndexController {

    constructor() {
        throw new Error("Não é possível instanciar uma classe estática.");
    }

    static getIndex = async (req, res) => {
        return res.status(404).render('index');
    }

}
