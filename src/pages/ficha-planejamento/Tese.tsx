import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface ITese {
    children?: React.ReactNode;
}

export const Tese: React.FC<ITese> = ({ children }) => {
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
                <div className="container bgdMargemTese">
                    <div className="container bgdDivAssunto">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloAssunto pointer">
                                <label className="pointer" htmlFor="campoAssunto">Qual a sua tese?</label>
                            </div>
                        </div>

                        <div className="container">
                            <textarea className="txtareaTese" id="campoTese" name="campoTese"
                                placeholder="Construa uma afirmação clara e objetiva que sintetize sua principal conclusão sobre o tema, ou seja, que revele seu ponto de vista.  Ex.: O acesso precário das populações carentes à saúde pública é produto das desigualdades sociais.">
                            </textarea>                        </div>
                        <div style={{ margin: '1em' }}>
                            <a href="./tese/argumentos"><button className="btnTese">Próximo</button></a>
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