import './../../shared/styles/style.css';
import './../../App.css';
import { useMediaQuery } from '@mui/material';

type Props = {};

interface IRodape {
    children?: React.ReactNode;
};

export const Rodape: React.FC<IRodape> = ({ children }) => {
    const copyrgtP = useMediaQuery('(max-width:600px)');
    const copyrgtM = useMediaQuery('(min-width:600.1px)');
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>
            <footer>
                <div className='estruturaRodape'>
                    <div className='container styRodape'>
                        <a href='https://portal.ifba.edu.br/prpgi' target="_blank" className='container logo1'></a>
                        <a href='http://dgp.cnpq.br/dgp/espelhogrupo/300704' target="_blank" className='container logo2'></a>
                        <div className='divisor'></div>
                    </div>
                    <div className='container bgdRodape'>
                        <div className='container endRodape'>IFBA - Campus Camaçari<br />
                            Loteamento Espaço Alfa s/n, Tv. Limoeiro, Camaçari - BA, 42808-590
                        </div>
                    </div>
                </div>
                <div>

                    <div className='coprgt'>
                        <div className='txtcoprgt'>
                            Copyright © 2022 Grupo Mosaico
                        </div>
                    </div>
                </div>
            </footer>
        </html>
    );
};