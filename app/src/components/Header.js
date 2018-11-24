import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Container} from 'reactstrap';
import Logo from '../assets/webcam-icon-5.jpg'

function Header() {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <a class="navbar-brand mx-auto" href="#">
                AUTO{" "}
                <img src={Logo} alt="Logo" width="60" height="60"/>
                {" "}SCANNER
                </a>
            </Container>
        </Navbar>
    )
}

export default Header
