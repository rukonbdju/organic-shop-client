import useFirebase from "../../hooks/useFirebase"

const AuthRoute=({children})=>{
    const{user,authLoading}=useFirebase()
    console.log(user)
    if(authLoading){
        return(
            <div>Loading</div>
        )
    }
    if(user){
        return children
    }
    return (
        <div></div>
    )
}
export default AuthRoute;