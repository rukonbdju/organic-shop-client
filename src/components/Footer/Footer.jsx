import logo from "../../assets/icons/logo.svg"
import { FacebookIcon, TwitterIcon, YouTubeIcon } from "../shared/Icons/Icons"
import masterCard from "../../assets/payment/masterCard.svg"
import visaCard from "../../assets/payment/visaCard.svg"
import bkash from "../../assets/payment/bkash.svg"
import nagad from "../../assets/payment/nagad.svg"
import paypal from "../../assets/payment/paypal.svg"
const Footer = () => {
    return (
        <div className="bg-slate-800">
            <footer className="w-11/12 md:w-5/6 lg:w-5/6 mx-auto px-10 py-4">
                <div className="text-center">
                    <img className="mx-auto w-48" src={logo} alt="organic shop logo" />
                </div>
                <div className="flex flex-row gap-2 items-center justify-center my-4">
                    <div className="p-1 border rounded">
                        <img width={100} src={masterCard} alt="" />
                    </div>
                    <div className="p-1 border rounded">
                        <img width={100} src={visaCard} alt="" />
                    </div>
                    <div className="p-1 border rounded">
                        <img width={100} src={paypal} alt="" />
                    </div>
                    <div className="p-1 border rounded">
                        <img width={100} src={bkash} alt="" />
                    </div>
                    <div className="p-1 border rounded">
                        <img width={100} src={nagad} alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row gap-4 items-center justify-center mx-auto">
                    <a className="hover:underline text-slate-300" href="#">Contact Us</a>
                    <a className="hover:underline text-slate-300" href="#">Terms and Conditions</a>
                    <a className="hover:underline text-slate-300" href="#">Privacy Policy</a>
                    <a className="hover:underline text-slate-300" href="#">License</a>
                </div>
                <div className="grid grid-flow-col justify-center gap-4 max-w-xs mx-auto my-4">
                    <a className="cursor-pointer p-2 bg-orange-100 hover:bg-orange-200 transition duration-300 rounded-full">
                        <TwitterIcon/>
                    </a>
                    <a className="cursor-pointer p-2 bg-orange-100 hover:bg-orange-200 transition duration-300 rounded-full">
                        <YouTubeIcon/>
                    </a>
                    <a className="cursor-pointer p-2 bg-orange-100 hover:bg-orange-200 transition duration-300 rounded-full">
                        <FacebookIcon/>
                    </a>
                </div>
                <p className="text-center text-slate-300">&copy; Organic Shop Ltd. Dhaka,Bangladesh 2023</p>
            </footer>
        </div>
    )
}
export default Footer