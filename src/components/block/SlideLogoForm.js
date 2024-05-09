import React, { useContext } from 'react'
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from '../global/boton/ButtonContent';

const SlideLogoForm = ({ image, text }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div className='bgCountent relative w-full h-auto' style={{ backgroundImage: `url("${image ? image : rpdata?.stock?.[1]}")` }}>
            <div className='relative w-full h-auto'>
                <div className='w-4/5 mx-auto flex flex-col justify-center z-50 -mt-10 md:-mt-0 my-auto'>
                    <div className="w-[80%] md:w-[30%] flex justify-center mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            alt="CompanyLogo"
                            className="w-full flex"
                            data-aos="zoom-in" data-aos-duration="1500"
                        />
                    </div>
                    <div className='text-white text-center'>
                        {/* <p>
                            {
                                rpdata?.dbValues?.[1]?.description
                            }     
                        </p> */}
                        <p className='pb-3'>
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                    </div>
                    <div className='mx-auto'>
                        <ButtonContent btnStyle={'three'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideLogoForm;
