const errosValidacao = {
    "codigo": new Error("Código no formato errado."),
    "nome": new Error("Nome no formato errado."),
    "telefone": new Error("Telefone no formato errado."),
    "endereco": new Error("Endereço no formato errado.")
}

export {
    errosValidacao
}