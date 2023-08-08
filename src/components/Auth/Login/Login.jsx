import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className=" flex flex-col justify-center items-center my-16 max-w-full" >
            <div className="w-11/12 mx-auto md:max-w-md lg:max-w-xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl inline-block font bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                        Welcome Back!
                    </h1>
                    <br />
                    <h3 className="text-lg md:text-xl lg:text-2xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">Login</h3>
                </div>
                <form className=" flex flex-col items-center justify-center gap-4">
                    <input
                        required
                        className="w-full p-2 border-2 border-orange-200 rounded-lg outline-orange-700"
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <input
                        required
                        className="w-full p-2 border-2 border-orange-200 rounded-lg outline-orange-700"
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        id="password"
                    />
                    <button
                        type="submit"
                        className="w-full font-bold rounded-lg shadow-xl bg-gradient-to-r from-orange-500 to-orange-700 text-slate-100 px-4 uppercase py-2"
                    >
                        <span className="inline-block mr-2 ">Login</span>
                    </button>
                </form>
                <Link to={'/auth/resetPassword'}>
                    <p className="text-xs hover:underline">Forgot password?</p>
                </Link>
                <div className="flex flex-row items-center gap-1 my-4">
                    <span className="inline-block border-b border-slate-700 w-full"></span>
                    <span className="uppercase ">or</span>
                    <span className="inline-block border-b  border-slate-700 w-full"></span>
                </div>
                <button className="w-full font-bold rounded-lg shadow-xl bg-gradient-to-r from-orange-500 to-orange-700 text-slate-100 px-4 uppercase py-2">continue with google</button>
                <p className="mt-4">
                    <span>New user? Please register</span>{" "}
                    <Link
                        to="/auth/register"
                        className="text-indigo-700 hover:underline"
                    >
                        here
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Login;