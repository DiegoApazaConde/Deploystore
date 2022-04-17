import Loading from "../components/Loading"
import {obtenerProductos} from "../services/productosService"
import { useState, useEffect,useRef } from "react"
import GroupProducts from '../components/GroupProducts'

export default function ProductosView() {

    const[productos,setProductos] = useState([])
    const[cargando,setCargando] = useState(true)
    const inputBusqueda = useRef()

    const getProductos = async() =>{
        try{
            let productoObtenidos = await obtenerProductos()
            setProductos(productoObtenidos)
            setCargando(false)
        }catch{
            console.log("error")
        }
    }

    const ejecutarBusqueda = async()=>{
        let miBusqueda = inputBusqueda.current.value
        const productosFiltrados = await obtenerProductos(miBusqueda)
        setProductos(productosFiltrados)
    }

    useEffect(()=>{
        getProductos()
    },[])

  return (
    <div>
        {cargando?
        (<Loading/>) :
        (
            <div className="py-4">
                <div className="container text-center">
                    <h1 className="py-34">
                        <i className="fas me-3 fa-gift"></i>
                         Nuestros productos
                    </h1>
                    <div className="col-sm-12 col-md-6">
                        <h5>Filtro por nombre</h5>
                        <div className="d-flex gap-1"><input 
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el nombre o descripcion"
                            ref={inputBusqueda}
                        />
                        <button className="btn btn-dark" onClick={ejecutarBusqueda}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        </div>
                    </div>
                </div>
                <GroupProducts productos={productos}/>
            </div>
        )}
    </div>
  )
}
