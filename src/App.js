
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PortadaView from './views/PortadaViews'
import ProductoView from './views/ProductoView'
import NavTop from './components/NavTop'
import CarritoContextProvider from './Constext/carritoContext'
import Carritoview from './views/Carritoview'
import ProductosView from './views/ProductosView'
import LoginView from './views/LoginView'
import AuthContextProvider from './Constext/authContext'

export default function App() {
  return (
    <div>
      {/*el broeserrouter es el react-router-dom*/}
        <BrowserRouter>
        <AuthContextProvider>
        <CarritoContextProvider>
          <NavTop/>
            {/*el Router va a verificar que ruta necesitamos y que componentes usamos*/}          
            <Routes>
                <Route exact path="/" element={<PortadaView/>} /> 
                <Route  exact path="/detalle/:id" element={<ProductoView/>} /> 
                <Route exact path="/carrito" element={<Carritoview/>} /> 
                <Route exact path="/productos" element={<ProductosView/>} /> 
                <Route exact path="/login" element={<LoginView/>} /> 
            </Routes>
        </CarritoContextProvider> 
        </AuthContextProvider>
        </BrowserRouter>
    </div>
  )
}
