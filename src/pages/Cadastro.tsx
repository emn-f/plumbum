import { Navbar } from "../shared/components/Navbar";
import { Rodape } from "../shared/components/Rodape";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './../shared/styles/style.css';

type Props = {};

interface ICadastro {
    children?: React.ReactNode;
};

export const Cadastro: React.FC<ICadastro> = ({ children }) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInputs(values => ({ ...values, [name]: value }))
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputs);
        axios.post('http://localhost:8888/plumbum-api/user/save', inputs).then(function (response) {
            console.log(response.data);
        });
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
                    <form onSubmit={handleSubmit}>
                        <div className="formulario">

                            <div className="cad_label"><label htmlFor="nome">Cadastre-se!</label></div>
                            <br />

                            <label className="cad_campo" htmlFor="nome">Nome:</label>
                            <input className="cad_insert"  placeholder="Machado de Assis" type="text" size={35} id="nome" name="nome" onChange={handleChange} />
                            <br />
                            <br />
                            <label className="cad_campo" htmlFor="email"><strong>E-mail: </strong></label>
                            <input className="cad_insert" type="email" size={35} id="email" name="email" onChange={handleChange} />
                            <br />
                            <br />

                            <label className="cad_campo" htmlFor="senha"><strong>Senha: </strong></label>
                            <input className="cad_insert" type="password" size={35} id="senha" name="senha" onChange={handleChange} />


                            <div className="cad_radio">
                                <div className="cad_insertRadio">
                                    <input placeholder="Osl" className="cad_insertRadio" type="radio" id="tipo_estudante" name="tipo" value="E" onChange={handleChange} /><label htmlFor="tipo_estudante">Estudante</label>
                                </div>
                                <div className="cad_insertRadio">
                                    <input className="cad_insertRadio" type="radio" id="tipo_professor" name="tipo" value="P" onChange={handleChange} /><label htmlFor="tipo_professor">Professor</label>
                                </div>
                            </div>

                            <br />
                            <a href="./new" target="_blank"><button className="btnCadastro" type="submit"  id="btn" >Cadastrar</button></a>
                        </div>
                    </form>
                </div>
            </body >
            <footer>
                <Rodape />
            </footer>
        </html>
    );
};
