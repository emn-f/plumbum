import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PaginaInicial } from "../pages/PaginaInicial";
import { useDrawerContext } from '../shared/contexts';
import { LayoutBase } from "../shared/layouts";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { AcessoConta } from "../pages/AcessoConta";
import { Login } from "../shared/components/apiGoogle/inicializar";
import { Dashboard } from "../pages";

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
                path: '/account',
                label:'Minha conta',
            },
            {
            icon:'',
            path:'/dashboard',
            label:'Dashboard'
        }
        ]);
      }, []);

    return (
        <Routes>
            <Route path="/home" element={<PaginaInicial titulo={'Plumbum'} />} />
            <Route path="/account" element={<AcessoConta titulo={'Plumbum'} />} />
            <Route path="/dev" element={<LayoutBase titulo={'Plumbum'} />} />
            <Route path="/dashboard" element={<Dashboard titulo={'Plumbum'} />} />
            <Route path="/login" element={<Login titulo={'Plumbum'} />} />
            <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>   
    )

};

