import Image from 'next/image'
import { facebook, instagram, linkedin, logo, twitter } from '../assets'

const Footer = () => {
  return (
    <div className="px-[10%] pb-10 pt-20 bg-[#FAFAFF] max-sm:px-[2.5%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pb-10">
            <div className="">
                <Image 
                src={logo}
                alt='logo'
                />
            <p className=" text-lg mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
            </p>
            </div>
            <div className="pt-5">
            <h3 className='mb-10 text-2xl font-bold '>Opening Restaurant</h3>
            <p className='leading-10'>Sat-Wet: 09:00am-10:00PM
                <br />
                Thursdayt: 09:00am-11:00PM
                <br />
                Friday: 09:00am-8:00PM
            </p>
            </div>
            <div className="pt-5">
            <h3 className='mb-10 text-2xl font-bold '>User Link</h3>
            <ul className=' list-none  flex flex-col gap-5'>
                <li className=''>About Us</li>
                <li className=''>Contact Us</li>
                <li className=''>Order Delivery</li>
                <li className=''>Payment & Tex</li>
                <li className=''>Terms of Services</li>
            </ul>
            </div>
            <div className="pt-5">
            <h3 className='mb-10 text-2xl font-bold'>Contact Us</h3>
            <p className='leading-10'>1234 Country Club Ave
                <br />
                NC 123456, London, UK
                <br />
                +0123 456 7891
            </p>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5">
        <p className=" leading-10">
            Created By <span className='text-[#F48E28] text-lg'>Hazem Ali</span>
        </p>
        <ul className='flex gap-5 items-center max-sm:gap-1'>
            <li>
                <Image
                src={instagram}
                alt='instagram'
                />
            </li>
            <li>
                <Image
                src={facebook}
                alt='facebook'
                />
            </li>
            <li>
                <Image
                src={twitter}
                alt='twitter'
                />
            </li>
            <li>
                <Image
                src={linkedin}
                alt='linkedin'
                />
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer