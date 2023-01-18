import React from "react";
import Footer from "../components/footer/";
import Icon from "../components/icons";
import Facebook from "../assets/img/Facebook.png";
import Discord from "../assets/img/Discord.png";
import Instagram from "../assets/img/Instagram.jpg";
import Ayuda from "../components/pages/Ayuda";
import Inicio from "../components/pages/Inicio";











export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title></Footer.Title>
                                <ul>
                                    <li><Footer.Link href="/" target="_blank" rel="noreferrer" src={Inicio}><p>ayuda</p></Footer.Link></li>
                                    <li><Footer.Link href="/ayuda" target="_blank" rel="noreferrer" src={Ayuda}><p>ayuda</p></Footer.Link></li>
                                    <li><Footer.Link href="/acerca de" target="_blank"><p>acerca de</p></Footer.Link></li>
                                    <li><Footer.Link href="/mi cuenta" target="_blank"><p>mi cuenta</p></Footer.Link></li>
                                    <li><Footer.Link href="/informacion util" target="_blank"><p>información útil</p></Footer.Link></li>
                                    <li><Footer.Link href="/contacto" target="_blank"><p>contacto</p></Footer.Link></li>
                                    <li><Footer.Link href="/comunidad" target="_blank"><p>comunidad</p></Footer.Link></li>         
                                </ul>    
                    </Footer.Column>
                
                    <Footer.Column>
                        <Footer.Title><h4>lo más buscado</h4></Footer.Title>
                            <ul>
                                <li><Footer.Link href="/placas nvidia" target="_blank">placas Nvidia</Footer.Link></li>
                                <li><Footer.Link href="/placas amd" target="_blank">placas de video amd</Footer.Link></li>
                                <li><Footer.Link href="/gabinetes" target="_blank">gabinetes</Footer.Link></li>
                                <li><Footer.Link href="/monitores" target="_blank">monitores</Footer.Link></li>
                                <li><Footer.Link href="/teclado mecanico" target="_blank">teclado mecanico</Footer.Link></li>
                                <li><Footer.Link href="/mouse gamer" target="_blank">mouse gamer</Footer.Link></li>
                            </ul>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title><h3>seguinos en nuestra redes</h3></Footer.Title>
                        <nav
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                            >
                            <a href="http://www.facebook.com" target="_blanck" rel="noreferrer"><img src={Facebook} alt="" width="52" height="52"></img></a>
                            <a href="http://www.discord.com" target="_blanck" rel="noreferrer"><img src={Discord} alt="" width="52" height="52"></img></a>
                            <a href="http://instagram.com" target="_blanck" rel="noreferrer"><img src={Instagram} alt="" width="52" height="52"></img></a>
                        </nav>    
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
