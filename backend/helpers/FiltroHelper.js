export class FiltroHelper {

    constructor() {
        throw new Error("Não é possível instanciar uma classe estática.");
    }

    static ehVazio(valor) {
        if (typeof valor === "undefined") return true;

        if (typeof valor === "string" && !(valor.length > 0)) return true;

        return false;
    }

    static ehEmBranco(texto) {
        if (typeof texto === "string") {
            const textoFormatado = texto.replace(" ", "");
            const ehVazio = this.ehVazio(textoFormatado);

            return ehVazio;
        }

        return false;
    }

    static ehValido(valor) {
        const ehVazio = this.ehVazio(valor);
        const ehEmBranco = this.ehEmBranco(valor);

        return !ehVazio && !ehEmBranco;
    }

}
