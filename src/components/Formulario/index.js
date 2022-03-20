import React from 'react';
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
} from './styles';

export default function Formulario() {
    return (
        <Container>
            <Header>

                <Titulo style={{ color: '#fff', fontWeight: 'lighter', marginTop: 20, marginLeft: 25 }}>
                    Formulário <br />
                    para compras de
                </Titulo>

                <Titulo style={{ color: '#fff', marginLeft: 25 }}>Compre seu pacote de adesivos</Titulo>
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
                    />
                    <TextOpcoes>Angular</TextOpcoes>
                </AreaCheckbox>

                <Titulo>Quantos adesivos de cada?</Titulo>

                <Titulo>Observações:</Titulo>

                <TextoArea
                    type="text"
                    placeholder="Alguma dúvida? Recado?"

                />

            </Conteudo>

            <Footer>
                <Botao>
                    <TextoBotao>ENVIAR</TextoBotao>
                </Botao>
            </Footer>
        </Container>
    );
}