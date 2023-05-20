import { Navbar } from '../shared/components/Navbar';
import { Rodape } from '../shared/components/Rodape';

import React, { useState } from "react";

import './../shared/styles/style.css';
import './../App.css';


type Props = {};

interface IHome {
    children?: React.ReactNode;
};

export const Home: React.FC<IHome> = ({ children }) => {
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
                <section className='section1Home'>
                    <div className='desc1'>
                        <div className='titulo'> Seja Bem-Vindo(a) ao Plumbum</div>
                        <br />
                        <div className='subtitulo'> Uma plataforma gratuita que faz muito mais do que apenas te ajudar a construir a redação perfeita!</div>
                        <a className='bgdBtn' href='/metodologia'>Conheça nossos métodos</a>
                    </div>
                </section>
            </body>

            <footer>
                <Rodape />
            </footer>
        </html>
    );
};