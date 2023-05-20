import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface ITextosMotivadores {
    children?: React.ReactNode;
}

export const TextosMotivadores: React.FC<ITextosMotivadores> = ({ children }) => {
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
                <div className="container bgdMargemTxtMotivadores">
                    <div className="container bgdDivTxtMotivadores">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloTxtMotivadores">
                                <label>Textos Motivadores</label>
                            </div>
                        </div>
                        <div>
                            <label className="container txtLabelTxtMotivadores">Texto 1</label>
                            <div className="container center bgdTxtMotivadores"></div>
                            <div className="center">
                                <a className="optTxtMotivadores" href="/" target="_blank"><div>Abrir em uma nova guia</div></a>
                                <a className="optTxtMotivadores" href="/" target="_blank"><div>Fazer Download</div></a>
                            </div>
                        </div>
                        <div>
                            <label className="txtLabelTxtMotivadores">Texto 2</label>
                            <div className="container center bgdTxtMotivadores" ></div>
                            <div className="center">
                                <a className="optTxtMotivadores" href="/" target="_blank"><div>Abrir em uma nova guia</div></a>
                                <a className="optTxtMotivadores" href="/" target="_blank"><div>Fazer Download</div></a>
                            </div>
                        </div>
                        <div>
                            <a href="./textos-motivadores/palavras-chave">
                                <button className="container btnTxtMotivadores">
                                    Prosseguir com o planejamento
                                </button>
                            </a>
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