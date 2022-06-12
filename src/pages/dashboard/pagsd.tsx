import './../../styleGeral.css';
import './../../App.css';
import logo from '../../shared/components/logo.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import seta from '../../shared/components/arrow.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { Texto } from '../../indexGeral';

export const Pagsd = () => {
    return (
        
        <body>
            <header>
                <nav className='nav'> {/* navbar*/}
                    <a className='logo'> {/* logo e icon */}
                        <a className='logosizeimg' href='/'><img src={logo} alt="Logo do Plumbum" /></a>
                        <a href='/'>Plumbum</a>
                    </a>

                    <div className='mobile-menu'> {/* menu hamburguer (consertar) */}
                        <div className='line1'></div>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>

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
    );
};
