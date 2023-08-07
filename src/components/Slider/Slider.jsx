import { useRef } from 'react';
import banner1 from '../../assets/banner/banner1.svg'
import banner2 from '../../assets/banner/banner2.svg'
import banner3 from '../../assets/banner/banner3.svg'
import { ArrowLeftIcon, ArrowRightIcon } from '../shared/Icons/Icons';
import SliderItem from './SliderItem';
const Slider = () => {
    const slider = useRef(null)
    let index = 0;
    const bannerItems = [
        {
            id: 1,
            image: banner1,
            title: "Fresh and healthy oil with Organic Shop",
        },
        {
            id: 2,
            image: banner2,
            title: "Eat fresh and healthy foods with Organic Shop",
        },
        {
            id: 3,
            image: banner3,
            title: "Eat fresh and healthy foods with Organic Shop",
        }
    ];

    const handleSlideChange = () => {
        const refItem = slider.current.childNodes;
        refItem[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        })
    }

    const handleNext = () => {
        if (index == bannerItems.length-1) {
            index = 0
        }
        else {
            index++
        }
        handleSlideChange()
    }

    const handlePrevious = () => {
        if (index == 0) {
            index = bannerItems.length-1
        }
        else {
            index--
        }
        handleSlideChange()
    }

    return (
        <header className='w-11/12 md:w-5/6 lg:w-5/6 relative  mx-auto'>
            <div ref={slider} className=" flex bg-emerald-100 p-2 my-4 shadow-md rounded-md overflow-hidden">
                {bannerItems.map((item, index) => (
                    <SliderItem item={item} key={index}></SliderItem>
                ))}
                
            </div>
            <div className='absolute w-full bottom-4'>
                    <div className='flex flex-row gap-4 items-center justify-center'>
                        <div onClick={()=>handlePrevious()} className='p-2 bg-orange-400 hover:bg-orange-700 rounded-full cursor-pointer'>
                            <ArrowLeftIcon color='white'></ArrowLeftIcon>
                        </div>
                        <div onClick={()=>handleNext()} className='p-2 bg-orange-400 hover:bg-orange-700 rounded-full cursor-pointer'>
                            <ArrowRightIcon color='white'></ArrowRightIcon>
                        </div>
                    </div>
                </div>
        </header>
    )
}
export default Slider;