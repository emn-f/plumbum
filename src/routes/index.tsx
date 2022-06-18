import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PaginaInicial } from "../pages/PaginaInicial";
import { useDrawerContext } from '../shared/contexts';
import { LayoutBase } from "../shared/layouts";
import LogoDevIcon from '@mui/icons-material/LogoDev';

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
                icon: 'Dev',
                path: '/dev',
                label:'Dev',
            }
        ]);
      }, []);

    return (
        <Routes>
            <Route path="/home" element={<PaginaInicial titulo={'Plumbum'} />} />
            <Route path="/cadastro" element={<LayoutBase titulo={'Plumbum'} />} />
            <Route path="/dev" element={<LayoutBase titulo={'Plumbum'} />} />

            <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>   
    )

};

