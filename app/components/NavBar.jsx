import Image from 'next/image'
import { bag, logo, search } from '../assets'

const NavBar = () => {
  return (
    <div className='pt-5 flex justify-between items-center max-sm:flex-col max-sm:gap-5 absolute sm:w-[80%] w-[95%] mx-auto'>
        <Image 
        src={logo}
        alt='logo'
        />
        <ul className='flex gap-10 font-semibold items-center'>
            <li>Home</li>
            <li>Menu</li>
            <li>Service</li>
            <li>Shope</li>
        </ul>
        <div className="relative hidden lg:block">
            <input style={{ boxShadow: "0px 0px 17px 0px rgba(0, 0, 0, 0.15)" }} className='outline-none px-20 rounded-lg w-[400px] h-16' type="search" name="" id="" placeholder='Search' />
            <Image 
        src={search}
        alt='search'
        className='top-[50%] left-5 absolute translate-y-[-50%]'
        />
                <Image 
        className=' top-[50%] right-5 absolute translate-y-[-50%]'

        src={bag}
        alt='bag'
        />
        </div>
    </div>
  )
}

export default NavBar