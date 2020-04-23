import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1> Faça o seu logon</h1>
          <Input placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <a href="fdf"> Esqueci minha senha</a>
        </form>

        <a href="cria">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
