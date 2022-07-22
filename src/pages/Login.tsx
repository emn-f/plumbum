import { NavbarDefault } from "../shared/components/NavbarDefault";

type Props = {};

interface ILayoutBaseProps {
    titulo: string;
    children?: React.ReactNode;
};

export const Login: React.FC<ILayoutBaseProps> = ({ children, titulo }) => {
    return (
        <body>
            <header>
                <NavbarDefault titulo={'Plumbum'} />
            </header>
        </body>
    );
};