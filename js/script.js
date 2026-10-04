const NUMERO_WHATSAPP =
    "5567991619339";


const saudacao =
    document.querySelector(
        "#saudacao"
    );

const cabecalho =
    document.querySelector(
        "#cabecalho"
    );

const menu =
    document.querySelector(
        "#menu"
    );

const botaoMenu =
    document.querySelector(
        "#menu-mobile"
    );

const linksMenu =
    document.querySelectorAll(
        ".link-menu"
    );

const listaPecas =
    document.querySelector(
        "#lista-pecas"
    );

const listaTrabalhos =
    document.querySelector(
        "#lista-trabalhos"
    );

const secaoCriacao =
    document.querySelector(
        "#criacao"
    );

const criacaoConteudo =
    document.querySelector(
        "#criacao-conteudo"
    );

const linkCriacaoMenu =
    document.querySelector(
        ".link-criacao-menu"
    );

const footerCriacao =
    document.querySelector(
        ".footer-criacao"
    );

const secaoRifas =
    document.querySelector(
        "#rifas"
    );

const rifaConteudo =
    document.querySelector(
        "#rifa-conteudo"
    );

const linkRifaMenu =
    document.querySelector(
        ".link-rifa-menu"
    );

const modalPersonalizado =
    document.querySelector(
        "#modal-personalizado"
    );

const botaoFecharModal =
    document.querySelector(
        "#fechar-modal"
    );

const formPersonalizado =
    document.querySelector(
        "#form-personalizado"
    );

const botaoContato =
    document.querySelector(
        "#botao-contato"
    );

const footerWhatsApp =
    document.querySelector(
        "#footer-whatsapp"
    );

const footerPersonalizado =
    document.querySelector(
        "#footer-personalizado"
    );

const heroPersonalizado =
    document.querySelector(
        "#hero-personalizado"
    );

const toast =
    document.querySelector(
        "#toast"
    );


let pecas = [];

let etapasCriacao = [];

let indiceCriacao = 0;

let intervaloCriacao = null;

let inicioToqueCriacao = 0;

let rifaAtual = null;

let indiceRifa = 0;

let timerToast;


iniciar();


async function iniciar() {
    configurarSaudacao();

    configurarMenu();

    configurarContato();

    configurarModal();

    configurarCabecalho();

    await Promise.all([
        carregarPecas(),
        carregarCriacao(),
        carregarRifa()
    ]);
}


/* SAUDAÇÃO */

function configurarSaudacao() {
    const hora =
        new Date().getHours();

    if (
        hora >= 5 &&
        hora < 12
    ) {
        saudacao.textContent =
            "Bom dia!";
    } else if (
        hora >= 12 &&
        hora < 18
    ) {
        saudacao.textContent =
            "Boa tarde!";
    } else {
        saudacao.textContent =
            "Boa noite!";
    }
}


/* MENU */

function configurarMenu() {
    botaoMenu.addEventListener(
        "click",
        function () {
            menu.classList.toggle(
                "ativo"
            );

            botaoMenu.classList.toggle(
                "ativo"
            );

            document.body.classList.toggle(
                "menu-aberto"
            );
        }
    );


    linksMenu.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    fecharMenuMobile();

                    linksMenu.forEach(
                        function (item) {
                            item.classList.remove(
                                "ativo"
                            );
                        }
                    );

                    link.classList.add(
                        "ativo"
                    );
                }
            );

        }
    );
}


function fecharMenuMobile() {
    menu.classList.remove(
        "ativo"
    );

    botaoMenu.classList.remove(
        "ativo"
    );

    document.body.classList.remove(
        "menu-aberto"
    );
}


/* CABEÇALHO */

function configurarCabecalho() {
    window.addEventListener(
        "scroll",
        function () {

            cabecalho.classList.toggle(
                "rolado",
                window.scrollY > 30
            );

        }
    );
}


/* PEÇAS */

async function carregarPecas() {
    const {
        data,
        error
    } = await db
        .from("pecas")
        .select(`
            *,
            peca_fotos (
                id,
                url,
                ordem
            )
        `)
        .order(
            "criado_em",
            {
                ascending: false
            }
        );


    if (error) {
        console.error(
            "Erro ao carregar peças:",
            error
        );

        listaPecas.innerHTML =
            estadoVazio(
                "Não conseguimos carregar as peças.",
                "Tente novamente em alguns instantes."
            );

        listaTrabalhos.innerHTML =
            estadoVazio(
                "Não conseguimos carregar os projetos.",
                "Tente novamente em alguns instantes."
            );

        return;
    }


    pecas =
        data || [];


    pecas.forEach(
        function (peca) {

            peca.peca_fotos =
                peca.peca_fotos || [];

            peca.peca_fotos.sort(
                function (a, b) {
                    return (
                        (a.ordem || 0) -
                        (b.ordem || 0)
                    );
                }
            );

        }
    );


    renderizarPecas();

    renderizarTrabalhos();
}


function renderizarPecas() {
    const disponiveis =
        pecas.filter(
            function (peca) {
                return (
                    peca.status ===
                        "disponivel" ||
                    peca.status ===
                        "reservada"
                );
            }
        );


    let html;


    if (
        disponiveis.length === 0
    ) {
        html =
            estadoVazio(
                "Novas peças em breve.",
                "No momento não há peças disponíveis, mas você pode solicitar uma criação personalizada."
            );
    } else {
        html =
            disponiveis
                .map(criarCardPeca)
                .join("");
    }


    html +=
        criarCardPersonalizado();


    listaPecas.innerHTML =
        html;


    configurarGalerias(
        listaPecas
    );


    configurarInteresse();


    const personalizado =
        document.querySelector(
            "#botao-personalizado"
        );


    if (personalizado) {
        personalizado.addEventListener(
            "click",
            abrirModalPersonalizado
        );
    }
}


function criarCardPeca(peca) {
    const fotos =
        peca.peca_fotos;


    const foto =
        fotos[0]?.url;


    const imagem =
        foto
            ? `
                <img
                    src="${foto}"
                    alt="${escaparHTML(
                        peca.nome
                    )}"
                    class="imagem-galeria"
                >
            `
            : `
                <div class="sem-foto">
                    Sem foto disponível
                </div>
            `;


    const setas =
        criarControlesGaleria(
            fotos.length
        );


    const preco =
        peca.preco_vista
            ? formatarPreco(
                peca.preco_vista
            )
            : "Sob consulta";


    const parcelamento =
        peca.parcelamento
            ? `
                <span>
                    ${escaparHTML(
                        peca.parcelamento
                    )}
                </span>
            `
            : "";


    const reservado =
        peca.status ===
        "reservada";


    return `
        <article
            class="produto-card"
            data-id="${peca.id}"
            data-indice="0"
        >

            <div class="produto-imagem">

                ${imagem}

                <span class="codigo-produto">
                    ${escaparHTML(
                        peca.codigo
                    )}
                </span>

                <span
                    class="
                        status-publico
                        ${peca.status}
                    "
                >
                    ${
                        reservado
                            ? "Reservada"
                            : "Disponível"
                    }
                </span>

                ${setas}

            </div>


            <div class="produto-info">

                <p class="produto-categoria">
                    ${escaparHTML(
                        peca.categoria
                    )}
                </p>

                <h3>
                    ${escaparHTML(
                        peca.nome
                    )}
                </h3>

                <p class="produto-descricao">
                    ${
                        escaparHTML(
                            peca.descricao
                        ) ||
                        "Peça artesanal produzida com atenção a cada detalhe."
                    }
                </p>

                <div class="produto-preco">

                    <strong>
                        ${preco}
                    </strong>

                    ${parcelamento}

                </div>


                <button
                    class="botao-interesse"
                    type="button"
                    data-id="${peca.id}"
                    ${
                        reservado
                            ? "disabled"
                            : ""
                    }
                >
                    ${
                        reservado
                            ? "Peça reservada"
                            : "Tenho interesse"
                    }
                </button>

            </div>

        </article>
    `;
}


function criarCardPersonalizado() {
    return `
        <article class="card-personalizado">

            <div>

                <div class="card-personalizado-topo">

                    <span>
                        SOB MEDIDA
                    </span>

                </div>

                <div class="simbolo-personalizado">
                    ?
                </div>

                <h3>
                    Faça do seu jeito.
                </h3>

                <p>
                    Tem uma ideia diferente?
                    Conte como você imagina a peça e
                    vamos conversar sobre o projeto.
                </p>

            </div>


            <button
                id="botao-personalizado"
                type="button"
            >
                Solicitar orçamento
            </button>

        </article>
    `;
}


/* TRABALHOS */

function renderizarTrabalhos() {
    const trabalhos =
        pecas.filter(
            function (peca) {
                return (
                    peca.status ===
                        "projeto" ||
                    peca.status ===
                        "vendida"
                );
            }
        );


    if (
        trabalhos.length === 0
    ) {
        listaTrabalhos.innerHTML =
            estadoVazio(
                "Portfólio em construção.",
                "Os projetos concluídos aparecerão aqui conforme novos trabalhos forem realizados."
            );

        return;
    }


    listaTrabalhos.innerHTML =
        trabalhos
            .map(criarCardTrabalho)
            .join("");


    configurarGalerias(
        listaTrabalhos
    );
}


function criarCardTrabalho(peca) {
    const fotos =
        peca.peca_fotos;


    const foto =
        fotos[0]?.url;


    const imagem =
        foto
            ? `
                <img
                    src="${foto}"
                    alt="${escaparHTML(
                        peca.nome
                    )}"
                    class="imagem-galeria"
                >
            `
            : `
                <div class="sem-foto">
                    Sem foto disponível
                </div>
            `;


    return `
        <article
            class="trabalho-card"
            data-id="${peca.id}"
            data-indice="0"
        >

            <div class="trabalho-imagem">

                ${imagem}

                ${criarControlesGaleria(
                    fotos.length
                )}

            </div>


            <div class="trabalho-info">

                <p class="trabalho-categoria">
                    ${
                        peca.status ===
                            "vendida"
                            ? "Peça realizada"
                            : "Projeto realizado"
                    }
                </p>

                <h3>
                    ${escaparHTML(
                        peca.nome
                    )}
                </h3>

                ${
                    peca.descricao
                        ? `
                            <p class="trabalho-descricao">
                                ${escaparHTML(
                                    peca.descricao
                                )}
                            </p>
                        `
                        : ""
                }

            </div>

        </article>
    `;
}


/* GALERIAS */

function criarControlesGaleria(
    total
) {
    if (
        total <= 1
    ) {
        return "";
    }


    return `
        <button
            class="seta-foto anterior"
            data-direcao="-1"
            type="button"
            aria-label="Foto anterior"
        >
            ‹
        </button>

        <button
            class="seta-foto proxima"
            data-direcao="1"
            type="button"
            aria-label="Próxima foto"
        >
            ›
        </button>

        <span class="contador-fotos">
            1 / ${total}
        </span>
    `;
}


function configurarGalerias(
    container
) {
    container
        .querySelectorAll(
            "[data-id]"
        )
        .forEach(
            function (card) {

                const peca =
                    pecas.find(
                        function (item) {
                            return (
                                item.id ===
                                card.dataset.id
                            );
                        }
                    );


                if (
                    !peca ||
                    peca.peca_fotos.length <= 1
                ) {
                    return;
                }


                card
                    .querySelectorAll(
                        ".seta-foto"
                    )
                    .forEach(
                        function (botao) {

                            botao.addEventListener(
                                "click",
                                function () {

                                    trocarFotoCard(
                                        card,
                                        peca,
                                        Number(
                                            botao.dataset.direcao
                                        )
                                    );

                                }
                            );

                        }
                    );

            }
        );
}


function trocarFotoCard(
    card,
    peca,
    direcao
) {
    const fotos =
        peca.peca_fotos;


    let indice =
        Number(
            card.dataset.indice
        ) +
        direcao;


    if (
        indice < 0
    ) {
        indice =
            fotos.length - 1;
    }


    if (
        indice >=
        fotos.length
    ) {
        indice = 0;
    }


    card.dataset.indice =
        indice;


    const imagem =
        card.querySelector(
            ".imagem-galeria"
        );


    const contador =
        card.querySelector(
            ".contador-fotos"
        );


    if (imagem) {
        imagem.src =
            fotos[indice].url;
    }


    if (contador) {
        contador.textContent =
            `${indice + 1} / ${fotos.length}`;
    }
}


/* INTERESSE */

function configurarInteresse() {
    document
        .querySelectorAll(
            ".botao-interesse:not(:disabled)"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        const peca =
                            pecas.find(
                                function (item) {
                                    return (
                                        item.id ===
                                        botao.dataset.id
                                    );
                                }
                            );


                        if (!peca) {
                            return;
                        }


                        abrirWhatsApp(
`Olá! Vim pelo site Madeira & Arte.

Tenho interesse na peça ${peca.codigo} - ${peca.nome}.

Gostaria de saber se ela ainda está disponível.`
                        );

                    }
                );

            }
        );
}


/* CRIAÇÃO */

async function carregarCriacao() {
    const {
        data,
        error
    } = await db
        .from(
            "criacao_etapas"
        )
        .select(`
            id,
            titulo,
            descricao,
            imagem_url,
            ordem,
            criado_em
        `)
        .eq(
            "ativo",
            true
        )
        .order(
            "ordem",
            {
                ascending: true
            }
        )
        .order(
            "criado_em",
            {
                ascending: true
            }
        );


    if (error) {
        console.error(
            "Erro ao carregar criação:",
            error
        );

        secaoCriacao.classList.add(
            "oculto"
        );

        linkCriacaoMenu.classList.add(
            "oculto"
        );

        footerCriacao.classList.add(
            "oculto"
        );

        return;
    }


    etapasCriacao =
        (data || []).filter(
            function (etapa) {
                return etapa.imagem_url;
            }
        );


    if (
        etapasCriacao.length === 0
    ) {
        secaoCriacao.classList.add(
            "oculto"
        );

        linkCriacaoMenu.classList.add(
            "oculto"
        );

        footerCriacao.classList.add(
            "oculto"
        );

        return;
    }


    indiceCriacao = 0;


    renderizarCriacao();


    secaoCriacao.classList.remove(
        "oculto"
    );

    linkCriacaoMenu.classList.remove(
        "oculto"
    );

    footerCriacao.classList.remove(
        "oculto"
    );
}


function renderizarCriacao() {
    criacaoConteudo.innerHTML = `
        <div class="criacao-experiencia">

            <div
                class="criacao-informacoes"
                aria-live="polite"
            >

                <div>

                    <span
                        id="criacao-etapa"
                        class="criacao-etapa"
                    ></span>

                    <h3 id="criacao-titulo"></h3>

                    <p id="criacao-descricao"></p>

                </div>


                <div class="criacao-progresso">

                    <span id="criacao-atual"></span>

                    <div class="criacao-linha">

                        <span
                            id="criacao-barra"
                            class="criacao-barra"
                        ></span>

                    </div>

                    <span id="criacao-total"></span>

                </div>

            </div>


            <div
                id="criacao-carrossel"
                class="criacao-carrossel"
                tabindex="0"
                aria-label="Etapas do processo artesanal"
            >

                <div class="criacao-imagem-area">

                    <img
                        id="criacao-imagem"
                        class="criacao-imagem"
                        src=""
                        alt=""
                    >

                    <div class="criacao-numero">

                        <span id="criacao-numero-atual"></span>

                        <small id="criacao-numero-total"></small>

                    </div>


                    <button
                        id="criacao-anterior"
                        class="criacao-seta anterior"
                        type="button"
                        aria-label="Etapa anterior"
                    >
                        ‹
                    </button>

                    <button
                        id="criacao-proxima"
                        class="criacao-seta proxima"
                        type="button"
                        aria-label="Próxima etapa"
                    >
                        ›
                    </button>

                </div>


                <div
                    id="criacao-pontos"
                    class="criacao-pontos"
                ></div>

            </div>

        </div>
    `;


    criarPontosCriacao();

    atualizarCriacao();

    configurarEventosCriacao();

    iniciarCarrosselCriacao();
}


function configurarEventosCriacao() {
    const carrossel =
        document.querySelector(
            "#criacao-carrossel"
        );

    const anterior =
        document.querySelector(
            "#criacao-anterior"
        );

    const proxima =
        document.querySelector(
            "#criacao-proxima"
        );


    anterior.addEventListener(
        "click",
        function () {
            mudarCriacao(
                -1,
                true
            );
        }
    );


    proxima.addEventListener(
        "click",
        function () {
            mudarCriacao(
                1,
                true
            );
        }
    );


    carrossel.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "ArrowLeft"
            ) {
                mudarCriacao(
                    -1,
                    true
                );
            }


            if (
                event.key ===
                "ArrowRight"
            ) {
                mudarCriacao(
                    1,
                    true
                );
            }

        }
    );


    carrossel.addEventListener(
        "mouseenter",
        pararCarrosselCriacao
    );


    carrossel.addEventListener(
        "mouseleave",
        iniciarCarrosselCriacao
    );


    carrossel.addEventListener(
        "touchstart",
        function (event) {

            inicioToqueCriacao =
                event.touches[0]
                    .clientX;

            pararCarrosselCriacao();

        },
        {
            passive: true
        }
    );


    carrossel.addEventListener(
        "touchend",
        function (event) {

            const distancia =
                event.changedTouches[0]
                    .clientX -
                inicioToqueCriacao;


            if (
                Math.abs(
                    distancia
                ) > 45
            ) {
                mudarCriacao(
                    distancia > 0
                        ? -1
                        : 1,
                    false
                );
            }


            iniciarCarrosselCriacao();

        },
        {
            passive: true
        }
    );
}


function criarPontosCriacao() {
    const pontos =
        document.querySelector(
            "#criacao-pontos"
        );


    pontos.innerHTML = "";


    etapasCriacao.forEach(
        function (
            etapa,
            indice
        ) {

            const ponto =
                document.createElement(
                    "button"
                );


            ponto.type =
                "button";


            ponto.className =
                "criacao-ponto";


            ponto.setAttribute(
                "aria-label",
                `Ir para etapa ${indice + 1}`
            );


            ponto.addEventListener(
                "click",
                function () {

                    indiceCriacao =
                        indice;


                    atualizarCriacao();


                    reiniciarCarrosselCriacao();

                }
            );


            pontos.appendChild(
                ponto
            );

        }
    );
}


function mudarCriacao(
    direcao,
    manual
) {
    indiceCriacao +=
        direcao;


    if (
        indiceCriacao < 0
    ) {
        indiceCriacao =
            etapasCriacao.length - 1;
    }


    if (
        indiceCriacao >=
        etapasCriacao.length
    ) {
        indiceCriacao = 0;
    }


    atualizarCriacao();


    if (manual) {
        reiniciarCarrosselCriacao();
    }
}


function atualizarCriacao() {
    const etapa =
        etapasCriacao[
            indiceCriacao
        ];


    const atual =
        formatarNumeroCriacao(
            indiceCriacao + 1
        );


    const total =
        formatarNumeroCriacao(
            etapasCriacao.length
        );


    document.querySelector(
        "#criacao-imagem"
    ).src =
        etapa.imagem_url;


    document.querySelector(
        "#criacao-imagem"
    ).alt =
        etapa.titulo;


    document.querySelector(
        "#criacao-etapa"
    ).textContent =
        `ETAPA ${atual}`;


    document.querySelector(
        "#criacao-titulo"
    ).textContent =
        etapa.titulo;


    document.querySelector(
        "#criacao-descricao"
    ).textContent =
        etapa.descricao ||
        "Acompanhe esta etapa do processo artesanal.";


    document.querySelector(
        "#criacao-atual"
    ).textContent =
        atual;


    document.querySelector(
        "#criacao-total"
    ).textContent =
        total;


    document.querySelector(
        "#criacao-numero-atual"
    ).textContent =
        atual;


    document.querySelector(
        "#criacao-numero-total"
    ).textContent =
        `/ ${total}`;


    document.querySelector(
        "#criacao-barra"
    ).style.width =
        `${
            (
                (
                    indiceCriacao +
                    1
                ) /
                etapasCriacao.length
            ) *
            100
        }%`;


    document
        .querySelectorAll(
            ".criacao-ponto"
        )
        .forEach(
            function (
                ponto,
                indice
            ) {

                ponto.classList.toggle(
                    "ativo",
                    indice ===
                        indiceCriacao
                );

            }
        );
}


function formatarNumeroCriacao(
    numero
) {
    return String(
        numero
    ).padStart(
        2,
        "0"
    );
}


function iniciarCarrosselCriacao() {
    pararCarrosselCriacao();


    if (
        etapasCriacao.length <= 1
    ) {
        return;
    }


    intervaloCriacao =
        setInterval(
            function () {

                mudarCriacao(
                    1,
                    false
                );

            },
            6500
        );
}


function pararCarrosselCriacao() {
    if (
        intervaloCriacao
    ) {
        clearInterval(
            intervaloCriacao
        );

        intervaloCriacao =
            null;
    }
}


function reiniciarCarrosselCriacao() {
    pararCarrosselCriacao();

    iniciarCarrosselCriacao();
}


/* RIFA */

async function carregarRifa() {
    const {
        data,
        error
    } = await db
        .from("rifas")
        .select(`
            *,
            rifa_fotos (
                id,
                url,
                ordem
            )
        `)
        .eq(
            "ativa",
            true
        )
        .order(
            "criado_em",
            {
                ascending: false
            }
        )
        .limit(1);


    if (
        error ||
        !data ||
        data.length === 0
    ) {
        if (error) {
            console.error(
                "Erro ao carregar rifa:",
                error
            );
        }


        secaoRifas.classList.add(
            "oculto"
        );

        linkRifaMenu.classList.add(
            "oculto"
        );

        return;
    }


    rifaAtual =
        data[0];


    rifaAtual.rifa_fotos =
        rifaAtual.rifa_fotos || [];


    rifaAtual.rifa_fotos.sort(
        function (a, b) {
            return (
                (a.ordem || 0) -
                (b.ordem || 0)
            );
        }
    );


    indiceRifa = 0;


    renderizarRifa();


    secaoRifas.classList.remove(
        "oculto"
    );

    linkRifaMenu.classList.remove(
        "oculto"
    );
}


function renderizarRifa() {
    const fotos =
        rifaAtual.rifa_fotos;


    const imagem =
        fotos.length > 0
            ? `
                <img
                    id="imagem-rifa"
                    src="${fotos[0].url}"
                    alt="${escaparHTML(
                        rifaAtual.titulo
                    )}"
                >
            `
            : `
                <div class="sem-foto">
                    Foto em breve
                </div>
            `;


    const controles =
        fotos.length > 1
            ? `
                <button
                    id="rifa-anterior"
                    class="rifa-seta anterior"
                    type="button"
                >
                    ‹
                </button>

                <button
                    id="rifa-proxima"
                    class="rifa-seta proxima"
                    type="button"
                >
                    ›
                </button>

                <span
                    id="rifa-contador"
                    class="rifa-contador"
                >
                    1 / ${fotos.length}
                </span>
            `
            : "";


    const linkSeguro =
        normalizarLink(
            rifaAtual.link
        );


    const link =
        linkSeguro
            ? `
                <a
                    href="${linkSeguro}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Participar da rifa
                </a>
            `
            : "";


    rifaConteudo.innerHTML = `
        <article class="rifa-card">

            <div class="rifa-galeria">

                ${imagem}

                ${controles}

            </div>


            <div class="rifa-info">

                <span class="etiqueta">
                    RIFA ATIVA
                </span>

                <h3>
                    ${escaparHTML(
                        rifaAtual.titulo
                    )}
                </h3>

                <p>
                    ${
                        escaparHTML(
                            rifaAtual.descricao
                        ) ||
                        "Participe e concorra a uma peça artesanal Madeira & Arte."
                    }
                </p>

                <div class="rifa-preco">

                    Valor por número

                    <strong>
                        ${formatarPreco(
                            rifaAtual.valor_numero
                        )}
                    </strong>

                </div>

                ${link}

            </div>

        </article>
    `;


    const anterior =
        document.querySelector(
            "#rifa-anterior"
        );


    const proxima =
        document.querySelector(
            "#rifa-proxima"
        );


    if (
        anterior &&
        proxima
    ) {
        anterior.addEventListener(
            "click",
            function () {
                trocarFotoRifa(
                    -1
                );
            }
        );


        proxima.addEventListener(
            "click",
            function () {
                trocarFotoRifa(
                    1
                );
            }
        );
    }
}


function trocarFotoRifa(
    direcao
) {
    const fotos =
        rifaAtual.rifa_fotos;


    indiceRifa +=
        direcao;


    if (
        indiceRifa < 0
    ) {
        indiceRifa =
            fotos.length - 1;
    }


    if (
        indiceRifa >=
        fotos.length
    ) {
        indiceRifa = 0;
    }


    document.querySelector(
        "#imagem-rifa"
    ).src =
        fotos[
            indiceRifa
        ].url;


    document.querySelector(
        "#rifa-contador"
    ).textContent =
        `${indiceRifa + 1} / ${fotos.length}`;
}


/* MODAL */

function configurarModal() {
    heroPersonalizado.addEventListener(
        "click",
        abrirModalPersonalizado
    );


    footerPersonalizado.addEventListener(
        "click",
        abrirModalPersonalizado
    );


    botaoFecharModal.addEventListener(
        "click",
        fecharModalPersonalizado
    );


    modalPersonalizado.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                modalPersonalizado
            ) {
                fecharModalPersonalizado();
            }

        }
    );


    formPersonalizado.addEventListener(
        "submit",
        enviarPersonalizado
    );
}


function abrirModalPersonalizado() {
    modalPersonalizado.classList.add(
        "ativo"
    );

    document.body.style.overflow =
        "hidden";
}


function fecharModalPersonalizado() {
    modalPersonalizado.classList.remove(
        "ativo"
    );

    document.body.style.overflow =
        "";
}


function enviarPersonalizado(
    event
) {
    event.preventDefault();


    const tipo =
        document.querySelector(
            "#tipo-personalizado"
        ).value;


    const tamanho =
        document.querySelector(
            "#tamanho-personalizado"
        ).value.trim();


    const personalizacao =
        document.querySelector(
            "#personalizacao"
        ).value.trim();


    const observacoes =
        document.querySelector(
            "#observacoes-personalizado"
        ).value.trim();


    let mensagem =
`Olá! Vim pelo site Madeira & Arte e gostaria de fazer uma peça personalizada.

Tipo de peça: ${tipo}.`;


    if (tamanho) {
        mensagem +=
`\nTamanho aproximado: ${tamanho}.`;
    }


    if (personalizacao) {
        mensagem +=
`\nPersonalização: ${personalizacao}.`;
    }


    if (observacoes) {
        mensagem +=
`\n\nMinha ideia:
${observacoes}`;
    }


    abrirWhatsApp(
        mensagem
    );
}


/* CONTATO */

function configurarContato() {
    botaoContato.addEventListener(
        "click",
        function () {

            abrirWhatsApp(
`Olá! Vim pelo site Madeira & Arte.

Gostaria de conversar sobre as peças artesanais.`
            );

        }
    );


    footerWhatsApp.addEventListener(
        "click",
        function () {

            abrirWhatsApp(
                "Olá! Vim pelo site Madeira & Arte e gostaria de mais informações."
            );

        }
    );
}


/* WHATSAPP */

function abrirWhatsApp(
    mensagem
) {
    if (
        !NUMERO_WHATSAPP ||
        NUMERO_WHATSAPP.includes(
            "X"
        )
    ) {
        mostrarToast(
            "O número de WhatsApp ainda precisa ser configurado."
        );

        return;
    }


    const url =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
            mensagem
        )}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* UTILIDADES */

function formatarPreco(
    valor
) {
    return Number(
        valor
    ).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


function normalizarLink(
    link
) {
    if (!link) {
        return null;
    }


    try {
        const url =
            new URL(
                link
            );


        if (
            url.protocol ===
                "http:" ||
            url.protocol ===
                "https:"
        ) {
            return url.href;
        }


        return null;

    } catch {
        return null;
    }
}


function escaparHTML(
    texto
) {
    if (
        texto === null ||
        texto === undefined
    ) {
        return "";
    }


    return String(texto)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
}


function estadoVazio(
    titulo,
    texto
) {
    return `
        <div class="estado-vazio">

            <h3>
                ${titulo}
            </h3>

            <p>
                ${texto}
            </p>

        </div>
    `;
}


function mostrarToast(
    mensagem
) {
    clearTimeout(
        timerToast
    );


    toast.textContent =
        mensagem;


    toast.classList.add(
        "ativo"
    );


    timerToast =
        setTimeout(
            function () {

                toast.classList.remove(
                    "ativo"
                );

            },
            4000
        );
}