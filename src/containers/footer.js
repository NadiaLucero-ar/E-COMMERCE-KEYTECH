import React from "react";
import Footer from "../components/footer/";
import Qr from "../assets/img/Qr.png"
import Facebook from "../assets/img/Facebook.png";
import Discord from "../assets/img/Discord.png";
import Instagram from "../assets/img/Instagram.png";
import Ayuda from "../components/pages/Ayuda";
import Home from "../components/pages/Home";
import AcercaDe from "../components/pages/Acerca-de";
import MiCuenta from "../components/pages/Mi-cuenta";
import InformacionUtil from "../components/pages/Informacion-util";
import Contacto from "../components/pages/Contacto";
import Comunidad from "../components/pages/Comunidad";
import PlacasNvidia from "../components/pages/Placas-nvidia";
import PlacasAmd from "../components/pages/Placas-amd";
import Gabinetes from "../components/pages/Gabinetes";
import Monitores from "../components/pages/Monitores";
import TecladoMecanico from "../components/pages/Teclado-mecanico";
import MouseGamer from "../components/pages/Mouse-gamer";




export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title></Footer.Title>
                                <ul>
                                    <Footer.Link href="/" src={<Home/>}></Footer.Link>
                                    <li><Footer.Link href="/ayuda" target="_blank" rel="noreferrer" src={<Ayuda/>}><p>ayuda</p></Footer.Link></li>
                                    <li><Footer.Link href="/acerca de" target="_blank" src={<AcercaDe/>}><p>acerca de</p></Footer.Link></li>
                                    <li><Footer.Link href="/mi cuenta" target="_blank" src={<MiCuenta/>}><p>mi cuenta</p></Footer.Link></li>
                                    <li><Footer.Link href="/informacion util" target="_blank" src={<InformacionUtil/>}><p>información útil</p></Footer.Link></li>
                                    <li><Footer.Link href="/contacto" target="_blank" src={<Contacto/>}><p>contacto</p></Footer.Link></li>
                                    <li><Footer.Link href="/comunidad" target="_blank" src={<Comunidad/>}><p>comunidad</p></Footer.Link></li>         
                                </ul>    
                    </Footer.Column>
                
                    <Footer.Column>
                        <Footer.Title><h4>lo más buscado</h4></Footer.Title>
                            <ul>
                                <li><Footer.Link href="/placas nvidia" target="_blank" src={<PlacasNvidia/>}>placas de video Nvidia</Footer.Link></li>
                                <li><Footer.Link href="/placas amd" target="_blank" src={<PlacasAmd/>}>placas de video amd</Footer.Link></li>
                                <li><Footer.Link href="/gabinetes" target="_blank" src={<Gabinetes/>}>gabinetes</Footer.Link></li>
                                <li><Footer.Link href="/monitores" target="_blank" src={<Monitores/>}>monitores</Footer.Link></li>
                                <li><Footer.Link href="/teclado mecanico" target="_blank" src={<TecladoMecanico/>}>teclado mecanico</Footer.Link></li>
                                <li><Footer.Link href="/mouse gamer" target="_blank" src={<MouseGamer/>}>mouse gamer</Footer.Link></li>
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
                    <div className="codigo-qr">
                        <Footer.Link href={<Home/>} target="_blank" rel="noreferrer"><img src={Qr} alt="" width="92" height="92"></img></Footer.Link>
                    </div>
                    </Footer.Column> 
                </Footer.Row>
            </Footer.Wrapper>
            <Footer.Row>
                <copyright>© keytech 2023 | Designed by keytech</copyright>
            </Footer.Row>
        </Footer>
    )
}
