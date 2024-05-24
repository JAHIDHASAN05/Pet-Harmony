import { AuthKey } from "@/contants"
import { decodedToken } from "./jwt"


export const getUserInfo=()=>{
    const authToken=localStorage.getItem(AuthKey)
    console.log(authToken)


    if(authToken){
        const decodedData= decodedToken(authToken)
        // console.log(decodedData);
        return decodedData
    }

}


 export const isLoggedIn=()=>{
    const authToken=localStorage.getItem(AuthKey)
    if(authToken){
        return !!authToken
    }
    return false
}

export const logOut=()=>{

    if(!AuthKey || typeof window === "undefined"){
        return ''
    }
   localStorage.removeItem(AuthKey)
}