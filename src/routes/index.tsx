import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Dev } from "../pages/Dev";
import { Assunto } from "../pages/ficha-planejamento/Assunto";
import { Tema } from "../pages/ficha-planejamento/Tema";
import { TextosMotivadores } from "../pages/ficha-planejamento/TextosMotivadores";
import { useDrawerContext } from '../shared/contexts';
import { PortalEstudante } from "../pages/PortalEstudante";
import { PalavraChave } from "../pages/ficha-planejamento/PalavrasChave";
import { Tese } from "../pages/ficha-planejamento/Tese";
import { Argumentos } from "../pages/ficha-planejamento/Argumentos";
import { ListaIdeias } from "../pages/ficha-planejamento/ListaIdeias";
import { PropostaIntervencao } from "../pages/ficha-planejamento/PropostaIntervencao";
import { Resumo } from "../pages/ficha-planejamento/Resumo";
import { ProducaoTextual } from "../pages/ProducaoTextual";
import Contato from "../pages/Contato";


export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/home',
                label: 'Home',
            },
            {
                icon: 'login',
                path: '/cadastro',
                label: 'Cadastre-se',
            },
            {
                icon: 'code',
                path: '/dev',
                label: 'Dev'
            }

        ]);
    }, []);

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/dev" />} />
            <Route path="/dev" element={<Dev />} />

            {/* PÁGINAS PRINCIPAIS */}
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Navigate to="/cadastro" />} />
            {/* <Route path="/contato" element={<Navigate to="/dev" />} /> */}
            <Route path="/contato" element={<Contato />} />

            {/* FICHA DE PLANEJAMENTO */}
            <Route path="/new" element={<PortalEstudante />} />
            <Route path="/login" element={<Navigate to="/cadastro" />} />
            <Route path="/txt" element={<ProducaoTextual />}/>
            <Route path="/login/textos" element={<PortalEstudante />}/>
            <Route path="/login/relatorios" element={<Navigate to="/login" />} />

            <Route path="new/ficha-planejamento/assunto" element={<Assunto />} />
            <Route path="new/ficha-planejamento/assunto/tema" element={<Tema />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores" element={<TextosMotivadores />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave" element={<PalavraChave />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave/tese" element={<Tese />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave/tese/argumentos" element={<Argumentos />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave/tese/argumentos/lista-ideias" element={<ListaIdeias />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave/tese/argumentos/lista-ideias/intervencao" element={<PropostaIntervencao />} />
            <Route path="new/ficha-planejamento/assunto/tema/textos-motivadores/palavras-chave/tese/argumentos/lista-ideias/intervencao/resumo" element={<Resumo />} />
        </Routes>
    )

};
