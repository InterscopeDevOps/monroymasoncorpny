import React from "react";
// import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
// import { GiRibbonMedal, GiHammerNails } from "react-icons/gi";
// import { AiOutlineTeam } from "react-icons/ai";
// import { IoMdHammer } from "react-icons/io";
function HeroVideo({ urlVideo, title, texts }) {
    // const { rpdata } = useContext(GlobalDataContext);
    return (
        <div>
            <div className="w-full relative content_video flex justify-center">
                <video

                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full md:h-full object-cover"
                >
                    <source
                        src={urlVideo}
                        type="video/mp4"
                    />
                </video>
                <div className="flex md:flex-row flex-col md:w-4/5 mx-auto absolute bottom-[30px] md:bottom-[100px] lg:bottom-[120px] md:text-start text-center text-white">
                    <div className="w-full text-center p-4">
                        <h1 className="text-[30px] md:text-[3em] lg:text-[3em]">{title}</h1>
                        <p className="px-5 md:px-[10%]">{texts}</p>
                        <ButtonContent btnStyle="three" />
                    </div>
                </div>
            </div>
            {/* <div className=" md:w-[70%] w-[100%] bg-2 text-white md:-mt-14 -mt-1 relative md:py-14 py-2 homi">
                    <ul className="flex md:flex-row flex-col justify-around ml-5 md:ml-0">
                        <h5 className="flex items-center" data-aos="zoom-in">
                            <GiHammerNails
                                fontSize={70}
                                className="text-white"
                            />
                            BEST SERVICE</h5>
                        <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1000">
                            <AiOutlineTeam
                                fontSize={70}
                                className="text-white"
                            />
                            PROFESSIONAL TEAM</h5>
                        <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1500">
                            <GiRibbonMedal
                                fontSize={70}
                                className="text-white"
                            />BEST QUALITY</h5>
                    </ul>
                </div> */}
        </div>
    );
}
export default HeroVideo;