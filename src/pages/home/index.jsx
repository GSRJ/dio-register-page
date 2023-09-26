import emailImg from "../../assets/inputEmailVector.svg";
import profileImg from "../../assets/inputNameVector.svg";
import passwordImg from "../../assets/inputPasswordVector.svg";
import { Button } from '../../components/Button';
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { Container, Content } from "./styles";
export const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div className='box'>
          <h3>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h3>
        </div>
        <div className='box'>
          <h3>Comece agora grátis</h3>
          <p>Crie sua conta e make the change._</p>
          <form>
            <Input type="text" placeholder="Nome completo" img={profileImg} alt="Profile Icon"/>
            <Input type="text" placeholder="Email" img={emailImg} alt="Email Icon"/>
            <Input type="text" placeholder="Password" img={passwordImg} alt="Password Icon"/>
            <Button color={"red"}> Criar Minha conta </Button>
          </form>
          <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
          <span>Já tenho conta. <a href="">Fazer login</a></span>
        </div>
      </Content>
    </Container>
  );
}
