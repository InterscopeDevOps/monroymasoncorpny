import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range, BsClockHistory } from 'react-icons/bs'
import Navmenu from './NavMenu'



const HeaderSeven = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='w-full flex justify-center bg-2'>
            <div className='w-[80%] flex md:flex-row flex-row-reverse space-x-4 '>
                <div className='md:w-[20%] w-[80%] my-auto'>
                    <img
                        src={rpdata?.dbPrincipal?.logo}
                        alt='logo'
                        loading='lazy'
                        className='w-[100%] mx-auto pt-3 pb-5'
                    />
                </div>
                <div className="md:w-full w-[20%] flex flex-col">
                    <p className='text-white ml-5 text-[20px] my-2 md:block hidden'>
                        Welcome to {rpdata?.dbPrincipal?.name}
                    </p>
                    {
                        rpdata?.simpleWidgets?.[3]?.activo ?
                            null
                            :
                            <div className='md:px-3 px-0 md:py-4 py-0 rounded-sm md:bg-white bg-transparent rounded-l-[30px] flex my-auto'>
                                <div className='flex justify-between w-full items-center md:flex-row flex-col '>
                                    <nav>
                                        <Navmenu />
                                    </nav>
                                    <ul className="md:flex hidden space-x-3">
                                        {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                            return (
                                                <li key={index} className="textColor1">
                                                    <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                                        <i
                                                            className={`fab fa-${item.icon}`}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                    }

                    <div className='md:flex mt-5 hidden'>
                        <div className='w-[55%] lg:w-[75%]'>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>

                                <div className='flex  text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BiPhoneCall color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <a
                                            href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                                        >
                                            <p className='-mb-3'>Phone Number</p>
                                            <h5 className='text-[21px]'>
                                                {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                                            </h5>
                                        </a>
                                    </div>
                                </div>

                                <div className='hidden text-white  lg:flex'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsCalendar4Range color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Workdays</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                        </h5>
                                    </div>
                                </div>

                                <div className='hidden lg:flex justify-end text-white'>
                                    <div className='w-[15%] self-center mr-3'>
                                        <BsClockHistory color='white' fontSize={35} />
                                    </div>
                                    <div>
                                        <p className='-mb-3'>Work Hours</p>
                                        <h5 className='text-[21px]'>
                                            {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[45%] lg:w-[25%] text-end border-l ml-0 lg:ml-7'>
                            <ButtonContent />
                        </div>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default HeaderSeven