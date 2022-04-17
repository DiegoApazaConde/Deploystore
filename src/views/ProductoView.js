import { useParams } from "react-router-dom"
/*El useParams de react-router-dom es para tener
 acceso de los datos de la URL para la ruta*/
import { useState,useEffect, useContext } from "react"
import { obtenerProductoConId } from "../services/productosService"
import { CarritoContext } from "../Constext/carritoContext"
import Loading from "../components/Loading"
import Swal  from 'sweetalert2'
import { useNavigate } from "react-router-dom"
//sirve para redirigir


 export default function ProductoView() {

    const [producto,setProducto] = useState([])
    const [cargando,setCargando] = useState(true)
    const {anadirAcarrito} = useContext(CarritoContext)
    const {id} = useParams()
    const navigate = useNavigate()

    const getProducto = async() =>{
        try{
            let productoObtenido = await obtenerProductoConId(id)
            setProducto(productoObtenido)
            setCargando(false)
            //terminar de cargar los datos
        }catch{
            console.log("error")
        }
    }

    const anadirAcarritoContext =()=>{
        anadirAcarrito(producto)
        const resultado = Swal.fire({
            icon:'success',
            title:'Producto añadido',
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        })
        .then((resultado)=>{

            if(resultado.isConfirmed){
                navigate('/')
            }else if(resultado.isDenied){
                navigate('/carrito')
            }
        })
    }

    useEffect(()=>{
        getProducto()
    }, [])
    /*Va a ser una funcion que se va a ejecutar en el montaje
    y para que se carge es el []*/
  return (
    <div>
        {cargando ?(<Loading/>) :
        (
            <div>
                <div className="container">
                    <h2 className="fw-bold">{producto.prod_nombre}</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid"
                            src={producto.prod_imagen} 
                            alt={producto.prod_imagen} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                               <h5 className="fw-bold">Descripcion</h5>
                               <p>{producto.prod_descripcion}</p>
                               <div className="py-3 d-flex justify-content-between">
                                    <span className="fw-bold">
                                        s/ {producto.prod_precio}
                                    </span>
                                    <button className="btn btn-dark btn-lg"
                                    onClick={anadirAcarritoContext}>    
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        Añadir al carrito
                                    </button>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
