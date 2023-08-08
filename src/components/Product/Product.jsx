import { Link } from "react-router-dom"

const Product = ({ product }) => {
    const { title, price } = product
    return (
        <div className="shadow-xl p-4 group  transition duration-100 rounded-3xl">
            <div className="relative">
                <div className="group-hover:opacity-70">
                    <img src="https://ghorerbazar.com/wp-content/uploads/2022/07/kalojira-honey-1.jpg" alt="" />
                </div>
                <div className="absolute top-2 right-2 hidden group-hover:flex flex-col gap-2">
                    <button className="text-slate-50 uppercase rounded-full hover:shadow-xl p-2 shadow-orange-700 bg-orange-700">add to Cart</button>
                    <Link to={`/products/${product._id}`}><button  className="text-slate-50 uppercase rounded-full hover:shadow-xl p-2 shadow-orange-700 bg-orange-700">view details</button></Link> 
                </div>
            </div>
            <div className="my-2">
                <h1 className="font-bold">{title}</h1>
                <p className="font-bold text-orange-700">${price}</p>
            </div>
        </div>
    )
}
export default Product