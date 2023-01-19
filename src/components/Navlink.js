import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
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
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/ayuda" element={<Ayuda/>}/>
            <Route exact path="/acerca de" element={<AcercaDe/>}/>
            <Route exact path="/comunidad" element={<Comunidad/>}/>
            <Route exact path="/contacto" element={<Contacto/>}/>
            <Route exact path="/gabinetes" element={<Gabinetes/>}/>
            <Route exact path="/informacion util" element={<InformacionUtil/>}/>
            <Route exact path="/mi cuenta" element={<MiCuenta/>}/>
            <Route exact path="/monitores" element={<Monitores/>}/>
            <Route exact path="/placas amd" element={<PlacasAmd/>}/>
            <Route exact path="/placas nvidia" element={<PlacasNvidia/>}/>
            <Route exact path="/teclado mecanico" element={<TecladoMecanico/>}/>
            <Route exact path="/mouse gamer" element={<MouseGamer/>}/>
            <Route exact path="*" element={<Error404/>}/>
        </Switch>
    </Router>
  )
}

export default Navlink
