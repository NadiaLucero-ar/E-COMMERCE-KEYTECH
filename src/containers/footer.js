import React from "react";
import { Redirect } from "react-router-dom";
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
                                    <li><Footer.Link href="/ayuda" target="_blank"><p>ayuda</p></Footer.Link></li>
                                    <li><Footer.Link href="/acerca-de" target="_blank"><p>acerca de</p></Footer.Link></li>
                                    <li><Footer.Link href="mi-cuenta" target="_blank"><p>mi cuenta</p></Footer.Link></li>
                                    <li><Footer.Link href="informacion-util" target="_blank"><p>información útil</p></Footer.Link></li>
                                    <li><Footer.Link href="contacto" target="_blank"><p>contacto</p></Footer.Link></li>
                                    <li><Footer.Link href="comunidad" target="_blank"><p>comunidad</p></Footer.Link></li>         
                            </ul>    
                    </Footer.Column>
                
                    <Footer.Column>
                        <Footer.Title><h4>lo más buscado</h4></Footer.Title>
                            <ul>
                                <li><Footer.Link to="/Placas-nvidia" href="/placas-nvidia" target="_blank">Placas Nvidia</Footer.Link></li>
                                <li><Footer.Link href="/placas-amd" target="_blank">placas de video amd</Footer.Link></li>
                                <li><Footer.Link href="/gabinetes" target="_blank">gabinetes</Footer.Link></li>
                                <li><Footer.Link href="/monitores" target="_blank">monitores</Footer.Link></li>
                                <li><Footer.Link href="teclado-mecanico" target="_blank">teclado mecanico</Footer.Link></li>
                                <li><Footer.Link href="mouse-gamer" target="_blank">mouse gamer</Footer.Link></li>
                            </ul>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title><h3>seguinos en nuestra redes</h3></Footer.Title>
                            <Footer.Link href="http://www.facebook.com" target="_blank"><Icon className="fa-brands fa-facebook"/></Footer.Link>
                            <Footer.Link href="http://www.discord.com" target="_blank"><Icon className="fa-brands fa-discord" /></Footer.Link>
                            <Footer.Link href="http://instagram.com" target="_blank"><Icon className="fa-brands fa-instagram" /></Footer.Link>
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