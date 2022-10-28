import { Navbar, Container } from "react-bootstrap";
import { musicIcon } from "./Icons";

function NavbarMusicYouFeel() {
  return (
    <Navbar bg='light' expand='lg' className='sidebar'>
      <Container>
        <Navbar.Brand className='brand' href='/'>
          {musicIcon} MusicYouFeel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
  );
}

export default NavbarMusicYouFeel;
