import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Button: React.FC = () => (
  <Container>
    <button type="button">teste</button>
  </Container>
);
export default Button;
