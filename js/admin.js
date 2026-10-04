const login =
    document.querySelector(
        "#login"
    );

const painel =
    document.querySelector(
        "#painel"
    );

const formLogin =
    document.querySelector(
        "#form-login"
    );

const mensagemLogin =
    document.querySelector(
        "#mensagem-login"
    );

const botaoSair =
    document.querySelector(
        "#sair"
    );


const linksAdmin =
    document.querySelectorAll(
        ".menu-link"
    );

const paginasAdmin =
    document.querySelectorAll(
        ".pagina-admin"
    );


const menuAdmin =
    document.querySelector(
        "#menu-admin"
    );

const abrirMenu =
    document.querySelector(
        "#abrir-menu"
    );

const fecharMenu =
    document.querySelector(
        "#fechar-menu"
    );

const fundoMenu =
    document.querySelector(
        "#fundo-menu"
    );


const totalDisponiveis =
    document.querySelector(
        "#total-disponiveis"
    );

const totalReservadas =
    document.querySelector(
        "#total-reservadas"
    );

const totalProjetos =
    document.querySelector(
        "#total-projetos"
    );

const totalCriacao =
    document.querySelector(
        "#total-criacao"
    );

const statusRifa =
    document.querySelector(
        "#status-rifa"
    );

const ultimosCadastros =
    document.querySelector(
        "#ultimos-cadastros"
    );


const listaPecas =
    document.querySelector(
        "#lista-admin-pecas"
    );

const listaProjetos =
    document.querySelector(
        "#lista-admin-projetos"
    );

const listaCriacao =
    document.querySelector(
        "#lista-admin-criacao"
    );

const listaRifas =
    document.querySelector(
        "#lista-admin-rifas"
    );


const botaoNovaPeca =
    document.querySelector(
        "#nova-peca"
    );

const atalhoNovaPeca =
    document.querySelector(
        "#atalho-nova-peca"
    );

const novoProjeto =
    document.querySelector(
        "#novo-projeto"
    );

const botaoNovaEtapa =
    document.querySelector(
        "#nova-etapa"
    );

const botaoNovaRifa =
    document.querySelector(
        "#nova-rifa"
    );


/* PEÇA */

const modalPeca =
    document.querySelector(
        "#modal-peca"
    );

const formPeca =
    document.querySelector(
        "#form-peca"
    );

const tituloModalPeca =
    document.querySelector(
        "#titulo-modal-peca"
    );

const botaoSalvarPeca =
    document.querySelector(
        "#salvar-peca"
    );

const pecaId =
    document.querySelector(
        "#peca-id"
    );

const nomePeca =
    document.querySelector(
        "#nome-peca"
    );

const categoriaPeca =
    document.querySelector(
        "#categoria-peca"
    );

const descricaoPeca =
    document.querySelector(
        "#descricao-peca"
    );

const precoPeca =
    document.querySelector(
        "#preco-peca"
    );

const parcelamentoPeca =
    document.querySelector(
        "#parcelamento-peca"
    );

const statusPeca =
    document.querySelector(
        "#status-peca"
    );

const fotosPeca =
    document.querySelector(
        "#fotos-peca"
    );

const areaFotosExistentes =
    document.querySelector(
        "#area-fotos-existentes"
    );

const fotosExistentes =
    document.querySelector(
        "#fotos-existentes"
    );


/* CRIAÇÃO */

const modalEtapa =
    document.querySelector(
        "#modal-etapa"
    );

const formEtapa =
    document.querySelector(
        "#form-etapa"
    );

const tituloModalEtapa =
    document.querySelector(
        "#titulo-modal-etapa"
    );

const botaoSalvarEtapa =
    document.querySelector(
        "#salvar-etapa"
    );

const etapaId =
    document.querySelector(
        "#etapa-id"
    );

const tituloEtapa =
    document.querySelector(
        "#titulo-etapa"
    );

const descricaoEtapa =
    document.querySelector(
        "#descricao-etapa"
    );

const ordemEtapa =
    document.querySelector(
        "#ordem-etapa"
    );

const ativoEtapa =
    document.querySelector(
        "#ativo-etapa"
    );

const fotoEtapa =
    document.querySelector(
        "#foto-etapa"
    );

const fotoEtapaAtual =
    document.querySelector(
        "#foto-etapa-atual"
    );

const previewEtapa =
    document.querySelector(
        "#preview-etapa"
    );


/* RIFA */

const modalRifa =
    document.querySelector(
        "#modal-rifa"
    );

const formRifa =
    document.querySelector(
        "#form-rifa"
    );

const tituloModalRifa =
    document.querySelector(
        "#titulo-modal-rifa"
    );

const botaoSalvarRifa =
    document.querySelector(
        "#salvar-rifa"
    );

const rifaId =
    document.querySelector(
        "#rifa-id"
    );

const tituloRifa =
    document.querySelector(
        "#titulo-rifa"
    );

const descricaoRifa =
    document.querySelector(
        "#descricao-rifa"
    );

const valorRifa =
    document.querySelector(
        "#valor-rifa"
    );

const linkRifa =
    document.querySelector(
        "#link-rifa"
    );

const rifaAtiva =
    document.querySelector(
        "#rifa-ativa"
    );

const fotosRifa =
    document.querySelector(
        "#fotos-rifa"
    );

const areaFotosRifa =
    document.querySelector(
        "#area-fotos-rifa"
    );

const fotosRifaExistentes =
    document.querySelector(
        "#fotos-rifa-existentes"
    );


/* CONFIRMAÇÃO */

const modalConfirmacao =
    document.querySelector(
        "#modal-confirmacao"
    );

const textoConfirmacao =
    document.querySelector(
        "#texto-confirmacao"
    );

const cancelarConfirmacao =
    document.querySelector(
        "#cancelar-confirmacao"
    );

const confirmarExclusao =
    document.querySelector(
        "#confirmar-exclusao"
    );

const toast =
    document.querySelector(
        "#toast"
    );


let pecasCache = [];

let criacaoCache = [];

let rifasCache = [];

let acaoConfirmada =
    null;

let timerToast;


iniciar();


async function iniciar() {
    configurarEventos();

    await verificarLogin();
}


/* EVENTOS */

function configurarEventos() {

    formLogin.addEventListener(
        "submit",
        fazerLogin
    );


    botaoSair.addEventListener(
        "click",
        sair
    );


    linksAdmin.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    abrirPagina(
                        link.dataset.pagina
                    );

                }
            );

        }
    );


    abrirMenu.addEventListener(
        "click",
        abrirMenuMobile
    );


    fecharMenu.addEventListener(
        "click",
        fecharMenuMobile
    );


    fundoMenu.addEventListener(
        "click",
        fecharMenuMobile
    );


    botaoNovaPeca.addEventListener(
        "click",
        abrirModalNovaPeca
    );


    atalhoNovaPeca.addEventListener(
        "click",
        abrirModalNovaPeca
    );


    novoProjeto.addEventListener(
        "click",
        abrirModalNovoProjeto
    );


    botaoNovaEtapa.addEventListener(
        "click",
        abrirModalNovaEtapa
    );


    botaoNovaRifa.addEventListener(
        "click",
        abrirModalNovaRifa
    );


    formPeca.addEventListener(
        "submit",
        salvarPeca
    );


    formEtapa.addEventListener(
        "submit",
        salvarEtapa
    );


    formRifa.addEventListener(
        "submit",
        salvarRifa
    );


    document
        .querySelectorAll(
            ".fechar-peca"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        fecharModal(
                            modalPeca
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".fechar-etapa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        fecharModal(
                            modalEtapa
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".fechar-rifa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        fecharModal(
                            modalRifa
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".fechar-modal"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        const modal =
                            document.querySelector(
                                `#${botao.dataset.fechar}`
                            );


                        if (modal) {
                            fecharModal(
                                modal
                            );
                        }

                    }
                );

            }
        );


    cancelarConfirmacao.addEventListener(
        "click",
        function () {

            acaoConfirmada =
                null;


            fecharModal(
                modalConfirmacao
            );

        }
    );


    confirmarExclusao.addEventListener(
        "click",
        async function () {

            if (
                !acaoConfirmada
            ) {
                return;
            }


            const acao =
                acaoConfirmada;


            acaoConfirmada =
                null;


            confirmarExclusao.disabled =
                true;


            confirmarExclusao.textContent =
                "Excluindo...";


            try {

                await acao();


                fecharModal(
                    modalConfirmacao
                );

            } finally {

                confirmarExclusao.disabled =
                    false;


                confirmarExclusao.textContent =
                    "Excluir";

            }

        }
    );


    document
        .querySelector(
            "#ver-todas-pecas"
        )
        .addEventListener(
            "click",
            function () {

                abrirPagina(
                    "pecas"
                );

            }
        );


    [
        modalPeca,
        modalEtapa,
        modalRifa,
        modalConfirmacao
    ].forEach(
        function (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        modal
                    ) {
                        fecharModal(
                            modal
                        );
                    }

                }
            );

        }
    );
}


/* LOGIN */

async function verificarLogin() {

    const {
        data,
        error
    } =
        await db.auth
            .getSession();


    if (error) {

        console.error(
            "Erro ao verificar sessão:",
            error
        );


        mostrarLogin();


        return;
    }


    if (
        !data.session
    ) {

        mostrarLogin();


        return;
    }


    const admin =
        await verificarAdmin();


    if (!admin) {

        await db.auth
            .signOut();


        mostrarLogin();


        return;
    }


    await abrirPainel();
}


async function fazerLogin(
    event
) {

    event.preventDefault();


    mensagemLogin.textContent =
        "Entrando...";


    const email =
        document.querySelector(
            "#email"
        ).value.trim();


    const senha =
        document.querySelector(
            "#senha"
        ).value;


    const {
        error
    } =
        await db.auth
            .signInWithPassword({
                email:
                    email,

                password:
                    senha
            });


    if (error) {

        mensagemLogin.textContent =
            "E-mail ou senha incorretos.";


        return;
    }


    const admin =
        await verificarAdmin();


    if (!admin) {

        await db.auth
            .signOut();


        mensagemLogin.textContent =
            "Esse usuário não possui acesso administrativo.";


        return;
    }


    mensagemLogin.textContent =
        "";


    await abrirPainel();
}


async function verificarAdmin() {

    const {
        data,
        error
    } =
        await db.rpc(
            "is_admin"
        );


    if (error) {

        console.error(
            "Erro ao verificar administrador:",
            error
        );


        return false;
    }


    return (
        data ===
        true
    );
}


function mostrarLogin() {

    painel.classList.add(
        "oculto"
    );


    login.classList.remove(
        "oculto"
    );
}


async function abrirPainel() {

    login.classList.add(
        "oculto"
    );


    painel.classList.remove(
        "oculto"
    );


    await atualizarPainel();
}


async function sair() {

    await db.auth
        .signOut();


    formLogin.reset();


    mostrarLogin();
}


/* NAVEGAÇÃO */

function abrirPagina(
    pagina
) {

    paginasAdmin.forEach(
        function (item) {

            item.classList.remove(
                "ativa"
            );

        }
    );


    linksAdmin.forEach(
        function (item) {

            item.classList.remove(
                "ativo"
            );

        }
    );


    const paginaSelecionada =
        document.querySelector(
            `#${pagina}`
        );


    const linkSelecionado =
        document.querySelector(
            `.menu-link[data-pagina="${pagina}"]`
        );


    if (
        paginaSelecionada
    ) {

        paginaSelecionada.classList.add(
            "ativa"
        );

    }


    if (
        linkSelecionado
    ) {

        linkSelecionado.classList.add(
            "ativo"
        );

    }


    fecharMenuMobile();


    window.scrollTo({
        top:
            0,

        behavior:
            "smooth"
    });
}


function abrirMenuMobile() {

    menuAdmin.classList.add(
        "aberto"
    );


    fundoMenu.classList.add(
        "ativo"
    );
}


function fecharMenuMobile() {

    menuAdmin.classList.remove(
        "aberto"
    );


    fundoMenu.classList.remove(
        "ativo"
    );
}


/* CARREGAMENTO */

async function atualizarPainel() {

    await Promise.all([
        carregarPecas(),
        carregarCriacao(),
        carregarRifas()
    ]);


    atualizarResumo();


    renderizarPecas();


    renderizarProjetos();


    renderizarCriacao();


    renderizarRifas();


    renderizarRecentes();
}


async function carregarPecas() {

    const {
        data,
        error
    } = await db
        .from(
            "pecas"
        )
        .select(`
            *,
            peca_fotos (
                id,
                url,
                caminho,
                ordem
            )
        `)
        .order(
            "criado_em",
            {
                ascending:
                    false
            }
        );


    if (error) {

        console.error(
            "Erro ao carregar peças:",
            error
        );


        mostrarToast(
            "Não foi possível carregar as peças.",
            "erro"
        );


        return;
    }


    pecasCache =
        data || [];


    pecasCache.forEach(
        function (peca) {

            peca.peca_fotos =
                peca.peca_fotos ||
                [];


            peca.peca_fotos.sort(
                function (
                    a,
                    b
                ) {

                    return (
                        (
                            Number(
                                a.ordem
                            ) ||
                            0
                        )
                        -
                        (
                            Number(
                                b.ordem
                            ) ||
                            0
                        )
                    );

                }
            );

        }
    );
}


async function carregarCriacao() {

    const {
        data,
        error
    } = await db
        .from(
            "criacao_etapas"
        )
        .select(
            "*"
        )
        .order(
            "ordem",
            {
                ascending:
                    true
            }
        )
        .order(
            "criado_em",
            {
                ascending:
                    true
            }
        );


    if (error) {

        console.error(
            "Erro ao carregar criação:",
            error
        );


        mostrarToast(
            "Não foi possível carregar as etapas da criação.",
            "erro"
        );


        return;
    }


    criacaoCache =
        data || [];
}


async function carregarRifas() {

    const {
        data,
        error
    } = await db
        .from(
            "rifas"
        )
        .select(`
            *,
            rifa_fotos (
                id,
                url,
                caminho,
                ordem
            )
        `)
        .order(
            "criado_em",
            {
                ascending:
                    false
            }
        );


    if (error) {

        console.error(
            "Erro ao carregar rifas:",
            error
        );


        mostrarToast(
            "Não foi possível carregar as rifas.",
            "erro"
        );


        return;
    }


    rifasCache =
        data || [];


    rifasCache.forEach(
        function (rifa) {

            rifa.rifa_fotos =
                rifa.rifa_fotos ||
                [];


            rifa.rifa_fotos.sort(
                function (
                    a,
                    b
                ) {

                    return (
                        (
                            Number(
                                a.ordem
                            ) ||
                            0
                        )
                        -
                        (
                            Number(
                                b.ordem
                            ) ||
                            0
                        )
                    );

                }
            );

        }
    );
}


function atualizarResumo() {

    totalDisponiveis.textContent =
        pecasCache.filter(
            function (peca) {

                return (
                    peca.status ===
                    "disponivel"
                );

            }
        ).length;


    totalReservadas.textContent =
        pecasCache.filter(
            function (peca) {

                return (
                    peca.status ===
                    "reservada"
                );

            }
        ).length;


    totalProjetos.textContent =
        pecasCache.filter(
            function (peca) {

                return (
                    peca.status ===
                        "projeto"
                    ||
                    peca.status ===
                        "vendida"
                );

            }
        ).length;


    totalCriacao.textContent =
        criacaoCache.filter(
            function (etapa) {

                return (
                    etapa.ativo ===
                    true
                );

            }
        ).length;


    statusRifa.textContent =
        rifasCache.some(
            function (rifa) {

                return (
                    rifa.ativa ===
                    true
                );

            }
        )
            ? "Sim"
            : "Não";
}


/* PEÇAS */

function renderizarPecas() {

    const pecas =
        pecasCache.filter(
            function (peca) {

                return (
                    peca.status !==
                        "projeto"
                    &&
                    peca.status !==
                        "vendida"
                );

            }
        );


    if (
        pecas.length ===
        0
    ) {

        listaPecas.innerHTML =
            estadoVazio(
                "Nenhuma peça cadastrada",
                "Cadastre a primeira peça para começar a montar o catálogo."
            );


        return;
    }


    listaPecas.innerHTML =
        pecas
            .map(
                criarCardPeca
            )
            .join(
                ""
            );


    configurarBotoesPecas(
        listaPecas
    );
}


function renderizarProjetos() {

    const projetos =
        pecasCache.filter(
            function (peca) {

                return (
                    peca.status ===
                        "projeto"
                    ||
                    peca.status ===
                        "vendida"
                );

            }
        );


    if (
        projetos.length ===
        0
    ) {

        listaProjetos.innerHTML =
            estadoVazio(
                "Nenhum projeto ainda",
                "Peças vendidas e projetos realizados aparecerão aqui."
            );


        return;
    }


    listaProjetos.innerHTML =
        projetos
            .map(
                criarCardPeca
            )
            .join(
                ""
            );


    configurarBotoesPecas(
        listaProjetos
    );
}


function criarCardPeca(
    peca
) {

    const foto =
        peca.peca_fotos[0]?.url;


    const imagem =
        foto
            ? `
                <img
                    src="${foto}"
                    alt="${escaparHTML(
                        peca.nome
                    )}"
                >
            `
            : `
                <div class="sem-imagem">
                    Sem foto
                </div>
            `;


    const preco =
        peca.preco_vista
            ? formatarPreco(
                peca.preco_vista
            )
            : "Sem preço informado";


    return `
        <article class="card-admin">

            <div class="card-imagem">

                ${imagem}

                <span class="card-codigo">
                    ${escaparHTML(
                        peca.codigo
                    )}
                </span>

            </div>


            <div class="card-conteudo">

                <div class="card-linha">

                    <span
                        class="status ${peca.status}"
                    >
                        ${formatarStatus(
                            peca.status
                        )}
                    </span>

                    <small>
                        ${peca.peca_fotos.length}
                        foto(s)
                    </small>

                </div>


                <h3>
                    ${escaparHTML(
                        peca.nome
                    )}
                </h3>


                <p class="card-categoria">
                    ${escaparHTML(
                        peca.categoria
                    )}
                </p>


                <strong class="card-preco">
                    ${preco}
                </strong>


                <div class="card-acoes">

                    <button
                        type="button"
                        class="botao-card editar-peca"
                        data-id="${peca.id}"
                    >
                        Editar
                    </button>


                    <button
                        type="button"
                        class="botao-card excluir excluir-peca"
                        data-id="${peca.id}"
                    >
                        Excluir
                    </button>

                </div>

            </div>

        </article>
    `;
}


function configurarBotoesPecas(
    container
) {

    container
        .querySelectorAll(
            ".editar-peca"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        abrirModalEditarPeca(
                            botao.dataset.id
                        );

                    }
                );

            }
        );


    container
        .querySelectorAll(
            ".excluir-peca"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        solicitarExclusaoPeca(
                            botao.dataset.id
                        );

                    }
                );

            }
        );
}


/* RECENTES */

function renderizarRecentes() {

    const recentes =
        pecasCache.slice(
            0,
            5
        );


    if (
        recentes.length ===
        0
    ) {

        ultimosCadastros.className =
            "";


        ultimosCadastros.innerHTML =
            estadoVazio(
                "Nenhum cadastro",
                "As peças cadastradas aparecerão aqui."
            );


        return;
    }


    ultimosCadastros.className =
        "lista-recentes";


    ultimosCadastros.innerHTML =
        recentes
            .map(
                function (peca) {

                    const foto =
                        peca.peca_fotos[0]?.url;


                    const imagem =
                        foto
                            ? `
                                <img
                                    src="${foto}"
                                    alt="${escaparHTML(
                                        peca.nome
                                    )}"
                                >
                            `
                            : `
                                <div class="mini-sem-foto">
                                    FOTO
                                </div>
                            `;


                    return `
                        <div class="item-recente">

                            ${imagem}

                            <div>

                                <strong>
                                    ${escaparHTML(
                                        peca.nome
                                    )}
                                </strong>

                                <small>
                                    ${escaparHTML(
                                        peca.codigo
                                    )}
                                    ·
                                    ${escaparHTML(
                                        peca.categoria
                                    )}
                                </small>

                            </div>


                            <span
                                class="status ${peca.status}"
                            >
                                ${formatarStatus(
                                    peca.status
                                )}
                            </span>

                        </div>
                    `;

                }
            )
            .join(
                ""
            );
}


/* MODAL PEÇA */

function abrirModalNovaPeca() {

    formPeca.reset();


    pecaId.value =
        "";


    tituloModalPeca.textContent =
        "Nova peça";


    statusPeca.value =
        "disponivel";


    areaFotosExistentes.classList.add(
        "oculto"
    );


    fotosExistentes.innerHTML =
        "";


    abrirModal(
        modalPeca
    );
}


function abrirModalNovoProjeto() {

    abrirModalNovaPeca();


    tituloModalPeca.textContent =
        "Novo projeto";


    statusPeca.value =
        "projeto";
}


function abrirModalEditarPeca(
    id
) {

    const peca =
        pecasCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!peca) {

        return;

    }


    formPeca.reset();


    pecaId.value =
        peca.id;


    nomePeca.value =
        peca.nome ||
        "";


    categoriaPeca.value =
        peca.categoria ||
        "";


    descricaoPeca.value =
        peca.descricao ||
        "";


    precoPeca.value =
        peca.preco_vista ??
        "";


    parcelamentoPeca.value =
        peca.parcelamento ||
        "";


    statusPeca.value =
        peca.status;


    tituloModalPeca.textContent =
        `${peca.codigo} — Editar peça`;


    renderizarFotosPeca(
        peca.peca_fotos
    );


    abrirModal(
        modalPeca
    );
}


function renderizarFotosPeca(
    fotos
) {

    if (
        !fotos ||
        fotos.length ===
        0
    ) {

        areaFotosExistentes.classList.add(
            "oculto"
        );


        fotosExistentes.innerHTML =
            "";


        return;
    }


    areaFotosExistentes.classList.remove(
        "oculto"
    );


    fotosExistentes.innerHTML =
        fotos
            .map(
                function (foto) {

                    return `
                        <div class="foto-existente">

                            <img
                                src="${foto.url}"
                                alt="Foto da peça"
                            >

                            <button
                                type="button"
                                class="remover-foto remover-foto-peca"
                                data-id="${foto.id}"
                            >
                                ×
                            </button>

                        </div>
                    `;

                }
            )
            .join(
                ""
            );


    fotosExistentes
        .querySelectorAll(
            ".remover-foto-peca"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        confirmarAcao(
                            "Excluir esta foto?",
                            "A imagem será apagada permanentemente do armazenamento.",
                            async function () {

                                await excluirFotoPeca(
                                    botao.dataset.id
                                );

                            }
                        );

                    }
                );

            }
        );
}


/* SALVAR PEÇA */

async function salvarPeca(
    event
) {

    event.preventDefault();


    const id =
        pecaId.value;


    const pecaAnterior =
        pecasCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    botaoSalvarPeca.disabled =
        true;


    botaoSalvarPeca.textContent =
        "Salvando...";


    try {

        let codigo;


        if (
            pecaAnterior
        ) {

            codigo =
                pecaAnterior.categoria !==
                categoriaPeca.value

                    ? await gerarCodigo(
                        categoriaPeca.value
                    )

                    : pecaAnterior.codigo;

        } else {

            codigo =
                await gerarCodigo(
                    categoriaPeca.value
                );

        }


        const dados = {

            codigo:
                codigo,

            nome:
                nomePeca.value.trim(),

            categoria:
                categoriaPeca.value,

            descricao:
                descricaoPeca.value.trim() ||
                null,

            preco_vista:
                precoPeca.value

                    ? Number(
                        precoPeca.value
                    )

                    : null,

            parcelamento:
                parcelamentoPeca.value.trim() ||
                null,

            status:
                statusPeca.value

        };


        let pecaSalva;


        if (id) {

            const {
                data,
                error
            } = await db
                .from(
                    "pecas"
                )
                .update(
                    dados
                )
                .eq(
                    "id",
                    id
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            pecaSalva =
                data;

        } else {

            const {
                data,
                error
            } = await db
                .from(
                    "pecas"
                )
                .insert(
                    dados
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            pecaSalva =
                data;

        }


        const arquivos =
            Array.from(
                fotosPeca.files
            );


        if (
            arquivos.length >
            0
        ) {

            await enviarFotosPeca(
                arquivos,
                pecaSalva.id
            );

        }


        fecharModal(
            modalPeca
        );


        await atualizarPainel();


        mostrarToast(
            id
                ? "Peça atualizada com sucesso."
                : `${codigo} cadastrada com sucesso.`,
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao salvar peça:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Não foi possível salvar a peça.",
            "erro"
        );

    } finally {

        botaoSalvarPeca.disabled =
            false;


        botaoSalvarPeca.textContent =
            "Salvar peça";

    }
}


/* GERAR CÓDIGO */

async function gerarCodigo(
    categoria
) {

    const prefixos = {

        "Tábua":
            "T",

        "Gamela":
            "G",

        "Mesa":
            "M",

        "Outro":
            "O"

    };


    const prefixo =
        prefixos[
            categoria
        ];


    if (
        !prefixo
    ) {

        throw new Error(
            "Categoria inválida."
        );

    }


    const {
        data,
        error
    } = await db
        .from(
            "pecas"
        )
        .select(
            "codigo"
        )
        .like(
            "codigo",
            `${prefixo}%`
        );


    if (error) {

        throw error;

    }


    let maior =
        0;


    (
        data ||
        []
    ).forEach(
        function (peca) {

            const numero =
                Number(
                    peca.codigo.substring(
                        1
                    )
                );


            if (
                !Number.isNaN(
                    numero
                )
                &&
                numero >
                maior
            ) {

                maior =
                    numero;

            }

        }
    );


    return (
        prefixo
        +
        String(
            maior + 1
        ).padStart(
            3,
            "0"
        )
    );
}


/* UPLOAD PEÇA */

async function enviarFotosPeca(
    arquivos,
    idPeca
) {

    const {
        data:
            fotosAtuais,

        error:
            erroFotos
    } = await db
        .from(
            "peca_fotos"
        )
        .select(
            "ordem"
        )
        .eq(
            "peca_id",
            idPeca
        );


    if (
        erroFotos
    ) {

        throw erroFotos;

    }


    let proximaOrdem =
        0;


    if (
        fotosAtuais
        &&
        fotosAtuais.length >
        0
    ) {

        proximaOrdem =
            Math.max(
                ...fotosAtuais.map(
                    function (foto) {

                        return (
                            Number(
                                foto.ordem
                            )
                            ||
                            0
                        );

                    }
                )
            )
            +
            1;

    }


    for (
        let i = 0;
        i < arquivos.length;
        i++
    ) {

        const arquivo =
            arquivos[i];


        validarImagem(
            arquivo
        );


        const caminho =
            criarCaminhoArquivo(
                "pecas",
                idPeca,
                arquivo,
                i
            );


        const {
            error:
                erroUpload
        } =
            await db.storage
                .from(
                    "imagens"
                )
                .upload(
                    caminho,
                    arquivo,
                    {
                        cacheControl:
                            "3600",

                        upsert:
                            false
                    }
                );


        if (
            erroUpload
        ) {

            throw erroUpload;

        }


        const {
            data:
                urlData
        } =
            db.storage
                .from(
                    "imagens"
                )
                .getPublicUrl(
                    caminho
                );


        const {
            error:
                erroBanco
        } = await db
            .from(
                "peca_fotos"
            )
            .insert({

                peca_id:
                    idPeca,

                url:
                    urlData.publicUrl,

                caminho:
                    caminho,

                ordem:
                    proximaOrdem +
                    i

            });


        if (
            erroBanco
        ) {

            await db.storage
                .from(
                    "imagens"
                )
                .remove([
                    caminho
                ]);


            throw erroBanco;

        }

    }
}


/* EXCLUIR FOTO PEÇA */

async function excluirFotoPeca(
    idFoto
) {

    const peca =
        pecasCache.find(
            function (item) {

                return item
                    .peca_fotos
                    .some(
                        function (foto) {

                            return (
                                foto.id ===
                                idFoto
                            );

                        }
                    );

            }
        );


    if (!peca) {

        return;

    }


    const foto =
        peca.peca_fotos.find(
            function (item) {

                return (
                    item.id ===
                    idFoto
                );

            }
        );


    if (!foto) {

        return;

    }


    try {

        const caminho =
            obterCaminhoFoto(
                foto
            );


        if (
            caminho
        ) {

            const {
                error:
                    erroStorage
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove([
                        caminho
                    ]);


            if (
                erroStorage
            ) {

                console.warn(
                    "Não foi possível remover a foto do Storage:",
                    erroStorage
                );

            }

        }


        const {
            error
        } = await db
            .from(
                "peca_fotos"
            )
            .delete()
            .eq(
                "id",
                idFoto
            );


        if (
            error
        ) {

            throw error;

        }


        await carregarPecas();


        const atualizada =
            pecasCache.find(
                function (item) {

                    return (
                        item.id ===
                        peca.id
                    );

                }
            );


        renderizarFotosPeca(
            atualizada
                ? atualizada.peca_fotos
                : []
        );


        atualizarResumo();


        renderizarPecas();


        renderizarProjetos();


        renderizarRecentes();


        mostrarToast(
            "Foto excluída.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao excluir foto da peça:",
            erro
        );


        mostrarToast(
            "Não foi possível excluir a foto.",
            "erro"
        );

    }
}


/* EXCLUIR PEÇA */

function solicitarExclusaoPeca(
    id
) {

    const peca =
        pecasCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!peca) {

        return;

    }


    confirmarAcao(
        `Excluir ${peca.codigo} - ${peca.nome}?`,
        "A peça e todas as fotos relacionadas serão apagadas permanentemente.",
        async function () {

            await excluirPeca(
                peca
            );

        }
    );
}


async function excluirPeca(
    peca
) {

    try {

        const caminhos =
            peca.peca_fotos
                .map(
                    obterCaminhoFoto
                )
                .filter(
                    Boolean
                );


        if (
            caminhos.length >
            0
        ) {

            const {
                error:
                    erroStorage
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove(
                        caminhos
                    );


            if (
                erroStorage
            ) {

                console.warn(
                    "Não foi possível limpar todas as fotos do Storage:",
                    erroStorage
                );

            }

        }


        const {
            error
        } = await db
            .from(
                "pecas"
            )
            .delete()
            .eq(
                "id",
                peca.id
            );


        if (
            error
        ) {

            throw error;

        }


        await atualizarPainel();


        mostrarToast(
            `${peca.codigo} foi excluída.`,
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao excluir peça:",
            erro
        );


        mostrarToast(
            "Não foi possível excluir a peça.",
            "erro"
        );

    }
}


/* CRIAÇÃO */

function renderizarCriacao() {

    if (
        criacaoCache.length ===
        0
    ) {

        listaCriacao.innerHTML =
            estadoVazio(
                "Nenhuma etapa cadastrada",
                "Cadastre fotos do processo de criação para montar o carrossel do site."
            );


        return;
    }


    listaCriacao.innerHTML =
        criacaoCache
            .map(
                function (etapa) {

                    const imagem =
                        etapa.imagem_url
                            ? `
                                <img
                                    src="${etapa.imagem_url}"
                                    alt="${escaparHTML(
                                        etapa.titulo
                                    )}"
                                >
                            `
                            : `
                                <div class="sem-imagem">
                                    Sem foto
                                </div>
                            `;


                    return `
                        <article class="card-admin">

                            <div class="card-imagem">

                                ${imagem}

                                <span class="etapa-ordem">
                                    ORDEM
                                    ${String(
                                        etapa.ordem
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                            </div>


                            <div class="card-conteudo">

                                <div class="card-linha">

                                    <span
                                        class="
                                            status
                                            ${
                                                etapa.ativo
                                                    ? "ativo"
                                                    : "inativo"
                                            }
                                        "
                                    >
                                        ${
                                            etapa.ativo
                                                ? "Ativa"
                                                : "Oculta"
                                        }
                                    </span>

                                    <small>
                                        Ordem
                                        ${etapa.ordem}
                                    </small>

                                </div>


                                <h3>
                                    ${escaparHTML(
                                        etapa.titulo
                                    )}
                                </h3>


                                <p class="card-descricao">
                                    ${
                                        escaparHTML(
                                            etapa.descricao
                                        )
                                        ||
                                        "Sem descrição."
                                    }
                                </p>


                                <div class="card-acoes">

                                    <button
                                        type="button"
                                        class="botao-card editar-etapa"
                                        data-id="${etapa.id}"
                                    >
                                        Editar
                                    </button>


                                    <button
                                        type="button"
                                        class="botao-card excluir excluir-etapa"
                                        data-id="${etapa.id}"
                                    >
                                        Excluir
                                    </button>

                                </div>

                            </div>

                        </article>
                    `;

                }
            )
            .join(
                ""
            );


    listaCriacao
        .querySelectorAll(
            ".editar-etapa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        abrirModalEditarEtapa(
                            botao.dataset.id
                        );

                    }
                );

            }
        );


    listaCriacao
        .querySelectorAll(
            ".excluir-etapa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        solicitarExclusaoEtapa(
                            botao.dataset.id
                        );

                    }
                );

            }
        );
}


function abrirModalNovaEtapa() {

    formEtapa.reset();


    etapaId.value =
        "";


    tituloModalEtapa.textContent =
        "Nova etapa";


    ativoEtapa.checked =
        true;


    fotoEtapaAtual.classList.add(
        "oculto"
    );


    previewEtapa.innerHTML =
        "";


    const maiorOrdem =
        criacaoCache.reduce(
            function (
                maior,
                etapa
            ) {

                return Math.max(
                    maior,
                    Number(
                        etapa.ordem
                    ) ||
                    0
                );

            },
            0
        );


    ordemEtapa.value =
        maiorOrdem +
        1;


    abrirModal(
        modalEtapa
    );
}


function abrirModalEditarEtapa(
    id
) {

    const etapa =
        criacaoCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!etapa) {

        return;

    }


    formEtapa.reset();


    etapaId.value =
        etapa.id;


    tituloEtapa.value =
        etapa.titulo ||
        "";


    descricaoEtapa.value =
        etapa.descricao ||
        "";


    ordemEtapa.value =
        etapa.ordem ||
        1;


    ativoEtapa.checked =
        etapa.ativo ===
        true;


    tituloModalEtapa.textContent =
        "Editar etapa";


    if (
        etapa.imagem_url
    ) {

        fotoEtapaAtual.classList.remove(
            "oculto"
        );


        previewEtapa.innerHTML = `
            <img
                src="${etapa.imagem_url}"
                alt="${escaparHTML(
                    etapa.titulo
                )}"
            >
        `;

    } else {

        fotoEtapaAtual.classList.add(
            "oculto"
        );


        previewEtapa.innerHTML =
            "";

    }


    abrirModal(
        modalEtapa
    );
}


async function salvarEtapa(
    event
) {

    event.preventDefault();


    const id =
        etapaId.value;


    const etapaAnterior =
        criacaoCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    const arquivo =
        fotoEtapa.files[0];


    if (
        !id
        &&
        !arquivo
    ) {

        mostrarToast(
            "Escolha uma foto para a nova etapa.",
            "erro"
        );


        return;
    }


    botaoSalvarEtapa.disabled =
        true;


    botaoSalvarEtapa.textContent =
        "Salvando...";


    try {

        const dados = {

            titulo:
                tituloEtapa.value.trim(),

            descricao:
                descricaoEtapa.value.trim() ||
                null,

            ordem:
                Number(
                    ordemEtapa.value
                ),

            ativo:
                ativoEtapa.checked

        };


        let etapaSalva;


        if (id) {

            const {
                data,
                error
            } = await db
                .from(
                    "criacao_etapas"
                )
                .update(
                    dados
                )
                .eq(
                    "id",
                    id
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            etapaSalva =
                data;

        } else {

            const {
                data,
                error
            } = await db
                .from(
                    "criacao_etapas"
                )
                .insert(
                    dados
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            etapaSalva =
                data;

        }


        if (
            arquivo
        ) {

            try {

                await salvarImagemEtapa(
                    etapaSalva.id,
                    arquivo,
                    etapaAnterior
                );

            } catch (
                erroImagem
            ) {

                if (!id) {

                    await db
                        .from(
                            "criacao_etapas"
                        )
                        .delete()
                        .eq(
                            "id",
                            etapaSalva.id
                        );

                }


                throw erroImagem;

            }

        }


        fecharModal(
            modalEtapa
        );


        await atualizarPainel();


        mostrarToast(
            id
                ? "Etapa atualizada com sucesso."
                : "Etapa cadastrada com sucesso.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao salvar etapa:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Não foi possível salvar a etapa.",
            "erro"
        );

    } finally {

        botaoSalvarEtapa.disabled =
            false;


        botaoSalvarEtapa.textContent =
            "Salvar etapa";

    }
}


async function salvarImagemEtapa(
    idEtapa,
    arquivo,
    etapaAnterior
) {

    validarImagem(
        arquivo
    );


    const caminhoNovo =
        criarCaminhoArquivo(
            "criacao",
            idEtapa,
            arquivo,
            0
        );


    const {
        error:
            erroUpload
    } =
        await db.storage
            .from(
                "imagens"
            )
            .upload(
                caminhoNovo,
                arquivo,
                {
                    cacheControl:
                        "3600",

                    upsert:
                        false
                }
            );


    if (
        erroUpload
    ) {

        throw erroUpload;

    }


    const {
        data:
            urlData
    } =
        db.storage
            .from(
                "imagens"
            )
            .getPublicUrl(
                caminhoNovo
            );


    const {
        error:
            erroBanco
    } = await db
        .from(
            "criacao_etapas"
        )
        .update({

            imagem_url:
                urlData.publicUrl,

            caminho:
                caminhoNovo

        })
        .eq(
            "id",
            idEtapa
        );


    if (
        erroBanco
    ) {

        await db.storage
            .from(
                "imagens"
            )
            .remove([
                caminhoNovo
            ]);


        throw erroBanco;

    }


    if (
        etapaAnterior
    ) {

        const caminhoAntigo =
            etapaAnterior.caminho
            ||
            obterCaminhoPorUrl(
                etapaAnterior.imagem_url
            );


        if (
            caminhoAntigo
            &&
            caminhoAntigo !==
            caminhoNovo
        ) {

            const {
                error:
                    erroRemover
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove([
                        caminhoAntigo
                    ]);


            if (
                erroRemover
            ) {

                console.warn(
                    "A foto antiga não pôde ser removida:",
                    erroRemover
                );

            }

        }

    }
}


function solicitarExclusaoEtapa(
    id
) {

    const etapa =
        criacaoCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!etapa) {

        return;

    }


    confirmarAcao(
        `Excluir etapa "${etapa.titulo}"?`,
        "A etapa e a foto serão apagadas permanentemente.",
        async function () {

            await excluirEtapa(
                etapa
            );

        }
    );
}


async function excluirEtapa(
    etapa
) {

    try {

        const caminho =
            etapa.caminho
            ||
            obterCaminhoPorUrl(
                etapa.imagem_url
            );


        if (
            caminho
        ) {

            const {
                error:
                    erroStorage
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove([
                        caminho
                    ]);


            if (
                erroStorage
            ) {

                console.warn(
                    "Não foi possível remover a foto da etapa do Storage:",
                    erroStorage
                );

            }

        }


        const {
            error
        } = await db
            .from(
                "criacao_etapas"
            )
            .delete()
            .eq(
                "id",
                etapa.id
            );


        if (
            error
        ) {

            throw error;

        }


        await atualizarPainel();


        mostrarToast(
            "Etapa excluída.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao excluir etapa:",
            erro
        );


        mostrarToast(
            "Não foi possível excluir a etapa.",
            "erro"
        );

    }
}


/* RIFAS */

function renderizarRifas() {

    if (
        rifasCache.length ===
        0
    ) {

        listaRifas.innerHTML =
            estadoVazio(
                "Nenhuma rifa cadastrada",
                "Cadastre uma rifa para divulgá-la no site."
            );


        return;
    }


    listaRifas.innerHTML =
        rifasCache
            .map(
                function (rifa) {

                    const foto =
                        rifa.rifa_fotos[0]?.url;


                    const imagem =
                        foto
                            ? `
                                <img
                                    src="${foto}"
                                    alt="${escaparHTML(
                                        rifa.titulo
                                    )}"
                                >
                            `
                            : `
                                <div class="sem-imagem">
                                    Sem foto
                                </div>
                            `;


                    return `
                        <article class="card-admin">

                            <div class="card-imagem">

                                ${imagem}

                            </div>


                            <div class="card-conteudo">

                                <div class="card-linha">

                                    ${
                                        rifa.ativa

                                            ? `
                                                <span class="selo-rifa">
                                                    Ativa
                                                </span>
                                            `

                                            : `
                                                <span class="status oculta">
                                                    Inativa
                                                </span>
                                            `
                                    }


                                    <small>
                                        ${rifa.rifa_fotos.length}
                                        foto(s)
                                    </small>

                                </div>


                                <h3>
                                    ${escaparHTML(
                                        rifa.titulo
                                    )}
                                </h3>


                                <p class="card-categoria">
                                    Valor por número
                                </p>


                                <strong class="card-preco">
                                    ${formatarPreco(
                                        rifa.valor_numero
                                    )}
                                </strong>


                                <div class="card-acoes">

                                    <button
                                        class="botao-card editar-rifa"
                                        type="button"
                                        data-id="${rifa.id}"
                                    >
                                        Editar
                                    </button>


                                    <button
                                        class="botao-card excluir excluir-rifa"
                                        type="button"
                                        data-id="${rifa.id}"
                                    >
                                        Excluir
                                    </button>

                                </div>

                            </div>

                        </article>
                    `;

                }
            )
            .join(
                ""
            );


    listaRifas
        .querySelectorAll(
            ".editar-rifa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        abrirModalEditarRifa(
                            botao.dataset.id
                        );

                    }
                );

            }
        );


    listaRifas
        .querySelectorAll(
            ".excluir-rifa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        solicitarExclusaoRifa(
                            botao.dataset.id
                        );

                    }
                );

            }
        );
}


function abrirModalNovaRifa() {

    formRifa.reset();


    rifaId.value =
        "";


    tituloModalRifa.textContent =
        "Nova rifa";


    areaFotosRifa.classList.add(
        "oculto"
    );


    fotosRifaExistentes.innerHTML =
        "";


    abrirModal(
        modalRifa
    );
}


function abrirModalEditarRifa(
    id
) {

    const rifa =
        rifasCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!rifa) {

        return;

    }


    formRifa.reset();


    rifaId.value =
        rifa.id;


    tituloRifa.value =
        rifa.titulo ||
        "";


    descricaoRifa.value =
        rifa.descricao ||
        "";


    valorRifa.value =
        rifa.valor_numero ??
        "";


    linkRifa.value =
        rifa.link ||
        "";


    rifaAtiva.checked =
        rifa.ativa ===
        true;


    tituloModalRifa.textContent =
        "Editar rifa";


    renderizarFotosRifa(
        rifa.rifa_fotos
    );


    abrirModal(
        modalRifa
    );
}


function renderizarFotosRifa(
    fotos
) {

    if (
        !fotos
        ||
        fotos.length ===
        0
    ) {

        areaFotosRifa.classList.add(
            "oculto"
        );


        fotosRifaExistentes.innerHTML =
            "";


        return;
    }


    areaFotosRifa.classList.remove(
        "oculto"
    );


    fotosRifaExistentes.innerHTML =
        fotos
            .map(
                function (foto) {

                    return `
                        <div class="foto-existente">

                            <img
                                src="${foto.url}"
                                alt="Foto da rifa"
                            >

                            <button
                                type="button"
                                class="remover-foto remover-foto-rifa"
                                data-id="${foto.id}"
                            >
                                ×
                            </button>

                        </div>
                    `;

                }
            )
            .join(
                ""
            );


    fotosRifaExistentes
        .querySelectorAll(
            ".remover-foto-rifa"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        confirmarAcao(
                            "Excluir esta foto?",
                            "A imagem será removida permanentemente.",
                            async function () {

                                await excluirFotoRifa(
                                    botao.dataset.id
                                );

                            }
                        );

                    }
                );

            }
        );
}


async function salvarRifa(
    event
) {

    event.preventDefault();


    botaoSalvarRifa.disabled =
        true;


    botaoSalvarRifa.textContent =
        "Salvando...";


    try {

        const id =
            rifaId.value;


        if (
            rifaAtiva.checked
        ) {

            let consulta =
                db
                    .from(
                        "rifas"
                    )
                    .update({
                        ativa:
                            false
                    })
                    .eq(
                        "ativa",
                        true
                    );


            if (id) {

                consulta =
                    consulta.neq(
                        "id",
                        id
                    );

            }


            const {
                error
            } =
                await consulta;


            if (
                error
            ) {

                throw error;

            }

        }


        const dados = {

            titulo:
                tituloRifa.value.trim(),

            descricao:
                descricaoRifa.value.trim() ||
                null,

            valor_numero:
                Number(
                    valorRifa.value
                ),

            link:
                linkRifa.value.trim() ||
                null,

            ativa:
                rifaAtiva.checked

        };


        let rifaSalva;


        if (id) {

            const {
                data,
                error
            } = await db
                .from(
                    "rifas"
                )
                .update(
                    dados
                )
                .eq(
                    "id",
                    id
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            rifaSalva =
                data;

        } else {

            const {
                data,
                error
            } = await db
                .from(
                    "rifas"
                )
                .insert(
                    dados
                )
                .select()
                .single();


            if (error) {

                throw error;

            }


            rifaSalva =
                data;

        }


        const arquivos =
            Array.from(
                fotosRifa.files
            );


        if (
            arquivos.length >
            0
        ) {

            await enviarFotosRifa(
                arquivos,
                rifaSalva.id
            );

        }


        fecharModal(
            modalRifa
        );


        await atualizarPainel();


        mostrarToast(
            id
                ? "Rifa atualizada com sucesso."
                : "Rifa cadastrada com sucesso.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao salvar rifa:",
            erro
        );


        mostrarToast(
            erro.message ||
            "Não foi possível salvar a rifa.",
            "erro"
        );

    } finally {

        botaoSalvarRifa.disabled =
            false;


        botaoSalvarRifa.textContent =
            "Salvar rifa";

    }
}


/* UPLOAD RIFA */

async function enviarFotosRifa(
    arquivos,
    idRifa
) {

    const {
        data:
            fotosAtuais,

        error:
            erroFotos
    } = await db
        .from(
            "rifa_fotos"
        )
        .select(
            "ordem"
        )
        .eq(
            "rifa_id",
            idRifa
        );


    if (
        erroFotos
    ) {

        throw erroFotos;

    }


    let proximaOrdem =
        0;


    if (
        fotosAtuais
        &&
        fotosAtuais.length >
        0
    ) {

        proximaOrdem =
            Math.max(
                ...fotosAtuais.map(
                    function (foto) {

                        return (
                            Number(
                                foto.ordem
                            )
                            ||
                            0
                        );

                    }
                )
            )
            +
            1;

    }


    for (
        let i = 0;
        i < arquivos.length;
        i++
    ) {

        const arquivo =
            arquivos[i];


        validarImagem(
            arquivo
        );


        const caminho =
            criarCaminhoArquivo(
                "rifas",
                idRifa,
                arquivo,
                i
            );


        const {
            error:
                erroUpload
        } =
            await db.storage
                .from(
                    "imagens"
                )
                .upload(
                    caminho,
                    arquivo,
                    {
                        cacheControl:
                            "3600",

                        upsert:
                            false
                    }
                );


        if (
            erroUpload
        ) {

            throw erroUpload;

        }


        const {
            data:
                urlData
        } =
            db.storage
                .from(
                    "imagens"
                )
                .getPublicUrl(
                    caminho
                );


        const {
            error:
                erroBanco
        } = await db
            .from(
                "rifa_fotos"
            )
            .insert({

                rifa_id:
                    idRifa,

                url:
                    urlData.publicUrl,

                caminho:
                    caminho,

                ordem:
                    proximaOrdem +
                    i

            });


        if (
            erroBanco
        ) {

            await db.storage
                .from(
                    "imagens"
                )
                .remove([
                    caminho
                ]);


            throw erroBanco;

        }

    }
}


/* EXCLUIR FOTO RIFA */

async function excluirFotoRifa(
    idFoto
) {

    const rifa =
        rifasCache.find(
            function (item) {

                return item
                    .rifa_fotos
                    .some(
                        function (foto) {

                            return (
                                foto.id ===
                                idFoto
                            );

                        }
                    );

            }
        );


    if (!rifa) {

        return;

    }


    const foto =
        rifa.rifa_fotos.find(
            function (item) {

                return (
                    item.id ===
                    idFoto
                );

            }
        );


    if (!foto) {

        return;

    }


    try {

        const caminho =
            obterCaminhoFoto(
                foto
            );


        if (
            caminho
        ) {

            const {
                error:
                    erroStorage
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove([
                        caminho
                    ]);


            if (
                erroStorage
            ) {

                console.warn(
                    "Não foi possível remover a foto do Storage:",
                    erroStorage
                );

            }

        }


        const {
            error
        } = await db
            .from(
                "rifa_fotos"
            )
            .delete()
            .eq(
                "id",
                idFoto
            );


        if (
            error
        ) {

            throw error;

        }


        await carregarRifas();


        const atualizada =
            rifasCache.find(
                function (item) {

                    return (
                        item.id ===
                        rifa.id
                    );

                }
            );


        renderizarFotosRifa(
            atualizada
                ? atualizada.rifa_fotos
                : []
        );


        renderizarRifas();


        atualizarResumo();


        mostrarToast(
            "Foto excluída.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao excluir foto da rifa:",
            erro
        );


        mostrarToast(
            "Não foi possível excluir a foto.",
            "erro"
        );

    }
}


/* EXCLUIR RIFA */

function solicitarExclusaoRifa(
    id
) {

    const rifa =
        rifasCache.find(
            function (item) {

                return (
                    item.id ===
                    id
                );

            }
        );


    if (!rifa) {

        return;

    }


    confirmarAcao(
        `Excluir "${rifa.titulo}"?`,
        "A rifa e todas as imagens serão apagadas permanentemente.",
        async function () {

            await excluirRifa(
                rifa
            );

        }
    );
}


async function excluirRifa(
    rifa
) {

    try {

        const caminhos =
            rifa.rifa_fotos
                .map(
                    obterCaminhoFoto
                )
                .filter(
                    Boolean
                );


        if (
            caminhos.length >
            0
        ) {

            const {
                error:
                    erroStorage
            } =
                await db.storage
                    .from(
                        "imagens"
                    )
                    .remove(
                        caminhos
                    );


            if (
                erroStorage
            ) {

                console.warn(
                    "Não foi possível limpar todas as fotos do Storage:",
                    erroStorage
                );

            }

        }


        const {
            error
        } = await db
            .from(
                "rifas"
            )
            .delete()
            .eq(
                "id",
                rifa.id
            );


        if (
            error
        ) {

            throw error;

        }


        await atualizarPainel();


        mostrarToast(
            "Rifa excluída.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao excluir rifa:",
            erro
        );


        mostrarToast(
            "Não foi possível excluir a rifa.",
            "erro"
        );

    }
}


/* ARQUIVOS */

function validarImagem(
    arquivo
) {

    const tamanhoMaximo =
        6 *
        1024 *
        1024;


    if (
        !arquivo.type.startsWith(
            "image/"
        )
    ) {

        throw new Error(
            `${arquivo.name} não é uma imagem válida.`
        );

    }


    if (
        arquivo.size >
        tamanhoMaximo
    ) {

        throw new Error(
            `${arquivo.name} possui mais de 6 MB.`
        );

    }
}


function criarCaminhoArquivo(
    pasta,
    id,
    arquivo,
    indice
) {

    let extensao =
        arquivo.name
            .split(
                "."
            )
            .pop()
            .toLowerCase();


    if (
        !extensao
        ||
        extensao ===
        arquivo.name.toLowerCase()
    ) {

        extensao =
            "jpg";

    }


    const aleatorio =
        Math.random()
            .toString(
                36
            )
            .substring(
                2,
                9
            );


    const nome =
        `${Date.now()}-${indice}-${aleatorio}.${extensao}`;


    return (
        `${pasta}/${id}/${nome}`
    );
}


function obterCaminhoFoto(
    foto
) {

    if (
        foto.caminho
    ) {

        return foto.caminho;

    }


    return obterCaminhoPorUrl(
        foto.url
    );
}


function obterCaminhoPorUrl(
    url
) {

    if (!url) {

        return null;

    }


    const marcador =
        "/object/public/imagens/";


    const posicao =
        url.indexOf(
            marcador
        );


    if (
        posicao ===
        -1
    ) {

        return null;

    }


    return decodeURIComponent(
        url.substring(
            posicao +
            marcador.length
        )
    );
}


/* MODAIS */

function abrirModal(
    modal
) {

    modal.classList.add(
        "ativo"
    );


    document.body.style.overflow =
        "hidden";
}


function fecharModal(
    modal
) {

    modal.classList.remove(
        "ativo"
    );


    document.body.style.overflow =
        "";
}


function confirmarAcao(
    titulo,
    descricao,
    acao
) {

    document
        .querySelector(
            "#modal-confirmacao h2"
        )
        .textContent =
            titulo;


    textoConfirmacao.textContent =
        descricao;


    acaoConfirmada =
        acao;


    abrirModal(
        modalConfirmacao
    );
}


/* TOAST */

function mostrarToast(
    mensagem,
    tipo = "sucesso"
) {

    clearTimeout(
        timerToast
    );


    toast.textContent =
        mensagem;


    toast.className =
        `toast ativo ${tipo}`;


    timerToast =
        setTimeout(
            function () {

                toast.className =
                    "toast";

            },
            4000
        );
}


/* UTILIDADES */

function formatarStatus(
    status
) {

    const nomes = {

        disponivel:
            "Disponível",

        reservada:
            "Reservada",

        vendida:
            "Vendida",

        projeto:
            "Projeto",

        oculta:
            "Oculta"

    };


    return (
        nomes[status]
        ||
        status
    );
}


function formatarPreco(
    valor
) {

    return Number(
        valor
    ).toLocaleString(
        "pt-BR",
        {
            style:
                "currency",

            currency:
                "BRL"
        }
    );
}


function escaparHTML(
    texto
) {

    if (
        texto ===
            null
        ||
        texto ===
            undefined
    ) {

        return "";

    }


    return String(
        texto
    )
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

            <strong>
                ${titulo}
            </strong>

            <p>
                ${texto}
            </p>

        </div>
    `;
}