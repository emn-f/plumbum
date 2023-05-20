
import { Navbar } from "../shared/components/Navbar";
import { Rodape } from "../shared/components/Rodape";

import React from "react"

interface IProducaoTextual {
    children?: React.ReactNode;
}

export const ProducaoTextual: React.FC<IProducaoTextual> = ({ children }) => {
    return (
        <html style={{ backgroundColor: '#E3DED9' }}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <header>
                <Navbar />
            </header>

            <body>
                <div className="bodyProducaoTxt">
                    <div><a className="container back" href="/new">Voltar para meus textos</a></div>
                    <div><a className="container btnSalvar" href="/new">Salvar</a></div>
                </div>

                <div className="bodyProducaoTxt">
                    <div className="divTxt">
                        <div className="bodyProducaoTxt">
                            <div className="dadosTxt">356 caracteres (com espaço)</div>
                            <div className="dadosTxt">123 caracteres (sem espaço)</div>
                            <div className="dadosTxt">16 linhas</div>
                            <div className="dadosTxt">56 verbos</div>
                        </div>
                        <textarea className="container txtAreaTxt"></textarea>
                    </div>
                    {/* Bloco direito */}
                    <div className="divPainel">
                        <div className="planejamento">
                            <strong>MEU PLANEJAMENTO</strong>
                            <br />
                            Você vai falar sobre <strong> os desafios do sistema carcerário brasileiro</strong>. Seu tema é <strong>a crise do sistema carcerário.</strong> Você tem três palavras-chave, que são: <strong>prisão</strong>, <strong>legislação </strong>e <strong>discriminação</strong>.Você precisa defender a seguinte tese: <strong>Como a aprovação do Pacote Anti-Crime em 2018 corrobora com prisões lotadas que oferecem condições de vida precária.</strong> Utilizando esses argumentos: <strong>A Irracionalidade estrutural</strong> e <strong>Leis que parciais</strong>. Proposta de Intervenção: <strong>Governo Federal</strong> deve <strong>discutir políticas públicas</strong> tendo como base <strong>dados e pesquisas</strong>para se chegar no seguinte resultado: <strong>Diminuir a superpopulação carcerária</strong>.
                            <br />
                            Ideias que você deve pensar se vai utilizar ou não: <strong>Prisões por delitos pequenos</strong>
                        </div>

                        {/* <SwipeableEdgeDrawer/> */}
                    </div>
                </div>
            </body >

            <footer>
                <Rodape />
            </footer>
        </html>
    )
}