import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Formulario from '../../components/Formulario';

import {
    Container,
} from './styles';

export default function Dashboard() {

    return (
        <Container>
            <Header />
            <Formulario />
        </Container>
    );
}