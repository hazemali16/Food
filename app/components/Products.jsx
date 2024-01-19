import Image from 'next/image'
import { addCart, chickenPie, enshilad, greenBeans, moreProducts, pizza2, salad, sandwich, star } from '../assets'


const Products = () => {
  return (
    <>
    <span className="block text-[#F48E28] text-center mt-20 mb-5">Product</span>
    <h2 className="text-3xl font-bold text-center">Most Popular Items</h2>
    <div className="grid grid-cols-3 gap-10 mt-20 mb-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={sandwich}
            alt='sandwich'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Gyro Sandwhic</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    4.9
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$15.00</span>
            </div>
        </div>
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={enshilad}
            alt='enshilad'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Enchilade</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    5
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$25.50</span>
            </div>
        </div>
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={greenBeans}
            alt='greenBeans'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Green Beans</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    4.9
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$12.00</span>
            </div>
        </div>
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={pizza2}
            alt='pizza2'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Pizza</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    5
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$18.50</span>
            </div>
        </div>
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={chickenPie}
            alt='chickenPie'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Chicken Pot Pie</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    4.9
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$25.00</span>
            </div>
        </div>
        <div style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.10)" }} className="rounded-[35px]">
            <Image 
            src={salad}
            alt='salad'
            className="w-full rounded-t-[35px]"
            />
            <div className="p-5 flex items-center justify-between">
                <h3 className='text-lg font-bold'>Green Salad</h3>
                <span className='flex items-center gap-3'>
                    <Image 
                    src={star}
                    alt='star'
                    />
                    4.9
                </span>
            </div>
            <div className="p-5 flex items-center justify-between">
                <Image 
                src={addCart}
                alt='addCart'
                />
                <span>$15.00</span>
            </div>
        </div>
    </div>
    <Image 
    src={moreProducts}
    alt='moreProducts'
    className='mx-auto'
    />
    </>
  )
}

export default Products