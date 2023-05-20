import React, { useState } from "react";

import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";

type Props = {};

interface IPropostaIntervencao {
    children?: React.ReactNode;
}

export const PropostaIntervencao: React.FC<IPropostaIntervencao> = ({ children }) => {
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
                <div className="container bgdMargemPI">
                    <div className="container bgdDivPI">
                        <div style={{ margin: '1.25em 3em 1em 3em' }}>
                            <br />
                            <div className="container bgdTituloPI">
                                <label>Agora vamos preencher sua proposta de intervenção:</label>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className="container" style={{ display: 'inline-block' }}>
                            <div className="container" style={{ display: 'inline-block' }}>
                                <div className="container boxTxtPI">O que deve ser feito?</div>
                                <textarea className="container txtareaPI" id="piQue" name="piQue" placeholder="Que ações podem reduzir o impacto ou acabar com o problema?"></textarea>
                            </div>
                            <div className="container" style={{ display: 'inline-block' }}>
                                <div className="container boxTxtPI">Quem deve fazer?</div>
                                <textarea className="container txtareaPI" id="piQuem" name="piQuem" placeholder="Quem pode ser responsável pela execução dessas ações?"></textarea>
                            </div>
                            <br />
                            <div className="container" style={{ display: 'inline-block' }}>
                                <div className="container boxTxtPI">Como será feito?</div>
                                <textarea className="container txtareaPI" id="piComo" name="piComo" placeholder="De que forma essas ações podem ser implementadas?"></textarea>
                            </div>
                            <div className="container" style={{ display: 'inline-block' }}>
                                <div className="container boxTxtPI">Qual o resultado esperado?</div>
                                <textarea className="container txtareaPI" id="piQual" name="piQual" placeholder="Que tipo de resultado se espera para a intervenção?"></textarea>
                            </div>
                            <div style={{ margin: '-0.5em' }}>
                                <a href="./intervencao/resumo"><button className="btnPI">Finalizar planejamento</button></a>
                            </div>
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