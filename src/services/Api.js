import axios from "axios"
//import { getUserData } from "./Storage";
//axios endrathu oru library ithu jsla fetch()use pannira maari
//axios.defaults.baseURL="./http://localhost:8080";
//const API_KEY="AIzaSyB-fb0f-9xubt_tJqqizz7mEMaDbL6qaFI"
//const REGISTER_URL=`/signup`;
// const LOGIN_URL=`/accounts:signInWithPassword?key=${API_KEY}`;
// const USER_DETAILS_URL=`/accounts:lookup?key=${API_KEY}`;
export const RegisterApi = (inputs)=>{
    let data={name:inputs.name,emailId:inputs.email,password:inputs.password,phoneNumber:inputs.phoneNumber}
    return axios.post(`http://localhost:8080/signup`,data)
}

export const VerifyApi = (input,token)=>{
    let data={otp:input.otp}
    return axios.post(`http://localhost:8080/verify?otp=${input.otp}`,{headers: {
        'Content-Type': 'application/json','authorization':'Bearer ${token}'
      }})
}

// export const LoginApi = (inputs)=>{
//     let data={email:inputs.email,password:inputs.password}
//     return axios.post(LOGIN_URL,data)
// }

// export const UserDetailsApi=()=>{
//     let data={idToken:getUserData()}
//     return axios.post(USER_DETAILS_URL,data)//ithula namakku return aaka porathu oru promise
// }