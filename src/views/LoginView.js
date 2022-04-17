import { useEffect,useState,useContext } from "react"
import { AuthContext } from "../Constext/authContext"
import  imglogin from '../assets/login.jpg'

export default function LoginView() {

    const {signIn} = useContext(AuthContext)
  return (
    <div className="h-100 row">
        <div className="col-sm-12 col-md-6">
            <img src={imglogin} style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
            }}
            alt='imagen login '
            />
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-item-center">
              <div className="text-center">
                  <h2>Ingrese ! :D</h2>
                  <button className="btn btn-danger btn-lg" onClick={signIn} >
                      Ingrese con google
                  </button>
              </div>
        </div>
    </div>
  )
}
