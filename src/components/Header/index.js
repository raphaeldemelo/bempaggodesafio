import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import {
    Container,
    Botao,
    TextoBotao,
} from './styles';

export default function Header() {

    const { signOut } = useContext(AuthContext);

    return (
        <Container>
            <Botao onClick={() => signOut()}>
                <TextoBotao>
                    Sair
                </TextoBotao>
            </Botao>
        </Container>
    );
}