import Product from "../Product/Product"
import useProducts from "../../hooks/useProducts"

const ProductList =()=>{
    const products=useProducts()
    console.log(products)
    return(
        <div className="w-11/12 md:w-5/6 lg:w-5/6 grid grid-cols-4 gap-4 mx-auto">
            {products.map((product,index)=><Product key={index} product={product}></Product>)}
        </div>
    )
}
export default ProductList