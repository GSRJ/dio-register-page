import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
export const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h3>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h3>
        </div>
        <div>
          <h3>Comece agora grátis</h3>
          <p>Crie sua conta e make the change._</p>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <Button> Criar Minha conta </Button>
            <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
          </form>
          <span>Já tenho conta. <a href="">Fazer login</a></span>
        </div>
      </Content>
    </Container>
  );
}

