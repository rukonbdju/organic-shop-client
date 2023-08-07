import logo from "../../../assets/icons/logo.svg"
import { useState } from "react"
import { AvatarIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "../Icons/Icons"
import SearchProducts from "../../SearchProducts/SearchProducts"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const [openLoginMethod, setOpenLoginMethod] = useState(false)
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
                                <Link to={'/home'}>Home</Link>
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
                        <li className="p-1 hover:bg-orange-200 ring-2 ring-orange-700 rounded-full cursor-pointer">
                            <div className="relative">
                                <div onClick={() => setOpenLoginMethod(!openLoginMethod)}><AvatarIcon /></div>
                                
                                {openLoginMethod && <div className="absolute w-40 flex flex-col right-0 mt-2 bg-orange-200 p-2 rounded-md">
                                    <Link to={"/home"}><button className="p-1 rounded-md bg-orange-300 my-1 hover:bg-orange-400">Login with email</button></Link>

                                    <button className="p-1 rounded-md bg-orange-300 my-1 hover:bg-orange-400">login with Phone</button>
                                    <button className="p-1 rounded-md bg-orange-300 my-1 hover:bg-orange-400">login with google</button>
                                </div>}

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

export default Navbar