import { Navbar } from '../shared/components/Navbar';
import { Rodape } from '../shared/components/Rodape';


export const PortalEstudante = () => {
    return (
        <html>


            <header>
                <Navbar />
            </header>

            <body>
                <section>
                    <div>
                        <div className='container secoes'>
                            <a className='linksSecao' href='/login/textos'>Textos</a>
                            <a className='linksSecao' href='/login/relatorios'>Relatórios</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <div className='container bgdMenu'>
                            <a className='container linksLogin' href='/login'>Todos</a>
                            <a className='container linksLogin' href='/login'>Rascunhos</a>
                            <a className='container linksLogin' href='/login'>Corrigidos</a>
                            <a className='container linksLogin' href='/login'>Aguardando correção</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='bgdTxt'>
                        <div className='container quadrado'>
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