import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';
import {
    Container,
    Header,
    Conteudo,
    Titulo,
    Input,
    TextOpcoes,
    AreaCheckbox,
    Footer,
    Botao,
    TextoBotao,
    TextoArea,
    AreaTitulo,
    Imagem,
    AreaQuantidadeProdutos,
} from './styles';
import caixa from '../../assets/caixa.jpg';

export default function Formulario() {

    const [contadorProdutos, setContadorProdutos] = useState(1);
    const [observacao, setObservacao] = useState('');
    const [produto, setProduto] = useState();


    async function handleAdd(e) {
        e.preventDefault();
        await firebase.firestore().collection('compras')
            .doc('comprasID')
            .set({
                observacao: observacao,
                contadorProdutos: contadorProdutos,
                produto: produto,

            })
            .then(() => {
                toast.success('Item enviado para o carrinho');
            })
            .catch((error) => {
                toast.error('Algo deu errado, tente novamente mais tarde!');
            })
        setContadorProdutos(1);
        setObservacao('')
    }

    function handleOptions(e) {
        setProduto(e.target.value)
    }


    return (
        <Container>
            <Header>
                <AreaTitulo>
                    <Titulo style={{ color: '#fff', fontWeight: 'lighter', marginTop: 20, marginLeft: 25 }}>
                        Formulário <br />
                        para compras de
                    </Titulo>
                    <Titulo style={{ color: '#fff', marginLeft: 25, fontSize: 20 }}>Pacote de adesivos</Titulo>
                </AreaTitulo>
                <Imagem src={caixa} />
            </Header>


            <Conteudo conteudo={observacao}>
                <Titulo>Qual adesivo você deseja?</Titulo>

                <AreaCheckbox>
                    <Input
                        type="radio"
                        name='radio'
                        value='React'
                        onChange={handleOptions}
                        checked={produto === 'React'}
                    />
                    <TextOpcoes>React</TextOpcoes>
                </AreaCheckbox>

                <AreaCheckbox>
                    <Input
                        type="radio"
                        name='radio'
                        value='Vue'
                        onChange={handleOptions}
                        checked={produto === 'Vue'}
                    />
                    <TextOpcoes>Vue</TextOpcoes>
                </AreaCheckbox>


                <AreaCheckbox>
                    <Input
                        type="radio"
                        name='radio'
                        value='Angular'
                        onChange={handleOptions}
                        checked={produto === 'Angular'}
                    />
                    <TextOpcoes>Angular</TextOpcoes>
                </AreaCheckbox>

                <Titulo>Quantas unidades desse adesivo?</Titulo>

                <AreaQuantidadeProdutos>

                    {contadorProdutos > 1 &&
                        <Botao onClick={() => setContadorProdutos(contadorProdutos - 1)}>
                            <TextoBotao>-</TextoBotao>
                        </Botao>
                    }

                    <Input
                        disabled
                        value={contadorProdutos}
                        onChange={(e) => setContadorProdutos(e.target.value)}
                    />

                    <Botao onClick={() => setContadorProdutos(contadorProdutos + 1)}>
                        <TextoBotao>+</TextoBotao>
                    </Botao>
                </AreaQuantidadeProdutos>

                <Titulo>Observações:</Titulo>

                <TextoArea
                    type="text"
                    placeholder="Alguma dúvida? Recado?"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                />

            </Conteudo>

            <Footer>

                <Botao
                    style={{ width: 120, height: 45 }}
                    onClick={handleAdd}
                >
                    <TextoBotao style={{ fontSize: 16 }}>ENVIAR </TextoBotao>
                </Botao>
            </Footer>
        </Container>
    );
}