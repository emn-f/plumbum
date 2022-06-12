import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { Pagsd } from "../pages/dashboard/pagsd";
import { useDrawerContext } from '../shared/contexts';


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
            <Route path="/home" element={<Pagsd />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )

    /*
    {<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Drawer</Button>}
    */
};

