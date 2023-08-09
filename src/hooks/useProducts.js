import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/fakeDB.json')
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])
    return products
}
export default useProducts;