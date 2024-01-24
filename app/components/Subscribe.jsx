import Image from 'next/image'
import { burger2 } from '../assets'

const Subscribe = () => {
  return (
    <div className="p-10 flex gap-10 my-40 items-center justify-between bg-black h-[370px] rounded-[50px] subscribe translate-y-16 opacity-0">
        <Image 
        src={burger2}
        alt='burger2'
        className='h-[570px] max-2xl:hidden'
        />
        <div className="basis-2/5 max-2xl:basis-full">
            <h2 className='text-white text-4xl font-bold'>Subcribe To Our Newsletter</h2>
            <p className='text-white my-5'>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
            <div className="relative">
                <input type="text" name="" id="" placeholder='Type your email....' className='h-20 w-full p-8 rounded-2xl pr-[180px] outline-none' />
                <div className=" rounded-2xl h-[50px] w-[150px] flex justify-center items-center absolute bg-[#F48E28] text-white top-2/4 right-4 translate-y-[-50%]">SUBCRIBE</div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe