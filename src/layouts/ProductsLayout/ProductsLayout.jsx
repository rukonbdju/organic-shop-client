import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import Navbar from "../../components/shared/Navbar/Navbar";

const ProductsLayout=()=>{
    return (
        <div>
            <Navbar></Navbar>
            <ProductList></ProductList>
            <Features></Features>
            <Footer></Footer>
        </div>
    )
}
export default ProductsLayout;