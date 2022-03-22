import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';
import {
    Container,
    Conteudo,
    AreaTitulo,
    Titulo,
    Label,
    AreaDados,
    Input,
    Dados,
    AreaBotao,
    Botao,
    TextoBotao,
} from './styles';
import Header from '../../components/Header';

export default function Carrinho() {

    const [contadorProdutos, setContadorProdutos] = useState();
    const [produtos, setProdutos] = useState();
    const [observacoes, setObservacoes] = useState();

    useEffect(() => {
        async function atualizar() {

            await firebase.firestore().collection('compras')
                .doc('comprasId')
                .set({
                    produto: produtos,
                    contadorProdutos: contadorProdutos,
                    observacao: observacoes,
                })
                .then(() => {
     
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        atualizar();
    }, []);

    async function CarregarCompras() {

        await firebase.firestore().collection('compras')
            .doc('comprasID')
            .get()
            .then((snapshot) => {
                setContadorProdutos(snapshot.data().contadorProdutos)
                setProdutos(snapshot.data().produto);
                setObservacoes(snapshot.data().observacao);
            })
            .catch((error) => {
                toast.error('ocorreu um erro')
            })
    }

    function finalizarComprar() {
        toast.success('Compra finalizada com sucesso!')
        setContadorProdutos('');
        setProdutos('');
        setObservacoes('');
        CarregarCompras()
    }

    return (
        <Container>
            <Header />
            <Conteudo>
                <AreaTitulo>
                    <Titulo>Você está comprando</Titulo>
                    <Label>Adesivo: {produtos}</Label>
                    <Label>Quantidade: {contadorProdutos}</Label>
                    <Label>Observações: {observacoes}</Label>
                </AreaTitulo>


                <AreaTitulo>
                    <Titulo>Forma de Pagamento</Titulo>

                    <AreaDados>
                        <Dados>
                            <Label>Número do cartão</Label>
                            <Input type='number' />
                            <Label>Código de segurança</Label>
                            <Input type='number' />
                        </Dados>

                        <Dados>
                            <Label>Nome do titular</Label>
                            <Input type='text' />
                            <Label>CPF ou CNPJ do titular</Label>
                            <Input type='number' />
                        </Dados>
                    </AreaDados>
                </AreaTitulo>

                <AreaBotao>
                    <Botao onClick={() => finalizarComprar()}>
                        <TextoBotao>Finalizar Compra</TextoBotao>
                    </Botao>
                </AreaBotao>
            </Conteudo>
        </Container >
    );
}