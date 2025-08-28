class ModalContato extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <style>

        @font-face {
            font-family: 'Merriweather';
            src: url('../fonts/Merriweather-VariableFont_opsz\,wdth\,wght.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'MedievalSharp';
            src: url('../fonts/MedievalSharp-Regular.ttf') format('truetype');
            font-style: normal;
        }

        .overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            align-items: center;
            justify-content: center;
        }
        .overlay.active { display: flex; }

        .modal {
            background: #F8F5E7;
            padding: 20px;
            border-radius: 20px ;
            border: 5px solid #4F2C5B;
            max-width: 40%;
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .modal h2 {
           font-family: MedievalSharp;
           font-size: 38px;
           align-self: center;
           color: #4F2C5B;
        }

        .modal label {
            font-family: Merriweather;
            font-size: 20px;
            font-weight: 500;
            align-self: center;
        }

        .modal form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 80%;
        }

        .modal input {
            width : 50%;
            padding: 8px;
            font-size: 18px;
            border: 2px solid #4F2C5B;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .modal textarea {
            resize: none;
            width: 70%;
            height: 200px;
            padding: 8px;
            font-size: 18px;
            border: 2px solid #4F2C5B;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .modal button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 25px;
            width: 30%;
            background: #4F2C5B;
            color: #F8F5E7;
            font-family: Merriweather;

        }

        .modal button:hover {
            background: #6E3B7E;
            transition: background-color 0.3s ease;
        }

        #fechar {
            background: url('./img/fechar.svg') no-repeat center;
            background-size: contain;
            border: none;
            width: 30px;
            height: 30px;
            align-self: flex-start;
            cursor: pointer;
        </style>

        <div class="overlay">
            <div class="modal">
                <button id="fechar"></button>
                <h2>Formulário de Contato</h2>
                <form id="formContato">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>

                    <button type="submit">Enviar</button>
                
                
            </div>
        </div>
    `;
        this.querySelector("#fechar").addEventListener("click", () => this.close());
    }

    open() {
        this.querySelector(".overlay").classList.add("active");
    }
    close() {
        this.querySelector(".overlay").classList.remove("active");
    }
}

customElements.define("modal-contato", ModalContato);