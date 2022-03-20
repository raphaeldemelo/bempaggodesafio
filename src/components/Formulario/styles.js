import styled from 'styled-components';

export const Container = styled.div`
background-color: #F2F2F2;
width: 600px;
height: 750px;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 10px;

@media screen and (max-width: 720px){
    width: 100%;
    height: auto;
    position: relative; 
}
`;

export const Header = styled.div`
background-color: #2F3676;
height: 200px;
flex-direction: column;
`;

export const Conteudo = styled.div`
`;

export const Input = styled.input`

`;

export const Titulo = styled.h1`
color: #000;
font-size: 18px;
margin-left: 10px;
`;

export const TextOpcoes = styled.h1`
color: #000;
font-size: 15px;
font-weight: normal;
margin-left: 5px;
`;

export const AreaCheckbox = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`;


export const Footer = styled.div`
background-color: #D6DAE4;
height: 100px;
width: 600px;
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 20px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;

@media screen and (max-width: 720px){
    width: 100%;
    height: 100px;
    position: relative; 
}
`;

export const Botao = styled.button`
background-color: #2F3575;
padding: 10px;
border-radius: 10px;
width: 120px;
height: 45px;
border: 0;
`;

export const TextoBotao = styled.h1`
color: #fff;
font-size: 16px;
`;

export const TextoArea = styled.textarea`
min-width: 95%;
border-radius: 7px;
min-height: 100px;
resize: none;
padding: 10px;
margin-left: 15px;
`;