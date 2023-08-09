import logo from "../../assets/icons/logo.svg"
import { memo, useState } from "react"
import { AvatarIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "../shared/Icons/Icons"
import SearchProducts from "../SearchProducts/SearchProducts"
import { Link } from "react-router-dom"
import useAuthInfo from "../../hooks/useAuthInfo"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const { user, authLoading, logOut, signInWithGoogle } = useAuthInfo()
    console.log(user, authLoading)
    const openDrawer = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <nav className="bg-orange-200 backdrop-blur-lg bg-opacity-30 shadow-md sticky top-0 z-10">
            <div className="py-2 flex flex-row items-center justify-between w-11/12 md:w-5/6 lg:w-5/6 mx-auto">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>

                    <ul className="flex flex-row items-center justify-center gap-4">
                        <div className="hidden md:hidden lg:block">
                            <SearchProducts></SearchProducts>
                        </div>
                        <ul className="hidden lg:flex flex-col lg:flex-row gap-4 justify-center">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/products'}>Products</Link>
                            </li>
                            <li>
                                <Link to={'/aboutUs'}>About Us</Link>
                            </li>
                        </ul>
                        <li onClick={() => setOpenSearchBar(!openSearchBar)} className="p-2 lg:hidden hover:bg-orange-200 rounded-full cursor-pointer">
                            <SearchIcon />
                        </li>
                        <li className="p-2 hover:bg-orange-200 rounded-full relative cursor-pointer">
                            <CartIcon />
                            <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-orange-300 rounded-full text-orange-800 p-2">
                                <span className="font-bold">20</span>
                            </div>
                        </li>

                        <li className="relative group">
                            <div className=" p-2 border border-orange-700 hover:bg-orange-200  rounded-full cursor-pointer">
                                <AvatarIcon />
                            </div>

                            <div className="absolute hidden group-hover:block  p-2 rounded shadow-lg right-0 bg-orange-100">
                                {
                                    user ? (<><div className="flex flex-col gap-2 items-center">
                                        <div className="p-2 bg-orange-200 rounded-full cursor-pointer">
                                            <AvatarIcon width={'30px'} height={'30px'} />
                                        </div>
                                        <p className="whitespace-nowrap">{user?.displayName}</p>

                                        <button className="w-full  rounded-lg shadow-xl bg-orange-500 hover:bg-orange-700 text-slate-100 px-4 uppercase py-2">Your Account</button>


                                        <button className="w-full  rounded-lg shadow-xl bg-orange-500 hover:bg-orange-700 text-slate-100 px-4 uppercase py-2">Your Orders</button>

                                    </div>
                                        <div className=" border-t border-black my-4"></div>
                                        <div>
                                            <button onClick={() => logOut()} className="w-full  rounded-lg shadow-xl bg-orange-500 hover:bg-orange-700 text-slate-100 px-4 uppercase py-2">Logout</button>
                                        </div></>) : <div className=" flex flex-col gap-2">
                                        <Link to={'/login'}>
                                            <button className="w-full bg-orange-500 hover:bg-orange-700 whitespace-nowrap rounded-lg shadow-xl  text-slate-100 px-4 uppercase py-2">Login with Email</button>
                                        </Link>
                                        <Link to={'/register'}>
                                            <button className="w-full bg-orange-500 hover:bg-orange-700 whitespace-nowrap  rounded-lg shadow-xl text-slate-100 px-4 uppercase py-2">Create new account</button>
                                        </Link>
                                        <button onClick={() => signInWithGoogle()} className="w-full bg-orange-500 hover:bg-orange-700 whitespace-nowrap rounded-lg shadow-xl  text-slate-100 px-4 uppercase py-2">Continue with Google</button>
                                    </div>
                                }
                            </div>
                        </li>

                        <li className="p-2 lg:hidden hover:bg-orange-200 rounded-full cursor-pointer"
                            onClick={() => openDrawer()}>
                            {openMenu ? <CloseIcon /> : <MenuIcon />}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="block lg:hidden w-11/12 md:w-5/6 lg:w-5/6 mx-auto">
                {openSearchBar && <SearchProducts></SearchProducts>}
            </div>
            {openMenu && <ul className={`absolute right-0 p-2 w-2/3 h-screen bg-orange-100`}>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">Home</li>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">Products</li>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">About Us</li>
            </ul>}
        </nav>
    )
}

export default memo(Navbar) 