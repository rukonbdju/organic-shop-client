import { SearchIcon } from "../shared/Icons/Icons"

const SearchProducts = () => {
    return (
        <div className="pb-2 w-11/12 mx-auto">
            <div className="max-w-lg bg-orange-50 mx-auto border-2 border-orange-700 rounded-full flex flex-row items-center">
                <div className="p-2">
                    <SearchIcon></SearchIcon>
                </div>
                <input className="w-full rounded-r-full bg-orange-50 outline-none p-2" type="text" placeholder="search products"/>
            </div>
        </div>
    )
}
export default SearchProducts