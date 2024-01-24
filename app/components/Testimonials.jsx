import Image from 'next/image'
import { left2, lunch, person, right2 } from '../assets'

const Testimonials = () => {
  return (
    <div className='testimonials translate-y-16 opacity-0'>
    <span className="block text-[#F48E28] text-center mt-20 mb-5">Testimonials</span>
    <h2 className="text-3xl font-bold text-center">Our Happy Client Says</h2>
    <div className="flex gap-10 my-20 max-2xl:flex-col-reverse items-center">
        <div style={{ boxShadow: "0px 20px 80px 0px rgba(0, 0, 0, 0.15)" }} className="relative basis-1/2 py-[100px] flex flex-col justify-center items-center gap-10  p-10 rounded-[35px]">
        <Image 
                src={left2}
                alt='left2'
                className=' absolute top-[50%] translate-x-[-50%] -left-1 hidden sm:block'
                />
                                <Image 
                src={right2}
                alt='right2'
                className='absolute top-[50%] translate-x-[-50%] -right-24 hidden sm:block'
                />
            <div className="flex items-center gap-5">
                <Image 
                src={person}
                alt='person'
                className='rounded-full'
                />
                <div className="">
                <h3 className="font-bold text-xl">
            Healthy Food
            </h3>
            <p>CEO & Co-Founder</p>
                </div>
            </div>

            <p className="text-lg text-center font-semibold">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”
            </p>
        </div>
        <Image 
        src={lunch}
        alt='lunch'
        className="basis-1/2"
        />
    </div>
    </div>
  )
}

export default Testimonials