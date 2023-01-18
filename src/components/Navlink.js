import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio"
import Ayuda from "./pages/Ayuda";
import AcercaDe from "./pages/Acerca-de";
import Comunidad from "./pages/Comunidad";
import Contacto from "./pages/Contacto";
import Gabinetes from "./pages/Gabinetes";
import InformacionUtil from "./pages/Informacion-util";
import MiCuenta from "./pages/Mi-cuenta";
import Monitores from "./pages/Monitores";
import PlacasAmd from "./pages/Placas-amd";
import PlacasNvidia from "./pages/Placas-nvidia";
import TecladoMecanico from "./pages/Teclado-mecanico";
import MouseGamer from "./pages/Mouse-gamer";
import Error404 from "./pages/Error404";

const Navlink = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/ayuda" component={Ayuda}/>
            <Route exact path="acerca de" component={AcercaDe}/>
            <Route exact path="comunidad" component={Comunidad}/>
            <Route exact path="contacto" component={Contacto}/>
            <Route exact path="gabinetes" component={Gabinetes}/>
            <Route exact path="informacion util" component={InformacionUtil}/>
            <Route exact path="mi cuenta" component={MiCuenta}/>
            <Route exact path="monitores" component={Monitores}/>
            <Route exact path="placas amd" component={PlacasAmd}/>
            <Route exact path="placas nvidia" component={PlacasNvidia}/>
            <Route exact path="teclado mecanico" component={TecladoMecanico}/>
            <Route exact path="mouse gamer" component={MouseGamer}/>
            <Route exact path="*" component={Error404}/>
        </Switch>
    </Router>
  )
}

export default Navlink
