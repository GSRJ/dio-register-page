import React from 'react';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <img src="#" alt="Logotipo da Dio"/>
      </div>
      <div>
        Home
        <button type='button'>Entrar</button>
        <button type='button'>Cadastrar</button>
      </div>
    </Container>
  )
}
