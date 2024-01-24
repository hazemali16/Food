import Image from 'next/image'
import { car, food, fork } from '../assets'

const Services = () => {
  return (
    <div className='services translate-y-16 opacity-0' id='service'>
    <span className="block text-[#F48E28] text-center mt-20 mb-5">Services</span>
    <h2 className="text-3xl font-bold text-center">Why Choose Our Favorite Food</h2>

    <div className="grid grid-cols-3 gap-10 mt-20 mb-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
    <div className="services-box opacity-0 duration-300">
        <div className="py-[100px] flex flex-col justify-center items-center gap-10 border border-[#B6B6B6] p-10 rounded-[35px]">
            <div className="w-24 h-24 rounded-full bg-[#F5DDC4] flex justify-center items-center">
                <Image 
                src={food}
                alt='food'
                />
            </div>
            <h3 className="font-bold text-xl">
            Qualityfull Food
            </h3>
            <p className="text-lg text-center">
            But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.
            </p>
        </div>
    </div>
    <div className="services-box opacity-0 duration-300 delay-300">
        <div style={{ boxShadow: "0px 20px 80px 0px rgba(0, 0, 0, 0.15)" }} className="py-[100px] flex flex-col justify-center items-center gap-10  p-10 rounded-[35px]">
            <div className="w-24 h-24 rounded-full bg-[#F5DDC4] flex justify-center items-center">
                <Image 
                src={fork}
                alt='fork'
                />
            </div>
            <h3 className="font-bold text-xl">
            Healthy Food
            </h3>
            <p className="text-lg text-center">
            But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.
            </p>
        </div>
    </div>
    <div className="services-box opacity-0 duration-300 delay-[600ms]">
        <div className="py-[100px] flex flex-col justify-center items-center gap-10 border border-[#B6B6B6] p-10 rounded-[35px]">
            <div className="w-24 h-24 rounded-full bg-[#F5DDC4] flex justify-center items-center">
                <Image 
                src={car}
                alt='car'
                />
            </div>
            <h3 className="font-bold text-xl">
            Fast Delivery
            </h3>
            <p className="text-lg text-center">
            But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.
            </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services