import Image from 'next/image'
import { blancPackage, chicken, img1, img2, labtop } from '../assets'

const HowItWork = () => {
  return (
    <>
    <span className="block text-[#F48E28] text-center mt-20 mb-5">How to work</span>
    <h2 className="text-3xl font-bold text-center">Food Us An Important Part Of A Balanced Diet</h2>

    <div className="grid grid-cols-3 gap-10 mt-20 mb-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
    <div className="relative">
    <Image 
                src={img1}
                alt='img1'
                className=' absolute top-[12%] right-[-35%] lg:block hidden'
                />
        <div className=" flex flex-col justify-center  gap-5  p-10 rounded-[35px]">
                <Image 
                src={labtop}
                alt='labtop'
                />

            <h3 className="font-bold text-xl">
            CHOOSE
            </h3>
            <p className="text-lg">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
            </p>
        </div>
    </div>
    <div className="">
        <div className=" flex flex-col justify-center gap-5  p-10 rounded-[35px]">

            <h3 className="font-bold text-xl text-center">
            PREPARE FOOD
            </h3>
            <p className="text-lg">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
            </p>
            <Image 
                src={chicken}
                alt='chicken'
                />
        </div>
    </div>
    <div className="relative">
    <Image 
                src={img2}
                alt='img2'
                className=' absolute top-[12%] left-[-35%] lg:block hidden'
                />
        <div className=" flex flex-col justify-center gap-5  p-10 rounded-[35px]">
                <Image 
                src={blancPackage}
                alt='blancPackage'
                height={215}
                className='ml-auto'
                />
            <h3 className="font-bold text-xl text-right">
            DELIVER
            </h3>
            <p className="text-lg text-right">
            Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!
            </p>
        </div>
    </div>
    </div>
    </>
  )
}

export default HowItWork