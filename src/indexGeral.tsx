export const Texto = (props: any) => {
    return (
        <div>
            <h1 className='titulo'> Seja Bem-Vindo(a) ao {props.siteNome}</h1>
            <h2 className='subtitulo'> Uma plataforma gratuita que faz muito mais do que apenas te ajudar a construir a redação perfeita!</h2>
        </div>
    );
};

export const Home = (props: any) => {
    return (
        <div>
            <div className="titulo"></div>
            <div className="subtitulo"></div>
        </div>
    );
}