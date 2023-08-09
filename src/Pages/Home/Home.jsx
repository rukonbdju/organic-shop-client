import Slider from '../../components/Slider/Slider'
import ProductList from '../../components/ProductList/ProductList'
import Features from '../../components/Features/Features'
import NewProducts from '../../components/NewProducts/NewProducts'
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts'
const Home = () => {
    return (
        <>
            <Slider></Slider>
            <NewProducts></NewProducts>
            <BestSellingProducts></BestSellingProducts>
            <Features></Features>
        </>
    )
}

export default Home;