import { NavbarDefault } from "../shared/components/NavbarDefault";

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const AcessoConta: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    return (
        <body>
            <header>
                <NavbarDefault titulo={'Plumbum'} />
                <section className="section1AcessoConta"></section>
            </header>
        </body>
    );
};