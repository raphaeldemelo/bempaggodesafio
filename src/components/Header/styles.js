import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 60px;
background-color: #115F9E;
display:flex;
align-items: center;
justify-content: flex-end;
padding-right: 20px;

@media screen and (max-width: 720px){
    width: 100%;
    height: auto;
    position: relative; 
}
`;

export const Botao = styled.button`
border: 0;
padding: 5px;
width: 80px;
height: 50px;
border-radius: 8px;
background-color: #115F9E;
margin-left: 10px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const TextoBotao = styled.h2`
color: #fff;
font-size: 12px;
`;

export const Perfil = styled.div`
line-height: 1;
margin-right: 10px;
margin-left: 10px;

@media screen and (max-width: 720px){
    display: none;
}
`;

export const Texto = styled.h5`
font-weight: lighter;
`;

export const Nome = styled.h2`
font-weight: bold;
`;

export const AreaBotao = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`;

export const TextoMenu = styled.h5`
font-weight: lighter;
margin-left: 2px;
padding: 10px;
`;