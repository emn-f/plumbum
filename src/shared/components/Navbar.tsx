import './../../shared/styles/style.css';
import './../../App.css';
import logo from '../../shared/components/imgs/icons/logo.png';
import { Icon, IconButton, Theme, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../contexts';

type Props = {};

interface INavbar {
    children?: React.ReactNode;
};

export const Navbar: React.FC<INavbar> = ({ children }) => {
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(870));
    const { toggleDrawerClose: toggleDrawerOpen } = useDrawerContext();
    const theme = useTheme();

    return (
        <nav className='navbar'>
            <a href='/home' className='logoP'>
                <a className='linksNavbar'><img className='logosizeimg' src={logo} alt="Logo do Plumbum" /></a>
                <a className='linksNavbar'>Plumbum</a>
            </a>

            <ul className='nav-list'>
                <li className='back-nav-list'><a className='linksNavbar' href='/metodologia'>Metodologia</a></li>
                <li className='back-nav-list'><a className='linksNavbar' href='/sobre'>Sobre</a></li>
                <li className='back-nav-list'><a className='linksNavbar' href='/contato'>Contato</a></li>
            </ul>

            <ul className='nav-list'>
                <li className='cad_log'><a className='linksNavbar' href='/cadastro'>Cadastre-se</a></li>
                <li className='cad_log'><a className='linksNavbar' href='/login'>Login</a></li>
            </ul>
            <div>
                {mdDown && (
                    <IconButton className='mobile-menu' onClick={toggleDrawerOpen}>
                        <Icon style={{ color: 'white' }}>menu</Icon>
                    </IconButton>)}
            </div>
        </nav>
    );
};