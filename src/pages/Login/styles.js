import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
display:flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 720px){
align-items: center;
justify-content: center;
padding: 10px;
}

`;

export const AreaLogin = styled.div`
background-color: #eaeaec;
width: 600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 15px;
`;

export const AreaLogo = styled.div`
background-color: #115F9E;
width: 100%;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
padding: 10px;
`;

export const Imagem = styled.img`
padding: 20px;
width: 170px;
height: 130px;

`;

export const Titulo = styled.h1`
text-align: center;
color: #181c2e;
`;

export const AreaFormulario = styled.div`
margin-top: 1.5em;
width: 90%;
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
margin-bottom: 15px;
height: 35px;
border: 0;
border-radius: 7px;
padding: 10px;
font-size: 15px;
background-color: #fff;
`;

export const Botao = styled.button`
height: 35px;
border:0;
border-radius: 7px;
background-color: #0046A0;
color: #fff;
font-weight: bold;
font-size: 18px;
`;

