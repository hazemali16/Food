import Image from 'next/image'
import { arrow, burger, cake, driver, junkFood, left, orderBtn, pizza, playButton, right } from '../assets'

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center max-2xl:flex-col max-2xl:gap-40 max-2xl:pt-40 mb-20">
        <div className="basis-[50%] relative max-sm:text-center">
            <Image 
            src={arrow}
            alt='arrow'
            className='absolute top-[20%] left-[50%] hidden 2xl:block'
            />
            <div className="h-16 w-[270px] rounded-full bg-[#F5DDC4] flex items-center justify-between px-5 mb-10 max-sm:mx-auto">
                <span className='text-[#F48E28]'>Bike Delivery</span>
                <Image 
                src={driver}
                alt='driver'
                className='rounded-full'
                />
            </div>
            <h1 className="font-bold text-[60px] max-sm:text-[40px]">
            The Fastest
            <br />
            Delivery
            <br />
            In <span className="text-[#F48E28]">Your City</span> 
            </h1>
            <p className='mt-10 w-[70%] font-semibold max-sm:w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus.
             Volutpat arcu sit sed tortor etiam volutpat ipsum.
            </p>
            <div className="flex gap-5 items-center mt-10 max-sm:flex-col">
            <Image 
                src={orderBtn}
                alt='orderBtn'
                />
                <Image 
                src={playButton}
                alt='playButton'
                />
                <span className='font-bold'>Order Process</span>
            </div>
        </div>
        <div  className="basis-[50%] grid grid-cols-2 gap-16 p-10 relative pt-16 max-2xl:w-full max-md:grid-cols-1 max-sm:gap-28">
            <div style={{ background: "linear-gradient(200deg, #D9D9D9 -18.39%, rgba(217, 217, 217, 0.00) 89.51%)" }} className="rounded-[30px] absolute w-[70%] top-0 right-0 h-full max-2xl:w-full"></div>
        <div className="h-[275px] bg-white relative rounded-[30px] shadow">
                <Image 
                src={burger}
                alt='burger'
                className=' absolute top-[-35%] max-2xl:top-[-50%] left-[50%] translate-x-[-50%]'
                />
                <h3 className='mt-32 text-center font-bold text-2xl'>Burger</h3>
                <p className='text-center my-3 font-semibold'>Mushroom Sauce</p>
                <p className='text-center font-bold'>$5.15</p>
                <div className="flex justify-between items-center">
                <Image 
                src={right}
                alt='right'
                />
                <Image 
                src={left}
                alt='left'
                />
                </div>
            </div>
            <div className="h-[275px] bg-white relative rounded-[30px] shadow">
                <Image 
                src={junkFood}
                alt='junkFood'
                className=' absolute top-[-35%] max-2xl:top-[-50%] left-[50%] translate-x-[-50%]'
                />
                <h3 className='mt-32 text-center font-bold text-2xl'>Food Combo</h3>
                <p className='text-center my-3 font-semibold'>Mushroom Sauce</p>
                <p className='text-center font-bold'>$9.15</p>
                <div className="flex justify-between items-center">
                <Image 
                src={right}
                alt='right'
                />
                <Image 
                src={left}
                alt='left'
                />
                </div>
            </div>
            <div className="h-[275px] bg-white relative rounded-[30px] shadow">
                <Image 
                src={pizza}
                alt='pizza'
                className=' absolute top-[-35%] max-2xl:top-[-50%] left-[50%] translate-x-[-50%]'
                />
                <h3 className='mt-32 text-center font-bold text-2xl'>Pizza</h3>
                <p className='text-center my-3 font-semibold'>Mushroom Sauce</p>
                <p className='text-center font-bold'>$6.15</p>
                <div className="flex justify-between items-center">
                <Image 
                src={right}
                alt='right'
                />
                <Image 
                src={left}
                alt='left'
                />
                </div>
            </div>
            <div className="h-[275px] bg-white relative rounded-[30px] shadow">
                <Image 
                src={cake}
                alt='cake'
                className=' absolute top-[-35%] max-2xl:top-[-50%] left-[50%] translate-x-[-50%]'
                />
                <h3 className='mt-32 text-center font-bold text-2xl'>Cake</h3>
                <p className='text-center my-3 font-semibold'>Mushroom Sauce</p>
                <p className='text-center font-bold'>$5.15</p>
                <div className="flex justify-between items-center">
                <Image 
                src={right}
                alt='right'
                />
                <Image 
                src={left}
                alt='left'
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero