import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface ITema {
    children?: React.ReactNode;
}

export const Tema: React.FC<ITema> = ({ children }) => {
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

                <div className="container bgdMargemTema">
                    <div className="container bgdDivTema">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloTema">
                                <label> Qual o tema?</label>
                            </div>
                        </div>

                        {/* INSERIR TEMAS COMO VÁRIAVEIS GLOBAIS */}
                        <a href="./tema/textos-motivadores"><button className="temas">1. A democratização do acesso à saúde pública no Brasil.</button></a>
                        <a href="./tema/textos-motivadores"><button className="temas">2. A crise de saúde pública no Brasil.</button></a>
                        <a href="./tema/textos-motivadores"><button className="temas">3. A crise do sistema carcerario brasileiro.</button></a>
                        <textarea className="temaPersonalizado"
                        placeholder="Dentre do assunto geral, qual é o recorte de abordagem da proposta? Insira aqui seu tema personalizado:"></textarea>


                        {/* Fazer o botão aparecer apenas se algo for digitado no txtarea. Ao exibir o botão remover a margem bottom */}
                        {/* <div style={{ margin: '1em' }}><a href="./tema/textos-motivadores"><button className="btnTema">Próximo</button></a></div> */}
                    </div>
                </div>
            </body>

            <footer>
                <Rodape />
            </footer>
        </html>
    )
}