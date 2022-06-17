
import './../../styleGeral.css';
import './../../App.css';
import logo from '../../shared/components/logo.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import seta from '../../shared/components/arrow.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { Texto } from '../../indexGeral';

import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../shared/contexts';

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();

    const { toggleDrawerClose: toggleDrawerOpen } = useDrawerContext();
    return (
        <Box height='100' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} alignItems='center' height={theme.spacing(12)} display='flex'>
                {smDown && (
                    <IconButton className='mobile-menu' onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>)}
            </Box>

            
            <body>
            <header>
                <nav className='nav'> {/* navbar*/}
                    <a className='logo'> {/* logo e icon */}
                        <a className='logosizeimg' href='/'><img src={logo} alt="Logo do Plumbum" /></a>
                        <a href='/'>Plumbum</a>
                    </a>

                    <ul className='nav-list'> {/* links */}
                        <li className='back-nav-list'><a href='/'>Home</a></li>
                        <li className='back-nav-list'><a href='./pages/metodologia.html'>Metodologia</a></li>
                        <li className='back-nav-list'><a href='/sobre'>Sobre</a></li>
                        <li className='back-nav-list'><a href='/contato'>Contato</a></li>
                    </ul>
                    <ul className='nav-list'>
                        <li className='cad_log'><a href='/cadastro'>Cadastre-se</a></li>
                        <li className='cad_log'><a href='/login'>Login</a></li>
                    </ul>
                </nav>
            </header>
            <section className='container'> {/*secao 1*/}
                <Texto siteNome='Plumbum' />
                <ul className='btn1'> {/* botão na img*/}
                    <a href='/'>Conheça nossos métodos</a>
                </ul>
                <a className='arrow' href='/'><img src={seta} alt="Logo do Plumbum" /></a>
            </section>

            <section className='section2'> {/*secao 2*/}
                <div className='back2'>
                    <div className='divsection2'>1</div>
                    <div className='divsection2'>2</div>
                    <div className='divsection2'>3</div>
                    <div className='divsection2'>4</div>
                </div>
            </section>  {/*<script src="mobile-navbar.jsx"></script>*/};
        </body>
        </Box>

    );
};