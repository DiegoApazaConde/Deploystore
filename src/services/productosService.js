import axios from "axios";

//Process nos da axeso a las variables de entorno

const URL = `${process.env.REACT_APP_API}/Productos`;

const obtenerProductos = async (busqueda="") =>{

    try{
        let {data} = await axios.get(`${URL}?search=${busqueda}`)
        return data
    }catch{
        console.log("error")
    }

}

const obtenerProductoConId = async (id) =>{
    try{
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    }catch{
        console.log("error")
    }
}

export{
    obtenerProductoConId,
    obtenerProductos
}