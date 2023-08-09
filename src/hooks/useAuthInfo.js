import { useContext } from "react"
import { AuthContext } from "../contextApi/AuthProvider/AuthProvider"

const useAuthInfo=()=>{
    const authInfo=useContext(AuthContext)
    return authInfo;
}
export default useAuthInfo;