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
                                <li><Footer.Link href="#" target="_blank">placas de video nvidia</Footer.Link></li>
                                <li><Footer.Link href="#" target="_blank">placas de video amd</Footer.Link></li>
                                <li><Footer.Link href="#" target="_blank">gabinetes</Footer.Link></li>
                                <li><Footer.Link href="#" target="_blank">monitores</Footer.Link></li>
                                <li><Footer.Link href="#" target="_blank">teclado mecanico</Footer.Link></li>
                                <li><Footer.Link href="#" target="_blank">mouse gamer</Footer.Link></li>
                            </ul>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title><h3>seguinos en nuestra redes</h3></Footer.Title>
                            <Footer.Link href="#" target="_blank"><Icon className="fa-brands fa-facebook" /></Footer.Link>
                            <Footer.Link href="#" target="_blank"><Icon className="fa-brands fa-discord" /></Footer.Link>
                            <Footer.Link href="#" target="_blank"><Icon className="fa-brands fa-instagram" /></Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Link href="#" target="_blank"><Icon className="fa-solid fa-qrcode" /></Footer.Link>
                    </Footer.Column> 
                </Footer.Row>
            </Footer.Wrapper>
            <Footer.Row>
                <copyright>© keytech 2023 | Designed by keytech</copyright>
            </Footer.Row>
        </Footer>
    )
}