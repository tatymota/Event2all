import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { StyledNav } from './styles';
import "./headerHome.scss"
import Photo from "../../assets/images/logotipo2.png";



export default function HeaderHome() {
  return (
    <Navbar id="view-height" className='bg-info'>
      <Container>
        <Navbar.Brand className='text-white' href="#home"><img src={Photo}></img></Navbar.Brand>
        <Navbar.Brand className='text-white' href="#home">Home</Navbar.Brand>
        <Navbar.Brand className='text-white' href="#home">Quem somos</Navbar.Brand>
        <Navbar.Brand className='text-white' href="#home">Benefícios</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button className='py-1 px-4 rounded-1'>Fazer login</Button>
            <Button className='py-1 px-4 rounded-1'>Cadastrar-se</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}