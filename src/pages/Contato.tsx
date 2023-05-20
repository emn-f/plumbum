import React, { useState } from "react";

import { Navbar } from "../shared/components/Navbar";
import { Rodape } from "../shared/components/Rodape";

function Contato() {
    return (
        <html className="bgdBodyContato">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <header>
                <Navbar />
            </header>

            <body>
                <div>
                    <div className="bgdDivContato">
                        <div className="txtTitleContato">Informações de contato</div>
                        <div className="txtInfoContato">
                            <ul>
                                <br />
                                <li><strong>Nome</strong></li>
                                <li>Emanuel</li>
                                <br />
                                <li><strong>Email</strong></li>
                                <li>emnarlanferreira@gmail.com</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </body>
            <a href="./dev
            "><button className="btnArg">Próximo</button></a>

            <footer>
                <Rodape />
            </footer>
        </html>

    )
};

export default Contato;