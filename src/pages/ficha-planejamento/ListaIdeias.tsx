import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IListaIdeias {
    children?: React.ReactNode;
}

export const ListaIdeias: React.FC<IListaIdeias> = ({ children }) => {
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
                <div className="container bgdMargemLI">
                    <div className="container bgdDivLI">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloLI pointer">
                                <label className="pointer" htmlFor="campoAssunto">Insira aqui ideias livres, dados e repertório sócio cultural que podem ser úteis:</label>
                            </div>
                        </div>

                        <div className="container">
                            <textarea className="txtareaTese" id="campoTese" name="campoTese"
                                placeholder="Use sua imaginação :)">
                            </textarea>                        </div>
                        <div style={{ margin: '1em' }}>
                            <a href="./lista-ideias/intervencao"><button className="btnLI">Próximo</button></a>
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