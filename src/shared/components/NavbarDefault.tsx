import './../../styleGeral.css';
import './../../App.css';
import logo from '../../shared/components/logo.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { Icon, IconButton, Theme, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../contexts';

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const NavbarDefault: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(1067));
    const theme = useTheme();

    const { toggleDrawerClose: toggleDrawerOpen } = useDrawerContext();
    return (

        <nav className='nav'> 
            <a className='logo'>
                <a className='logosizeimg' href='/'><img src={logo} alt="Logo do Plumbum" /></a>
                <a href='/'>Plumbum</a>
            </a>

            <ul className='nav-list'>
                <li className='back-nav-list'><a href='/'>Home</a></li>
                <li className='back-nav-list'><a href='./pages/metodologia.html'>Metodologia</a></li>
                <li className='back-nav-list'><a href='/sobre'>Sobre</a></li>
                <li className='back-nav-list'><a href='/contato'>Contato</a></li>
            </ul>
            <ul className='nav-list'>
                <li className='cad_log'><a href='/cadastro'>Cadastre-se</a></li>
                <li className='cad_log'><a href='/login'>Login</a></li>
            </ul>
            <div>
                {mdDown && (
                    <IconButton className='mobile-menu' onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>)}
            </div>
        </nav>


    );
};