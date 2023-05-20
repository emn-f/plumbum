import React, { useState } from "react";

import { Navbar } from '../shared/components/Navbar';
import { Rodape } from '../shared/components/Rodape';

import './../shared/styles/style.css';

type Props = {};

interface IDev {
    children?: React.ReactNode;
};

export const Dev: React.FC<IDev> = ({ children }) => {
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
                <div className='dev'>welcome to the plumbum<br />
                    <div className='imgDev'></div>
                </div>
            </body>
            <footer>
                <Rodape />
            </footer>
        </html>
    );
};
