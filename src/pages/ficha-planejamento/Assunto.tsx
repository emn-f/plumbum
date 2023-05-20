import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IAssunto {
    children?: React.ReactNode;
}

export const Assunto: React.FC<IAssunto> = ({ children }) => {
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
                <div className="container bgdMargemAssunto">
                    <div className="container bgdDivAssunto">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloAssunto pointer">
                                <label className="pointer" htmlFor="campoAssunto">Qual o assunto?</label>
                            </div>
                        </div>

                        <div className="container">
                            <textarea className="txtareaAssunto" id="campoAssunto" name="campoAssunto"
                                placeholder="Em termos mais amplos, a qual tópico se relaciona a proposta de texto? Ex.: Saúde pública, Educação.">
                            </textarea>
                        </div>
                        <div style={{ margin: '1em' }}>
                            <a href="./assunto/tema"><button className="btnAssunto">Próximo</button></a>
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