import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Services/ServicesHome_3";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_4";
import BlockSecondary from "../components/block/Block_12";
import BlockAbout from "../components/block/Block_3";
/* import SlideBlock from "../components/block/SlideLogoForm"; */
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";
import Modal from "../components/Home/Modal";
// import CustomReviews from "../components/reviews/CustomReviews";
import ValuesOne from "../components/values/Values_2";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">
         <Modal /> 

        <input className="absolute -z-50" autoFocus></input>
        <HeroSection
          title={rpdata?.dbSlogan?.[3]?.slogan}
          texts={rpdata?.dbValues?.[0].description}
          urlVideo={"https://firebasestorage.googleapis.com/v0/b/videos-de-stock.appspot.com/o/Roofing%2FRoofing%20Services.mp4?alt=media&token=c8130fbf-0cb4-4943-890d-ce48094c2361&_gl=1*1tvlkef*_ga*MTE3MTYyMjExMy4xNjg2MTY3OTI1*_ga_CW55HF8NVT*MTY5NzgxOTA4Mi4yMTMuMS4xNjk3ODE5MTIwLjIyLjAuMA.."}
          bgImg={rpdata?.stock?.[10]}
          bgImg1={rpdata?.stock?.[11]}
          bgImg2={rpdata?.stock?.[12]}
          bgImg3={rpdata?.stock?.[13]}
        />
        <BlockPrincipal
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbHome?.[0].text}
          image1={rpdata?.stock?.[10]}
          image2={rpdata?.stock?.[11]}
          image3={rpdata?.stock?.[12]}
          corte={rpdata?.stock}
          sloganPrincipal={true}
          listServices={true}
        />
          <ValuesOne image1={rpdata?.stock?.[12]} />
        <Directories />
        <CounterUp image={rpdata?.stock?.[9]} />

        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}

            />
            : null

        }
            
         <BlockSecondary
          title={rpdata?.dbSlogan?.[8]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.stock?.[10]}
        />
   {/*      <SlideBlock
          title={'a little about us'}
          text={rpdata?.dbValues?.[2].description}
          image={rpdata?.stock?.[3]}
        /> */}
        <BlockAbout
          title={'a little about us'}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.stock?.[1]}
          image1={rpdata?.stock?.[5]}
          image3={rpdata?.stock?.[6]}
          listsAbout={true}
        />
      

        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }
        {/* <CustomReviews/> */}
        {/* Gallery cuando es OnePages */}
        {/* Servicios del home */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-20">
              <ContentServices />
            </div>
            :
            <ServicesHome />
        }
        {/* Paleta de Colores */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-10 pb-28">
              <h2 className="text-center pb-[50px]">{rpdata?.labels?.general?.titleGallery}</h2>
              <GalleryContent galleryImages={rpdata?.stock?.length > 0 ? rpdata?.stock : rpdata?.stock} />
            </div>
            :
            null
        }
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[5]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Home;
