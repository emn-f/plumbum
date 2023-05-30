import { Navbar } from "../shared/components/Navbar";
import { Rodape } from "../shared/components/Rodape";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './../shared/styles/style.css';

type Props = {};

interface ILogin {
    children?: React.ReactNode;
};

export const Login: React.FC<ILogin> = ({ children }) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInputs(values => ({ ...values, [name]: value }))
    };
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>

            <header>
                <Navbar />
            </header>
            <body>
                <div className="bgdLogin">
                    <br />
                        <div className="formulario">
                        <br />
                        <br />

                            <div className="cad_label"><label htmlFor="nome">Login</label></div>
                            <br />
                            <br />


                            <label className="cad_campo" htmlFor="email" style={{ margin: '0 0 0.5em 0.2em' }}><strong>E-mail: </strong></label>
                            <input className="cad_insert" type="email" placeholder="aliceoseman@gmail.com" size={35} id="email" name="email" onChange={handleChange} />
                            <br />
                            <br />

                            <label className="cad_campo" htmlFor="senha" style={{ margin: '0 0 0.5em 0.2em' }}><strong>Senha: </strong></label>
                            <input className="cad_insert" type="password" placeholder="***********" size={35} id="senha" name="senha" onChange={handleChange} />

                            <br />
                            <br />
                            <br />
                            <a href="./new" target="_blank"><button className="btnCadastro" type="submit"  id="btn" >Cadastrar</button></a>
                        </div>
                </div>
            </body >
            <footer>
                <Rodape />
            </footer>
        </html>
    );
};
