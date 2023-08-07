import { ArrowLeftRithtIcon, LightningIcon, LocationIcon, LockIcon } from "../shared/Icons/Icons";

const Features = () => {
    return (
        <div className="w-11/12 md:w-5/6 lg:w-5/6 mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-2">
            <div className="p-2 flex flex-row gap-2 items-center border-2 rounded-lg">
                <div>
                    <LocationIcon height={"50px"} width={"50px"} />
                </div>
                <p>Nationwide shipping Starts from only BDT.60</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center border-2 rounded-lg">
                <div>
                    <ArrowLeftRithtIcon height={"50px"} width={"50px"} />
                </div>
                <p>Easy 7 days replacement Only if the product is faulty</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center border-2 rounded-lg">
                <div>
                    <LightningIcon height={"50px"} width={"50px"} />
                </div>
                <p>Quality Ensured Every product's quality is ensured</p>
            </div>
            <div className="p-2 flex flex-row gap-2 items-center border-2 rounded-lg">
                <div>
                    <LockIcon height={"50px"} width={"50px"} />
                </div>
                <p>100% Secure Checkout We don't sell your info</p>
            </div>
        </div>
    )
}
export default Features;