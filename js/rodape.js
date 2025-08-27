// classe de rodape para a componentização e reuso em outras páginas
class SiteRodape extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
        .site-rodape {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 13vh;
            background: #1A0F1E;
            color: #F8F5E7;
            text-align: center;
            
            margin-top: 20px;
        }
    </style>

    <footer class="site-rodape">
        <p>&copy; 2025 - Todos os direitos reservados a João Vitor de Paula Oliveira ("Jonny")</p>
    </footer>
    `;
  }
}
customElements.define("site-rodape", SiteRodape);
