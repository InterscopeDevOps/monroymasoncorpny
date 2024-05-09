import React, { useContext } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsClockHistory, BsCalendar4Range } from 'react-icons/bs'
import Navmenu from './NavMenu'



const HeaderTwo = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='md:pt-[20px] z-[15] bg2 w-full'>
            <div className='flex'>
                <div className='md:pl-14 md:py-0 py-5 w-[100%] mr-0 md:w-[35%] lg:w-[25%] lg:mr-10 flex md:justify-start justify-center'>
                    <img
                        src={rpdata?.dbPrincipal?.logo}
                        alt='logo'
                        loading='lazy'
                        className='w-[220px] pr-20px pt-20px pb-5 md:absolute relative bg-white rounded-lg z-50'
                    />
                </div>
                <div className='hidden md:block w-[65%] lg:w-[95%] h-50 self-center'>
                    <div className='flex items-center'>
                        <div className='w-[55%] lg:w-[75%]'>
                            <div className='flex justify-around items-center'>
                                <div className='flex text-white flex-row'>
                                    <div className='w-[100%] flex space-x-3 self-center mr-0'>
                                        {rpdata?.dbPrincipal?.phones?.slice(0, 3)?.map((item, index) => {
                                            return (
                                                <div>
                                                    <li key={index} className='list-none'>
                                                        <p className='-mb-3'>Phone Number</p>
                                                        <a
                                                            href={`tel:+1${item.phone}`}
                                                            className='flex'
                                                        >
                                                            <BiPhoneCall color='white' fontSize={35} />
                                                            <h5 className='text-[21px]'>{item.phone}</h5>
                                                        </a>
                                                    </li>
                                                </div>
                                            );
                                        })
                                        }
                                    </div>
                                </div>
                                <div className='hidden text-white  lg:flex'>
                                    <div className='w-[10%] self-center mr-5'>
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
                                    <div className='w-[10%] self-center mr-5'>
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
                        <div className='w-[45%] lg:w-[25%] text-end border-l ml-0 lg:ml-7 pr-5 items-center'>
                            <ButtonContent />
                        </div>
                    </div>
                </div>
            </div>
            {
                rpdata?.simpleWidgets?.[3]?.activo ?
                    null
                    :
                    <div className='bg-white py-4 mx-auto justify-center flex'>
                        <div className='flex justify-between items-center'>
                            <nav>
                                <Navmenu />
                            </nav>
                            <ul className="flex justify-center space-x-7 ml-10">
                                {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                    return (
                                        <li key={index} className="textColor2">
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
        </header>
    )
}

export default HeaderTwo