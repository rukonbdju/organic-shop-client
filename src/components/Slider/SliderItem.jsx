const SliderItem = ({item}) => {
    return (
        <div className="grow-0 shrink-0 basis-full">
            <div
                className=" w-full flex flex-row gap-4 items-center justify-between"
            >
                <h2 className='text-xl text-orange-600 pl-4 md:text-3xl lg:text-5xl font-bold'>{item.title}</h2>
                <img height={"400px"} width={"400px"} src={item.image} alt={item.title} />
            </div>
        </div>
    )
}
export default SliderItem