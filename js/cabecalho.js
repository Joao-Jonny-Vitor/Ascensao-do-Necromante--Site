// classe de cabeçalho para a componentização e reuso em outras páginas
class SiteCabecalho extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <style>
        @font-face {
        font-family: 'UnifrakturCook';
        src: url('../fonts/UnifrakturCook-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        }

        @font-face {
            font-family: 'Merriweather';
            src: url('../fonts/Merriweather-VariableFont_opsz\,wdth\,wght.ttf') format('truetype');
            font-weight: 400;
            font-style: normal;
        }

        .site-cabecalho {
            position: sticky;
            top: 0;
            z-index: 1000;
            width: 100%;
            height: 13vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #1A0F1E;
            color: #F8F5E7;
            padding: 10px 20px;
            box-sizing: border-box;
        } 
        .cabecalho-left h1 {
            margin: 0;
            font-family: UnifrakturCook;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: capitalize;
        }

        #necromante {
            font-size: 42px;
        }
        .cabecalho-center {
            flex: 1;
            display: flex;
            justify-content: center;
        }
        
        #btn-home {
            background: none;
            border: none;
            cursor: pointer;
        }

        #btn-home img {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            aspect-ratio: 1/1;
        }

        #btn-contato {
            display: flex;
            width: 200px;
            height: 56px;
            padding: 10px 0 11px 0;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-radius: 20px;
            border: 1px solid #F8F5E7;
            background:  #4F2C5B;
            color: #F8F5E7;
            cursor: pointer;
            font-family: Merriweather;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        #btn-contato:hover {
            background: #6E3B7E;
            transition: background-color 0.3s ease;
        }

        .icon {
            width: 120px;
            height: 120px;
        }
    </style>

    <header class="site-cabecalho">
        <div class="cabecalho-left">
            <h1>Ascensão do</h1>
            <h1 id="necromante">Necromante</h1>
        </div>
        <div class="cabecalho-center">
            <button id="btn-home" on>
                <img src="./img/iconeLapide.png"/>
            </button>
        </div>
        <div class="cabecalho-right">
            <button id="btn-contato">Contato</button>
        </div>
    </header>
    `;

        const btnHome = this.querySelector("#btn-home");
        const btnContato = this.querySelector("#btn-contato");

        btnHome.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("abrir-home", { bubbles: true }));
        });

        btnContato.addEventListener("click", () => {
            this.dispatchEvent(new CustomEvent("abrir-contato", { bubbles: true }));
        });
    }
}
customElements.define("site-cabecalho", SiteCabecalho);
