import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IResumo {
    children?: React.ReactNode;
}

export const Resumo: React.FC<IResumo> = ({ children }) => {
    return (
        <html className="bgdBodyFP">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>

            <header>
                <Navbar />
            </header>

            <body>
                <div className="container bgdMargemRes">
                    <div className="container bgdDivRes">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloRes pointer">
                                <label className="pointer" htmlFor="campoAssunto">Agora vamos revisar tudo que temos até aqui:</label>
                            </div>
                        </div>

                        <div className="container txtareaTese">
                            Você vai falar sobre <strong> os desafios do sistema carcerário brasileiro</strong>.<br />
                            <br />Seu tema é <strong>a crise do sistema carcerário.</strong><br />
                            <br />Você tem três palavras-chave, que são: <br /><strong>prisão</strong>, <strong>legislação </strong>e <strong>discriminação</strong>.<br />
                            <br />Você precisa defender a seguinte tese:<br /><strong>Como a aprovação do Pacote Anti-Crime em 2018 corrobora com prisões lotadas que oferecem condições de vida precária.</strong><br />
                            <br />Utilizando esses argumentos:<br /><strong>A Irracionalidade estrutural</strong> e <strong>Leis que parciais</strong>.<br />
                            <br />Proposta de Intervenção:<br /> <strong>O Governo Federal</strong> deve <strong>discutir políticas públicas</strong> tendo como base <strong>dados e pesquisas </strong>para se chegar no seguinte resultado: <strong>Diminuir a superpopulação carcerária</strong>.<br />
                            <br />Ideias que você deve pensar se vai utilizar ou não: <strong>Prisões por delitos pequenos</strong>
                        </div>
                        <div style={{ margin: '1em' }}>
                            <a href="./lista-ideias/intervencao"><button className="btnRes">Começar desenvolvimento do texto</button></a>
                        </div>
                    </div>
                </div>
            </body>

            <footer>
                <Rodape />
            </footer>
        </html>
    )
}