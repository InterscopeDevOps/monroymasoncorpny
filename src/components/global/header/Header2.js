import React, { useContext, useState } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range, BsClockHistory, BsPlusLg } from 'react-icons/bs'
import Navmenu from './NavMenu'
// import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'

import IconsRedes from "../IconsRedes";
import { Link } from 'react-router-dom'
import { HiOutlineViewGrid, HiQuestionMarkCircle } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { AiOutlineUnorderedList } from 'react-icons/ai'



function HeaderTwo({ btnName }) {

    const { rpdata } = useContext(GlobalDataContext);
    const [offCanvas, setOffCanvas] = useState(false);
    const [subMenu, setSubMenu] = useState(false);

    //Recorrer el array de los servicios
    const subitems = rpdata?.dbServices?.map((item) => {
        return {
            link: `/${item.name.replaceAll(" ", "-").toLowerCase()}`,
            name: item.name,
        };
    });

    //sub menu
    const subitemsGallery = rpdata?.landings?.map((itemsGallery) => {
        return {
            link: `/gallery/${itemsGallery.name.replaceAll(" ", "-").toLowerCase()}`,
            name: itemsGallery.name,
        };
    });
    // menu


    const Navigation = [
        {
            name: "Home",
            path: "/",
            icon: <HiOutlineViewGrid className="mx-auto text-[20px]" />,
        },
        {
            name: "About",
            path: "/about",
            icon: <HiQuestionMarkCircle className="mx-auto text-[20px]" />,
        },
        {
            name: "Services",
            path: "/services",
            icon: <BiCabinet className="mx-auto text-[20px]" />,
            child: rpdata?.autoGntLandingFromService,
            submenu: [...(subitems ? subitems : [])],
        },
        {
            name: `Gallery`,
            path: `/gallery`,
            icon: <BiCabinet className="mx-auto text-[20px]" />,
            child: rpdata?.customLinks,
            submenu: [...(subitemsGallery ? subitemsGallery : [])],
        },
        {
            name: "Contact",
            path: "/contact",
            icon: <FaEnvelopeOpenText className="mx-auto text-[20px]" />,
        },
    ];


    // agregar la pestaña de reviews al array de dbMenu
    const el = {
        name: `Reviews`,
        path: `/reviews`,
        icon: <BsBookmarkStar className="mx-auto text-[20px]" />,
        child: false,
    };

    rpdata?.simpleWidgets?.forEach((element) => {
        const num = Navigation.length - 1;
        if (element.val === "ReviewTab" && element.activo === true) {
            Navigation.splice(num, 0, el);
        }
    });

    //  fin de agregar pestaña de reviews


    return (
        <header className='absolute z-[10] top-0 w-full'>

            <div className="md:w-100 flex justify-around items-center bg2">
                <div className='md:w-[35%] w-1/2 md:-ml-[22%] -ml-[19%] h-full bg-2 cortehead'>
                    <ul className="flex items-center justify-end space-x-4 md:my-5 my-4">
                        <li className="text-white md:text-[17px] text-[16px] md:block md:mr-28 mr-3 ">
                            <span className="pr-3 flex items-center text-[14px] md:text-[18px]">
                                <FaMapMarkerAlt className="8px text-red-600 mr-2" />
                                {rpdata?.dbPrincipal?.location[0]?.address}
                            </span>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="md:flex hidden justify-center space-x-7 my-2">
                        {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                            return (
                                <li key={index} className="text-white bg-2 p-3 w-[40px] h-[40px] flex items-center justify-center rounded-full ">
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


            <div className='flex bg-white pb-4 '>
                <div className='md:flex w-[65%] lg:w-[85%] mx-auto justify-center items-center'>
                    <div className='w-full md:w-[40%] lg:w-[30%]'>
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            alt='logo'
                            loading='lazy'
                            className='w-[100%] md:w-[100%] mx-auto my-1 md:my-2'
                        />
                    </div>
                    <div className='flex space-x-3 w-full mx-auto justify-center'>
                 
                        {rpdata?.dbPrincipal?.phones.slice(0, 2)?.map((item, index) => {
                            return (
                                <div key={index} className='hidden w-[35%] text-black lg:flex mx-auto justify-center'>
                                    <div className='w-[15%] self-center mr-5'>
                                        <BiPhoneCall fontSize={45} className='borderColor textColor2 border-[3px] p-2' />
                                    </div>
                                    <div>
                                        <a
                                            href={`tel:+1${item.phone}`}
                                        >
                                            <h5 className='text-[21px]'>
                                                {item.phone}
                                            </h5>
                                            <p className='-mb-3'>{
                                                item.name.length > 0 ? item.name : "Phone Number"
                                            }</p>

                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                  
                        <div className='hidden w-[45%] text-black lg:flex mx-auto justify-center'>
                            <div className='w-[15%] self-center mr-5 '>
                                <BsCalendar4Range fontSize={45} className='borderColor textColor2 border-[3px] p-2' />
                            </div>
                            <div>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                </h5>

                                <p className='-mb-3'>
                                    {rpdata?.dbPrincipal?.workdays?.[1]?.day.length > 0 ? rpdata?.dbPrincipal?.workHours?.[0]?.hour : "Work Days"}
                                </p>
                            </div>
                        </div>
                        <div className='hidden w-[40%] text-black  lg:flex mx-auto justify-center'>
                            <div className='w-[15%] self-center mr-3'>
                                <BsClockHistory fontSize={45} className='borderColor textColor2 border-[3px] p-2' />
                            </div>
                            <div>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workdays?.[1]?.day.length > 0 ? rpdata?.dbPrincipal?.workdays?.[1]?.day : rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                </h5>
                                <p className='-mb-3'>
                                    {rpdata?.dbPrincipal?.workHours?.[1]?.hour.length > 0 ? rpdata?.dbPrincipal?.workHours?.[1]?.hour : "Work Hours"}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-footer px-3 md:px-0  py-0 md:w-[80%] mx-auto md:-mt-6 md-0 rounded-bl-2xl rounded-tr-2xl'>
                <div className='flex md:flex-row flex-row-reverse justify-between md:justify-between items-center '>

                    <nav className='md:flex hidden'>
                        <Navmenu />
                    </nav>

                    <div className='hidden bg1 md:flex w-[35%] lg:w-[18%] justify-center items-center  bg-center bg-contain bg-no-repeat py-4 headbuton'>
                        <Link
                            to={`/${btnName === 'view all services' ? 'services' : 'contact'}`}
                        >
                            <span className='capitalize text-white text-[20px] font-semibold '>
                                {btnName ? btnName : 'FREE ESTIMATE'}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='bg1 px-3 md:px-0  py-0 md:w-[80%] mx-auto md:-mt-6 md-0'>
                <div className='flex md:flex-row flex-row-reverse justify-between md:justify-between items-center '>

                    <div className="flex self-center md:hidden w-[30%] justify-center">
                        <AiOutlineUnorderedList
                            className="text-[40px] text-white"
                            onClick={() => {
                                setOffCanvas(!offCanvas);
                            }}
                        />
                    </div>

                    <div className='block md:hidden'>
                        <ButtonContent btnStyle="five" btnName={"Contact Us"} btnphone={rpdata?.dbPrincipal?.phones?.[0]?.phone} />
                    </div>
                </div>
            </div>



            {/* MenuMobil */}
            <nav>
                {offCanvas ? (
                    <nav className="side-slide z-10">
                        <button
                            className="text-white relative top-[-30px] left-[210px] bg2 py-[6px] px-[15px] rounded-md"
                            onClick={() => {
                                setOffCanvas(false);
                            }}
                        >
                            x
                        </button>
                        <div>
                            <img
                                src={rpdata?.dbPrincipal?.logo}
                                alt="Company Logo"
                                className="w-[80%] mb-8"
                            />
                        </div>
                        <div>
                            <ul className="bg-navbar-movil">
                                {Navigation.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link
                                                to={item.child ? "" : item.path}
                                                className="flex self-center items-center"
                                                onClick={() => {
                                                    setSubMenu(!subMenu);
                                                }}
                                            >
                                                {item.name}
                                                {item.child ? <BsPlusLg className="ml-[140px]" /> : null}
                                            </Link>
                                            {item.child ? (
                                                <ul className="rounded-sm w-[200px] text-white relative ml-2 off-canvas">
                                                    {item.submenu.map((item, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                className="py-2 px-4"
                                                                onClick={() => {
                                                                    setOffCanvas(false);
                                                                }}
                                                            >
                                                                <Link to={item.link} exact>
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            ) : null}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div>
                                <IconsRedes classes={'flex justify-center items-center gap-5'} />
                            </div>
                        </div>
                    </nav>
                ) : null}
            </nav>
        </header>
    )
}

export default HeaderTwo