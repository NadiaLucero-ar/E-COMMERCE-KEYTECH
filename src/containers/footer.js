import React from "react";
import Footer from "../components/footer/";
import Icon from "../components/icons";

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title></Footer.Title>
                            <ul>
                                <li><Footer.Link href="#"><p>ayuda</p></Footer.Link></li>
                                <li><Footer.Link href="#"><p>acerca de</p></Footer.Link></li>
                                <li><Footer.Link href="#"><p>mi cuenta</p></Footer.Link></li>
                                <li><Footer.Link href="#"><p>información útil</p></Footer.Link></li>
                                <li><Footer.Link href="#"><p>contacto</p></Footer.Link></li>
                                <li><Footer.Link href="#"><p>cmunidad</p></Footer.Link></li>
                            </ul>
                    </Footer.Column>
                
                    <Footer.Column>
                        <Footer.Title><h4>lo más buscado</h4></Footer.Title>
                            <ul>
                                <li><Footer.Link href="#" >placas de video nvidia</Footer.Link></li>
                                <li><Footer.Link href="#">placas de video amd</Footer.Link></li>
                                <li><Footer.Link href="#">gabinetes</Footer.Link></li>
                                <li><Footer.Link href="#">monitores</Footer.Link></li>
                                <li><Footer.Link href="#">teclado mecanico</Footer.Link></li>
                                <li><Footer.Link href="#">mouse gamer</Footer.Link></li>
                            </ul>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title><h3>seguinos en nuestra redes</h3></Footer.Title>
                            <Footer.Link href="#" ><Icon className="fab fa-facebook-f" /></Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-youtube" /></Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-instagram" /></Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-f" /></Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}