import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { BiLogOutCircle } from 'react-icons/bi';
import { TiShoppingCart, TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import {
    Container,
    Botao,
    Perfil,
    Texto,
    Nome,
    AreaBotao,
    TextoMenu,
} from './styles';

export default function Header() {

    const { user, signOut } = useContext(AuthContext);

    return (
        <Container>

            <AreaBotao>

                <Link style={{ alignItems: 'center', display: 'flex', marginRight: 10}}>
                    <TiHome size={20} color='#fff' />
                    <TextoMenu>Início</TextoMenu>
                </Link>

                <Link style={{ alignItems: 'center', display: 'flex' }}>
                    <TiShoppingCart size={20} color='#fff' />
                    <TextoMenu>Carrinho</TextoMenu>
                </Link>
            </AreaBotao>


            <Perfil>
                <Texto>Bem-vindo(a)</Texto>
                <Nome>{user.nome}</Nome>
            </Perfil>


            <Botao onClick={() => signOut()}>
                <BiLogOutCircle size={30} color='#fff' />
            </Botao>
        </Container>
    );
}