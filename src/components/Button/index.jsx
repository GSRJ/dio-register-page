import React from 'react';
import { Container, ContainerRed, ContentRed } from './styles';

export const Button = ({children, color}) => {

  if (color === 'red'){
    return (
      <ContainerRed>
      <ContentRed>{children}</ContentRed>
      </ContainerRed>
    )
  }
  return (
    <Container>{children}</Container>
  )
}
