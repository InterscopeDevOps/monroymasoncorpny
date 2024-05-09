import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import imgDefault from '../../assets/image/placeholder.png'
import { VscDebugBreakpointData } from 'react-icons/vsc';


const Block_10 = ({ title, text, listsAbout, listsServices, image, image3, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="w-full flex justify-center md:py-32 py-10" data-aos="fade-right">
                <div className="max-w-7xl lg:ml-14 md:flex md:p-0 px-2 content-reverse">
                    <div className="md:w-[50%]">
                        <div
                            className="w-[85%] md:w-[600px] md:h-[600px] h-[320px] bg-cover bg-center rounded-3xl  md:-ml-8 ml-0 lg:ml-10"
                            style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}
                        ></div>
                        <div className='absolute borderColor1 border-[4px] lg:border-[11px] -mt-[20%] lg:-mt-[41%] lg:-ml-2 w-[80px] h-[80px] rounded-3xl lg:w-[230px] lg:h-[230px] -z-10 '></div>
                        <div className='bg-cover bg-center borderColor1 absolute lg:border-[14px] -mt-[40%] ml-[54%] lg:-mt-[18%] lg:-ml-16 w-[130px] h-[130px] rounded-3xl lg:w-[300px] lg:h-[300px]'
                            style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }}
                        ></div>
                    </div>
                    <div className="md:w-[50%] py-4 md:px-6 px-3 self-center md:text-start text-center shadow-2xl bg-slate-50 rounded-2xl  lg:-ml-16">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed.length > 1 ?
                                    <h2 className='pb-3 capitalize' >
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h2 className='pb-3 capitalize'>we have {rpdata?.dbPrincipal?.exprYears} years of experience </h2>
                                :
                                <h2 className='pb-3 capitalize'>
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className='pb-3'>
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        <div className="flex md:flex-row  py-3">
                            <div className="md:w-[70%] w-full">
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
                                        <ul className="grid grid-cols-1 gap-x-8 md:grid-cols-2 pb-5">
                                            {rpdata?.dbServices?.slice(0, 4).map((item, index) => {
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
                            </div>
                        </div>
                        <div>
                            <ButtonContent />
                        </div>
                        <div className=' hidden lg:flex lg:absolute borderColor border-[4px] lg:border-[11px] -mt-[20%] lg:-mt-[11%] lg:right-[7.5%] w-[80px] h-[80px] rounded-3xl lg:w-[230px] lg:h-[230px] -z-10 '></div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Block_10;