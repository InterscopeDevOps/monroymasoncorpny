import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import imgDefault from '../../assets/image/placeholder.png'

import CountUp from 'react-countup';

const Block_10 = ({ title, text, listsAbout, listsServices, image, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);
    const esc = 100;
    return (
        <>
            <section className="w-full flex justify-center md:py-32 py-10 relative">
                {/* <div className="absolute top-0 right-[35%]">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/imagenessanti-2a052.appspot.com/o/SELLO_Mesa%20de%20trabajo%201.png?alt=media&token=c0121025-7d79-420b-8290-7e13a6e360d5&_gl=1*h1un93*_ga*MTg3NzIxNTgxMi4xNjczOTA2Mjk5*_ga_CW55HF8NVT*MTY4NTc0NDM4MS4yMS4xLjE2ODU3NDQzODQuMC4wLjA"
                        alt="Years Img"
                        className="md:w-[400px] w-[350px]" />
                </div> */}
                <div className="max-w-7xl lg:ml-14 md:flex md:p-0 px-2 content-reverse">
                    <div className="md:w-[50%] lg:-mt-8 flex justify-center">
                        <div
                            className="w-[85%] md:w-[650px] md:h-[700px] h-[320px] bg-cover bg-center md:-ml-8 ml-0 lg:ml-10 lg:rounded-md rounded-2xl"
                            style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}
                        ></div>
                        <div className=' hidden lg:flex lg:absolute borderColor border-[4px] lg:border-[11px] -mt-[20%] lg:mt-[-4%] left-28 w-[80px] h-[80px] rounded-3xl lg:w-[230px] lg:h-[230px] -z-10 '></div>
                    </div>
                    <div className="md:w-[50%] bg-white lg:mt-24 lg:mx-0 mx-4 py-8 md:px-6 px-3 self-center md:text-start text-center shadow-2xl lg:-ml-24">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed.length > 1 ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h2 className='pb-3 capitalize' data-aos="zoom-in" data-aos-duration="1200">we have {rpdata?.dbPrincipal?.exprYears} years of experience </h2>
                                :
                                <h2 className='pb-3 capitalize' data-aos="zoom-in" data-aos-duration="1200">
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className='pb-3' data-aos="zoom-in" data-aos-duration="1200">
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        <div className="flex md:flex-row  py-3">
                            <div className="md:w-[80%] w-full">
                                {
                                    listsAbout ?
                                        <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                            {
                                                rpdata?.dbAbout?.[0].list.length > 1 ?
                                                    rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                        return (

                                                            <li key={index} className="py-1 px-2 block items-center">
                                                                <div class="flex justify-between mb-1">
                                                                    <span class="text-base font-medium text-black">{item}</span>
                                                                    <span class="text-base font-medium text-black"><CountUp
                                                                        end={esc}
                                                                        duration={15}
                                                                        enableScrollSpy={true}
                                                                        scrollSpyDelay={50}
                                                                    />%</span>
                                                                </div>
                                                                <div class="w-full rounded-full h-2.5 bg-slate-400 ">
                                                                    <div className='w-[98%] animate-pulse h-2.5 rounded-full bgBloque z-20'></div>
                                                                </div>
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
                                                    <li key={index} className="py-1 block items-center">
                                                        <div class="flex justify-between mb-1">
                                                            <span class="text-base font-medium text-black">{item.name}</span>
                                                            <span class="text-base font-medium text-black"><CountUp
                                                                end={esc}
                                                                duration={10}
                                                                enableScrollSpy={true}
                                                                scrollSpyDelay={50}
                                                            />%</span>
                                                        </div>
                                                        <div class="w-full  h-3 bg-slate-400 ">
                                                            <div className='w-[98%] animate-pulse h-3 bgBloque z-20'></div>
                                                        </div>
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
                        <div className=' hidden lg:flex lg:absolute borderColor border-[4px] lg:border-[11px] -mt-[20%] lg:-mt-[9%] lg:right-[7.5%] w-[80px] h-[80px] rounded-3xl lg:w-[230px] lg:h-[230px] -z-10 '></div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Block_10;