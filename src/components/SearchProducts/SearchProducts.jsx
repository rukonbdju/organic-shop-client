import { SearchIcon } from "../shared/Icons/Icons"

const SearchProducts = () => {
    return (
        <div className="w-full bg-orange-50 mx-auto border-2 border-orange-700 rounded-lg flex flex-row">
            <div className="p-2">
                <SearchIcon></SearchIcon>
            </div>
            <input className="w-[16rem] rounded-lg bg-orange-50 outline-none" type="text" placeholder="search products" />
        </div>
    )
}
export default SearchProducts