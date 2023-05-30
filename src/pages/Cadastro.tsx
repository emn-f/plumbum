import { Navbar } from "../shared/components/Navbar";
import { Rodape } from "../shared/components/Rodape";

import phEscritores from "../shared/components/placeholderEscritores";

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
        axios.post('http://localhost:80/plumbum-api/user/save', inputs).then(function (response) {
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

                            <div className="cad_label"><label htmlFor="nome">Cadastre-se</label></div>
                            <br />
                            <label className="cad_campo" htmlFor="nome" style={{ margin: '0 0 0.5em 0.2em' }}>Nome:</label>
                            <input className="cad_insert" type="text"  placeholder="Manuel Bandeira" size={35} id="nome" name="nome" onChange={handleChange} />
                            <br />
                            <br />
                            <br />
                            <br />

                            <label className="cad_campo" htmlFor="email" style={{ margin: '0 0 0.5em 0.2em' }}><strong>E-mail: </strong></label>
                            <input className="cad_insert" type="email" size={35} id="email" name="email" onChange={handleChange} />
                            <br />
                            <br />

                            <label className="cad_campo" htmlFor="senha" style={{ margin: '0 0 0.5em 0.2em' }}><strong>Senha:</strong></label>
                            <input className="cad_insert" type="password" size={35} id="senha" name="senha" onChange={handleChange} />


                            <div className="cad_radio">
                                <div className="cad_insertRadio">
                                    <input className="cad_insertRadio" type="radio" id="tipo_estudante" name="tipo" value="1" onChange={handleChange} /><label htmlFor="tipo_estudante">Estudante</label>
                                </div>
                                <div className="cad_insertRadio">
                                    <input className="cad_insertRadio" type="radio" id="tipo_professor" name="tipo" value="2" onChange={handleChange} /><label htmlFor="tipo_professor">Professor</label>
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
