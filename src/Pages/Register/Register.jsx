import { Link } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";

const Register = () => {
    const {user,createNewUserWithEmail}=useAuthInfo()
    console.log(user)
    const handleRegister=async(event)=>{
        try{
            event.preventDetault()
            const name=event.target.name.value
            const email=event.target.email.value
            const password=event.target.password.value
            await createNewUserWithEmail(name,email,password)
        }catch(error){
            console.log(error)
        }finally{
            event.target.reset()
        }
    }
    return (
        <div className=" flex flex-col items-center justify-center my-16 max-w-full">
            <div
                className="w-11/12 mx-auto max-w-xl"
            >
                <div className="mb-8 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl inline-block font bold bg-clip-text text-transparent bg-gradient-to-r  from-orange-500 to-orange-700">Welcome To Organic Shop</h1>
                    <br />
                    <h3 className="text-lg md:text-xl lg:text-2xl inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r  from-orange-500 to-orange-700">Registration now</h3>
                </div>

                <form onClick={handleRegister} className=" mx-auto flex flex-col gap-5"
                >
                    <input
                        required
                        className="border-2 border-orange-200 rounded-lg p-2 block outline-orange-700"
                        type="text"
                        placeholder="Enter name"
                        name="name"
                    />
                    <input
                        required
                        className="border-2 border-orange-200 rounded-lg p-2 block outline-orange-700"
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                    />
                    <input
                        required
                        className="border-2 border-orange-200 rounded-lg p-2 block outline-orange-700"
                        placeholder="Enter New Password"
                        minLength={6}
                        type="password"
                        name="password"
                    />
                    <button type="submit" className="font-bold rounded-lg shadow-xl bg-gradient-to-r  from-orange-500 to-orange-700 text-slate-100 px-4 uppercase py-2">
                        <span className="inline-block mr-2">Register</span>
                    </button>
                </form>
                <p className="mt-5">
                    <span>Already have an account? Please{" "}</span>
                    <Link className=" text-indigo-700 hover:underline" to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}
export default Register;