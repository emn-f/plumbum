import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { useDrawerContext } from '../shared/contexts';
import { LayoutBase } from "../shared/layouts";


export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/home',
                label: 'Home',
            }
        ])
    })

    return (
        <Routes>
            <Route path="/home" element={<LayoutBase titulo={'Plumbum'} />} />

            <Route path="/cadastro" element={<LayoutBase titulo={'Plumbum'} />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>   
    )

    /*
    {<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Drawer</Button>}
    */
};

