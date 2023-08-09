import Features from "../../components/Features/Features";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RecentlyViewProducts from "../../components/RecentlyViewProducts/RecenctlyViewProducts";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
const Product=()=>{
    return(
        <div>
            <ProductDetails></ProductDetails>
            <RelatedProducts></RelatedProducts>
            <RecentlyViewProducts></RecentlyViewProducts>
            <Features></Features>
        </div>
    )
}
export default Product;