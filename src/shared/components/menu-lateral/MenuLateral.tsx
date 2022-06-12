import { Drawer, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { Children } from "react";
import './NavList-MenuLateral.css';

type Props = {
    children?: React.ReactNode;
};

export const MenuLateral: React.FC<Props> = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Drawer open={true} variant='permanent'>
                <Box width={theme.spacing(28)} height='100' display='flex' flexDirection='column'>


                <Box flex={1}>
                    
                    </Box>  
                    <ul className='nav-list'> {/* links */}
                        <li className='back-nav-list'><a href='/'>Home</a></li>
                        <li className='back-nav-list'><a href='./pages/metodologia.html'>Metodologia</a></li>
                        <li className='back-nav-list'><a href='/sobre'>Sobre</a></li>
                        <li className='back-nav-list'><a href='/contato'>Contato</a></li>
                    </ul>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}

            </Box>
        </>
    )
};