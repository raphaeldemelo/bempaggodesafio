import React, { useState } from 'react';
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
import caixa from '../../assets/caixa.jpg'

export default function Formulario() {

    const [contadorProdutos, setContadorProdutos] = useState(1);

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


            <Conteudo>
                <Titulo>Quais adesivos:</Titulo>

                <AreaCheckbox>
                    <Input
                        type="checkbox"
                        name='checkbox'
                    />
                    <TextOpcoes>React</TextOpcoes>
                </AreaCheckbox>

                <AreaCheckbox>
                    <Input
                        type="checkbox"
                        name='checkbox'
                    />
                    <TextOpcoes>Vue</TextOpcoes>
                </AreaCheckbox>


                <AreaCheckbox>
                    <Input
                        type="checkbox"
                        name='checkbox'
                        value={contadorProdutos}
                    />
                    <TextOpcoes>Angular</TextOpcoes>
                </AreaCheckbox>

                <Titulo>Quantos adesivos de cada?</Titulo>

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
                />

            </Conteudo>

            <Footer>
                <Botao
                    style={{ width: 120, height: 45 }}
                    onClick={() => alert('clicou em enviar')}
                >
                    <TextoBotao style={{ fontSize: 16 }}>ENVIAR </TextoBotao>
                </Botao>
            </Footer>
        </Container>
    );
}