import { Table } from "react-bootstrap"
import { useContext } from "react"
import { CarritoContext } from "../Constext/carritoContext"



export default function Carritoview() {
  
    const {carrito} = useContext(CarritoContext)

  return (
    <div className="container">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>cantidad</th>
      <th>Precio unitario</th>
      <th>Precio total</th>
    </tr>
  </thead>
  <tbody>
    {carrito.map((prod,i)=>(
      <tr key={i}>
      <td>{prod.prod_nombre}</td>
      <td>{prod.cantidad}</td>
      <td>{prod.prod_precio}</td>
      <td>{prod.cantidad*prod.prod_precio}</td>
    </tr>
    ))}
    
  </tbody>
</Table>
    </div>
  )
}
