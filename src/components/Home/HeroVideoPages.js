// import React, { useContext } from "react";
// import { GlobalDataContext } from "../../context/context";
// import { ButtonContent } from "../global/boton/ButtonContent";
function HeroVideo({ urlVideo,  headertitle, bgimg, Subheader }) {
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
                <div className="text-center absolute top-[50%]">
                    <h1 className="text-white">{headertitle}</h1>
                    {
                        headertitle === Subheader ?
                            <h6 className="text-white">Home - {Subheader}</h6>
                            :
                            <h6 className="text-white">{Subheader}</h6>
                    }
                </div>
            </div>
        </div>
    );
}
export default HeroVideo;