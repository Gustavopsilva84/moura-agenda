const form = document.querySelector("form");
const inputCodigo = document.querySelector("#codigo");
const inputNome = document.querySelector("#nome");
const inputTelefone = document.querySelector("#telefone");
const inputEndereco = document.querySelector("#endereco");
const btnGravar = document.querySelector("[data-gravar]");
const ulRegistros = document.querySelector("ul");

const criarBotaoCancelar = () => {
    return `
        <button class="btn-cancelar" data-cancelar>Cancelar</button>
    `;
}

const criarBotaoEditar = () => {
    return `
        <button data-editar>Editar</button>
    `;
}

const criarBotaoRemover = () => {
    return `
        <button data-remover>Remover</button>
    `;
}

const criarRegistro = (registro) => {
    return `
        <li>
            <p data-registro>${registro.Codigo}, ${registro.Nome}, ${registro.Telefone}, ${registro.Endereco}</p>
            <div>
                ${criarBotaoEditar()}
                ${criarBotaoRemover()}
            </div>
        </li>
    `;
}

const criarRegistros = (registros) => {

    registros.forEach(registro => {

        ulRegistros.insertAdjacentHTML('beforeend', criarRegistro(registro));

    });

}

const iniciar = () => {

    const btnCancelar = document.querySelector("[data-cancelar]") || undefined;

    if (btnCancelar) btnCancelar.remove();

    ulRegistros.innerHTML = "";

    const url = 'http://127.0.0.1:5554/pessoas';
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            "content-type": "application/json;charset=utf-8"
        }
    }

    return fetch(url, options)
        .then(resultado => resultado.json())
        .then(registros => {
            criarRegistros(registros);
            form.reset();
        })
        .catch(error => console.error(error));

}

btnGravar.addEventListener('click', event => {

    event.preventDefault();

    const clicado = event.target;

    if (clicado.nodeName.toLowerCase() !== "button") return;

    const codigo = inputCodigo.value
    const nome = inputNome.value;
    const telefone = inputTelefone.value;
    const endereco = inputEndereco.value;

    let url;
    let options;

    if (clicado.textContent === "Gravar") {

        url = 'http://127.0.0.1:5554/pessoas/pessoa';
        options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                "content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({ nome: nome, telefone: telefone, endereco: endereco })
        }

        fetch(url, options)
            .then(() => {
                iniciar();
                form.reset();
            })
            .catch(error => console.error(error));

    }

    if (clicado.textContent === "Atualizar") {

        url = `http://127.0.0.1:5554/pessoas/pessoa/${codigo}`;
        options = {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "content-type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({ nome: nome, telefone: telefone, endereco: endereco })
        }

        fetch(url, options)
            .then(resultado => {
                iniciar();
                btnGravar.textContent = "Gravar";
                resultado.status;
            })
            .catch(error => console.error(error));
    }

});

ulRegistros.addEventListener("click", event => {

    const clicado = event.target;

    if (clicado.nodeName.toLowerCase() !== "button") return;

    const itemDaLista = event.target.parentNode.parentNode;
    const textoDaLista = itemDaLista.querySelector("p");

    const vetorDaLista = textoDaLista.textContent.split(",");
    const vetorFormatado = vetorDaLista.map(item => item.replace(" ", ""));

    const codigo = vetorFormatado[0];
    const nome = vetorFormatado[1];
    const telefone = vetorFormatado[2];
    const endereco = vetorFormatado[3];

    let btnCancelar = document.querySelector("[data-cancelar]") || undefined;

    if (clicado.textContent === "Editar") {

        btnGravar.textContent = "Atualizar";

        inputCodigo.value = codigo;
        inputNome.value = nome;
        inputTelefone.value = telefone;
        inputEndereco.value = endereco;

        if (!btnCancelar) {

            form.insertAdjacentHTML("beforeend", criarBotaoCancelar());

            btnCancelar = document.querySelector("[data-cancelar]");

            btnCancelar.addEventListener("click", event => {

                event.preventDefault();

                inputCodigo.value = "";
                inputNome.value = "";
                inputTelefone.value = "";
                inputEndereco.value = "";

                btnGravar.textContent = "Gravar";

                btnCancelar.remove();

            })

        }

    }

    if (clicado.textContent === "Remover") {

        const url = `http://127.0.0.1:5554/pessoas/pessoa/${codigo}`;
        const options = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "content-type": "application/json;charset=utf-8"
            }
        };

        fetch(url, options)
            .then(resultado => {
                itemDaLista.remove();

                const btnCancelar = document.querySelector("[data-cancelar]") || undefined;

                if (btnCancelar) btnCancelar.remove();
            })
            .catch(error => console.error(error));
    }

});

iniciar();
