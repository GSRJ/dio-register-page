import React from 'react';
import logo from "../../assets/logo.svg";
import { Button } from '../Button';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logotipo da Dio"/>
      </div>
      <div>
        Home
        <Button type='button'>Entrar</Button>
        <Button type='button'>Cadastrar</Button>
      </div>
    </Container>
  )
}
