import { useParams } from "react-router-dom";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const ProductLayout = () => {
    const params=useParams()
    console.log(params)
    return (
        <div>
            <Navbar></Navbar>
            <div>

            </div>
            <Features></Features>
            <Footer></Footer>
        </div>
    )
}
export default ProductLayout;