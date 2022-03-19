import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    AreaLogin,
    AreaLogo,
    AreaFormulario,
    Botao,
    Titulo,
    Input,
} from './styles';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <Container>
            <AreaLogin>
                <AreaLogo>
                    <Titulo style={{ color: '#fff' }}>Desafio BemPaggo</Titulo>
                </AreaLogo>

                <AreaFormulario>
                    <Titulo>Entrar</Titulo>
                    <Input
                        type="text"
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder='*******'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <Botao type="submit" onClick={handleSubmit}>Acessar</Botao>
                </AreaFormulario>

                <Link style={{ margin: 20, color: '#000', cursor: 'pointer' }}
                    to='/cadastrar'>Criar uma conta
                </Link>

            </AreaLogin>
        </Container >
    );
}

