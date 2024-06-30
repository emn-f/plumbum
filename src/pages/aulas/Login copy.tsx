import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "../../shared/components/Navbar";
import { Rodape } from "../../shared/components/Rodape";


export const LoginP = () => {
    const inputSenhaRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emailLength = useMemo(() => {
        return email.length;
    }, [email.length]);

    const HandleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha])


    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <label>
                    <span>E-mail</span>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputSenhaRef.current?.focus() : undefined}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input
                        ref={inputSenhaRef}
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="button" onClick={HandleEntrar}>
                    Entrar
                </button>
            </form>

        </div>
    );
}
