import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IArgumentos {
    children?: React.ReactNode;
}

export const Argumentos: React.FC<IArgumentos> = ({ children }) => {
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
                <div className="container bgdMargemArg">
                    <div className="container bgdDivArg">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloArg pointer">
                                <label className="pointer" htmlFor="campoArg">Quais seus argumentos?</label>
                            </div>
                        </div>

                        <div className="container">
                            <textarea className="txtareaArg" id="campoArg" name="campoArg"
                                placeholder="Para sustentar sua tese, você precisa apresentar argumentos (os motivos, justificativas, as premissas) que fundamentam sua tese. Ex.: “Populações carentes enfrentam mais dificuldade de acesso à saúde pública pois a quantidade de instrumentos e profissionais é incompatível com a demanda.” “Diferenças sociais, como etnia, local de residência e classe sociais e até mesmo orientação sexual tendem a limitar o acesso à saúde pública”. Não esqueça de que precisa apresentar evidências (dados, citações, consequências...) para fundamentar seu argumento">
                            </textarea>
                        </div>
                        <div style={{ margin: '1em' }}>
                            <a href="./argumentos/lista-ideias"><button className="btnArg">Próximo</button></a>
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