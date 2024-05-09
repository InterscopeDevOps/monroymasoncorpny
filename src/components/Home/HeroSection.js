
import { ButtonContent } from "../global/boton/ButtonContent";
// import { GiRibbonMedal } from "react-icons/gi";
// import { AiOutlineTeam } from "react-icons/ai";
// import { RiPlantFill } from "react-icons/ri";

function HeroSection({ bgImg, bgImg1, bgImg2, bgImg3, title, texts }) {

  const BgImages = [
    bgImg,
    bgImg1,
    bgImg2,
    bgImg3,
  ]
  return (
    <>
      <div className="pic-wrapper svgHerosection1  w-full h-screen" >
        {
          BgImages.map((item, index) => {
            return (
              <figure
                key={index}
                className={`pic-${index + 1}`}
                style={{ background: `url("${item}")` }}
              ></figure>
            )
          })
        }
        <div className="z-[4] relative w-4/5 mx-auto h-full flex md:flex-row flex-col justify-center items-center md:pb-[80px] md:pt-[420px] pt-[380px] pb-[40px]">

          <div className="w-full justify-center">
            <div className="w-full flex flex-col justify-center  items-center">
              <h1 className="text-white text-center text-[30px] md:text-[48px] font-bold">
                {title}
              </h1>
              <p className="text-white text-center">
                {texts}
              </p>
            </div>
            <div className="w-full flex justify-center py-5">
              <div className="w-full flex justify-center">
                  <ButtonContent btnStyle={'three'} />
              </div>
            </div>
          </div>

      
        </div>
      </div>
      {/* <div className=" md:w-[70%] w-[100%] bg-2 text-white md:-mt-14 -mt-20 relative md:py-14 py-2 homi">
        <ul className="flex md:flex-row flex-col justify-around ml-5 md:ml-0">
          <h5 className="flex items-center" data-aos="zoom-in">
            <RiPlantFill
              fontSize={70}
              className="text-white mr-2"
            />
            BEST SERVICE</h5>
          <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1000">
            <AiOutlineTeam
              fontSize={70}
              className="text-white mr-2"
            />
            PROFESSIONAL TEAM</h5>
          <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1500">
            <GiRibbonMedal
              fontSize={70}
              className="text-white"
            />BEST QUALITY</h5>
        </ul>
      </div> */}
    </>
  );
}

export default HeroSection;
