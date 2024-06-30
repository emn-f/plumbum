import { Link } from 'react-router-dom';
import { Navbar } from '../shared/components/Navbar';
import { Rodape } from '../shared/components/Rodape';


export const PortalProfessor = () => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
            </head>

            <header>
                <Navbar />
            </header>

            <body>
                <section>
                    <div>
                        <div className='container secoes'>
                            <a className='linksSecao' href='/login/prof'>Textos</a>
                            <a className='linksSecao' href='/login/prof'>Alunos</a>
                            <a className='linksSecao' href='/login/prof'>Relatórios</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <div className='container bgdMenu'>
                            <a className='container linksLogin' href='/login'>Todos</a>
                            <a className='container linksLogin' href='/login'>Corrigidos</a>
                            <a className='container linksLogin' href='/login'>Aguardando correção</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='bgdTxt'>
                        <div className='container quadrado'>
                            <Link to='/new/ficha-planejamento/assunto'>Blabo</Link>
                            <a className='newFP' href='/new/ficha-planejamento/assunto'>Novo texto</a>
                        </div>
                    </div>
                </section >
                
            </body >
            <footer>
                <Rodape />
            </footer>
        </html>
    )
}