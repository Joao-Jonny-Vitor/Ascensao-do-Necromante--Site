const cabecalho = document.querySelector("site-cabecalho");

document.addEventListener("DOMContentLoaded", () => {
    const cabecalho = document.querySelector("site-cabecalho");
    const modal = document.querySelector("modal-contato");

    //verifiquei aqui se o cabecalho existe antes de adicionar os ouvintes de eventos, para n voltar null 
    if (cabecalho) {
        cabecalho.addEventListener("abrir-home", () => {
            const paginaAtual = window.location.pathname;

            //verifica se ta na home page, caso esteja ele só rola para cima, se n ta na home ele redireciona
            if (paginaAtual.endsWith("homePage.html") || paginaAtual === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                window.location.href = "homePage.html";
            }
        });
            //verifica se o modal existe antes de adicionar o ouvinte de evento para n retornar null
        if (cabecalho && modal) {
            cabecalho.addEventListener("abrir-contato", () => {
                modal.open();
            });
        }
    }
});


