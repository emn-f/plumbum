import './../styleGeral.css';
import './../App.css';
import seta from './../shared/components/arrow.png'; //O arquivo custom.d.ts foi adicionado para o programa reconhcer a imagem em png
import { Texto } from '../indexGeral';
import { NavbarDefault } from '../shared/components/NavbarDefault';

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const PaginaInicial: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    return (
        <body>
            <header>
                <NavbarDefault titulo={'Plumbum'} />
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
            </section> 
        </body>
    );
};