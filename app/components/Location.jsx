import Image from 'next/image'
import { clock, location, phone } from '../assets'

const Location = () => {
  return (
    <div style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.05);" }} className="grid grid-cols-3 rounded-[50px] p-10 max-md:grid-cols-1 max-md:gap-10">
        <div className="text-center md:border-r border-[#B6B6B6]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#F48E28] flex justify-center items-center mx-auto">
                <Image 
                src={clock}
                alt='clock'
                />
            </div>
            <h3 className='font-semibold text-lg my-3'>Today 10:00am - 10:00pm</h3>
            <p>Working time</p>
        </div>
        <div className="text-center md:border-r border-[#B6B6B6]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#F48E28] flex justify-center items-center mx-auto">
                <Image 
                src={location}
                alt='location'
                />
            </div>
            <h3 className='font-semibold text-lg my-3'>Washington, D.C., DC,USA</h3>
            <p>Our Location</p>
        </div>
        <div className="text-center">
            <div className="w-[42px] h-[42px] rounded-full bg-[#F48E28] flex justify-center items-center mx-auto">
                <Image 
                src={phone}
                alt='phone'
                />
            </div>
            <h3 className='font-semibold text-lg my-3'>+0123 456 7891</h3>
            <p>Phone Number</p>
        </div>
    </div>
  )
}

export default Location