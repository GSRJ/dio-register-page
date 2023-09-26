import React from 'react';
import { Container } from './styles';

export const Input = ({type, placeholder, img, alt}) => {
  return (
    <Container>
    <img src={img} alt={alt}/>
    <input type={type} placeholder={placeholder} />
    </Container>
  )
}
