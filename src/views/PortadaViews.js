import { useState,useEffect } from "react";
import { obtenerProductos } from "../services/productosService";
import GroupProducts from "../components/GroupProducts";
import CustomCarrousell from "../components/CustomCarrousell";

export default function PortadaView(){

    const[productos,setProductos] = useState([])

    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
        }catch{

        }
    }
    useEffect(()=>{
            getProductos()  
    },[])

    return(
        <div>
            <CustomCarrousell/>
           <GroupProducts productos={productos}/>
        </div>
    )
}