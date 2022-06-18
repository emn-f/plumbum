
import './../../styleGeral.css';
import './../../App.css';
import { Texto } from '../../indexGeral';
import { NavbarDefault } from '../components/NavbarDefault';

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    return (
        <body>
            <header>
                <NavbarDefault titulo={'Plumbum'} />
            </header>
            <section className='container'> {/*secao 1*/}
            </section>
        </body>
    );
};