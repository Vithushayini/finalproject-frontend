import { useEffect, useState } from "react"
//import { UserDetailsApi } from "../services/Api"
import NavBar from "../components/NavBar"
//import { isAuthenticated, logout } from "../services/Auth"
import { Navigate, useNavigate } from "react-router-dom"

export default function DashboardPage(){
   const navigate= useNavigate();//hooks
//ithu router thaara function
    const [user,setUser]=useState({name:"",email:"",localId:""})
    
    useEffect(()=>{
   
    },[])//ore thedava maddum thaan laod akki varanum enda athukku inth empty [] podanum

    // const logoutUser=()=>{
    //     logout();
    //     navigate('/login')
    // }

//     if (!isAuthenticated()){//true/false
//         //Redirecting
//        //ithukku naama react-router-dom endra package ah install pannanum
//        return <Navigate to="/login" />
//    }

    return(
    <div>
        <NavBar/>
        <main role="main" className="container mt-5">
            <div className="container">
              <div className="text-center mt-5">
                <h3>Dashboard page</h3>
                {user.name && user.email && user.localId?
                    (
                        <div>
                        <p className="text-bold " >Hi {user.name}, your Firebase ID is {user.localId}</p>
                        <p>Your email is {user.email}</p>
                        </div>
                    ):<p>Loading...</p>
                   
                }
                
                
              </div>
            </div>
        </main>
    </div>
        
    )
}