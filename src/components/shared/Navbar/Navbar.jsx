import logo from "../../../assets/logo.svg"
import { useState } from "react"
import { AvatarIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "../Icons/Icons"
import SearchProducts from "../../SearchProducts/SearchProducts"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearchBar, setOpenSearchBar] = useState(false)
    const openDrawer = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <nav className="bg-orange-200 backdrop-blur-lg bg-opacity-30 shadow-md sticky top-0">
            <div className="py-2 flex flex-row items-center justify-between w-11/12 md:w-5/6 lg:w-5/6 mx-auto">
                <div>
                    <img className="w-3/5 lg:w-1/2" src={logo} alt="" />
                </div>
                <ul className="hidden lg:flex flex-col lg:flex-row gap-4">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
                <div>
                    <ul className="flex flex-row items-center justify-center gap-4">
                        <li onClick={()=>setOpenSearchBar(!openSearchBar)} className="p-2 hover:bg-orange-200 rounded-full cursor-pointer">
                            <SearchIcon />
                        </li>
                        <li className="p-2 hover:bg-orange-200 rounded-full cursor-pointer">
                            <CartIcon />
                        </li>
                        <li className="p-2 hover:bg-orange-200 rounded-full cursor-pointer">
                            <AvatarIcon />
                        </li>
                        <li className="p-2 lg:hidden hover:bg-orange-200 rounded-full cursor-pointer" onClick={() => openDrawer()}>
                            {openMenu ? <CloseIcon /> : <MenuIcon />}
                        </li>
                    </ul>
                </div>
            </div>
            {openSearchBar && <SearchProducts></SearchProducts>}
            {openMenu && <ul className={`absolute right-0 p-2 w-2/3 h-screen bg-orange-100`}>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">Home</li>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">Products</li>
                <li className="p-2 w-full list-none bg-orange-200 hover:bg-orange-300 cursor-pointer rounded my-1">About Us</li>
            </ul>}
        </nav>
    )
}

export default Navbar