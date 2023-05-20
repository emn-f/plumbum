import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IPalavraChave {
    children?: React.ReactNode;
}

export const PalavraChave: React.FC<IPalavraChave> = ({ children }) => {
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
                <div className="container bgdMargemPC">
                    <div className="container bgdDivPC">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloPC">
                                <label>Insira 3 palavras-chave para o seu tema:</label>
                            </div>
                        </div>
                        <textarea className="container txtareaPC" id="pc1" name="pc1" placeholder="📝"></textarea>
                        <textarea className="container txtareaPC" id="pc2" name="pc2" placeholder="✍🏽"></textarea>
                        <textarea className="container txtareaPC" id="pc3" name="pc3" placeholder="⌨️"></textarea>
                        <div className="container">
                            <a href="./palavras-chave/tese"><button className="btnPC">Próximo</button></a>
                        </div>
                    </div>
                </div>
            </body >

            <footer>
                <Rodape />
            </footer>
        </html >
    )
}