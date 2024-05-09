import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import imgDefault from '../../assets/image/placeholder.png'
import arbusto from '../../assets/image/Pintura.png'
import { VscDebugBreakpointData } from 'react-icons/vsc';


const Block_10 = ({ title, text, listsAbout, listsServices, image, image3, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="w-full flex justify-center md:py-32 py-10">
                <div className="max-w-6xl md:flex md:p-0 px-2 content-reverse">
                    <div className="md:w-[50%]">
                        <div
                            className="w-full md:w-[600px] md:h-[600px] h-[400px] bg-cover bg-center rounded-full md:-ml-8 ml-0"
                            style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}
                        ></div>
                        <div className='absolute borderColor border-[12px] lg:border-[16px] -mt-[20%] lg:-mt-[39%] lg:-ml-24 w-[80px] h-[80px] rounded-full lg:w-[300px] lg:h-[300px] -z-10 '></div>
                        <div className='absolute border-white shadow-2xl lg:border-[10px] -mt-[20%] lg:-mt-[14%]  w-[80px] h-[80px] lg:w-[300px] lg:h-[300px] bg-cover bg-center rounded-full'
                        style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }}
                        ></div>

                    </div>

                    <div className="md:w-[50%] py-4 md:px-6 px-3 self-center md:text-start text-center">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed.length > 1 ?
                                    <h2 className='pb-3 capitalize'>
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
                        <div className="flex md:flex-row md:w-m-100% py-3">
                            <div className="md:w-[40%] w-full">
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
                                        <ul className="block pb-5">
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
                            <div className="md:ml-14 md:w-[225px] md:h-[200px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url("${arbusto}")` }} ></div>
                        </div>
                        <div>
                            <ButtonContent />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Block_10;