import Features from "../../components/Features/Features"
import Footer from "../../components/Footer/Footer"
import ProductList from "../../components/ProductList/ProductList"
import Slider from "../../components/Slider/Slider"
import Navbar from "../../components/shared/Navbar/Navbar"

const HomeLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Slider></Slider>
            <ProductList></ProductList>
            <Features></Features>
            <Footer></Footer>
        </>
    )
}
export default HomeLayout