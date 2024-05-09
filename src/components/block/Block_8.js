import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/context'

import { ButtonContent } from '../global/boton/ButtonContent';
import { VscDebugBreakpointData } from 'react-icons/vsc';


import imgDefault from '../../assets/image/placeholder.png'


const Block_8 = ({ title, text, listsAbout, listsServices, image, image1, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <div className=' w-full pb-36 md:py-36'>
            <div className='w-4/5 mx-auto block lg:flex lg:flex-row-reverse flex-col-reverse justify-around items-center'>
                <div className='w-full lg:w-[50%] pt-20 pb-[150px] lg:py-10 px-5 md:px-auto flex flex-col justify-center text-center md:text-start' data-aos="zoom-in" data-aos-duration="1000">
                    {
                        sloganPrincipal ?
                            rpdata?.dbPrincipal?.licensed ?
                                <h2 className='pb-3 capitalize'>
                                    {rpdata?.dbPrincipal?.licensed}
                                </h2>
                                : <h3 className='pb-10 capitalize'>
                                    {
                                        rpdata?.dbPrincipal?.exprYears ?
                                            `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                                            : 'we have many years of experience'
                                    }
                                </h3>
                            :
                            <h2 className='pb-5 capitalize'>
                                {
                                    title ? title :
                                        <span className='lowercase text-[18px]'>
                                            {`default title={'frase'}`} o
                                            {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                        </span>
                                }
                            </h2>
                    }
                    <p className='pb-5'>
                        {
                            text ? text :
                                <span>{`para agregar el texto -> text={'description'}`}
                                    <br />{'para agregar lista de about -> listsAbout={true}'}
                                    <br />{'para agregar lista de servicios -> listsServices={true}'}
                                </span>
                        }
                    </p>
                    {
                        listsAbout ?
                            <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                {
                                    rpdata?.dbAbout?.[0].list.length > 1 ?
                                        rpdata?.dbAbout?.[0].list.map((item, index) => {
                                            return (

                                                <li key={index} className="py-2 flex items-center">
                                                    <VscDebugBreakpointData />
                                                    <span className="pl-2">{item}</span>
                                                </li>
                                            )
                                        })
                                        : null
                                }
                            </ul>
                            : null
                    }
                    {
                        listsServices ?
                            <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                                {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                                    return (
                                        <li key={index} className="py-1 flex items-center">
                                            <VscDebugBreakpointData />
                                            <span>{item.name}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            : null
                    }
                    <div>
                        <ButtonContent />
                    </div>
                </div>
                <div className='w-[80%] lg:w-[35%] bgBloque rounded-[20%] ml-auto lg:ml-0 -my-20 lg:-my-10 h-[400px] md:h-[60vh] pt-[80px]'>
                    <div className='relative '>
                        <img
                            src={image ? image : imgDefault}
                            alt='no found'
                            loading='lazy'
                            className='hidden md:block relative w-[90%] h-[300px] md:h-[50vh] -ml-16 -mt-[200px] border-[5px] border-white object-cover rounded-[80px]'
                        />
                        <img
                            src={image1 ? image1 : imgDefault}
                            alt='no found'
                            loading='lazy'
                            className='absolute md:-bottom-[260px] w-auto h-[300px] right-16 md:-right-[50px] md:w-[85%] md:h-[89%] border-[5px] border-white rounded-[80px]'
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Block_8;