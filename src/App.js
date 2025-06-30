import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import About from "./Page/About";
import Services from "./Page/Services";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import Reviews from "./Page/Reviews";
import OurVideos from "./Page/OurVideos";
import ErrorPages from "./Page/ErrorPages";

import ServicesDetail from "./components/Services/ServicesDetail";
import GalleryDetail from "./components/Gallery/GalleryDetail";
import FindUsOn from "./components/global/FindUsOn";
import Loader from "./components/global/Loader";

import { GlobalDataContext } from "./context/context";

import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import "./assets/css/styles.css";
import "./assets/css/slider.css";
import "./assets/css/socialmediaicon.css";

const App = () => {
  const id = "6639140cc087ab94c48c6e85";
   const [rpdata, setrpdata] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://servidorpublico.herokuapp.com/api/paginas/${id}`);
        setrpdata(JSON.parse(JSON.stringify(response.data)));

        const styles = response.data.styles;
        if (styles) {
          document.documentElement.style.setProperty("--main-color", styles.mainColor);
          document.documentElement.style.setProperty("--secondary-color", styles.secondaryColor);
          document.documentElement.style.setProperty("--three-color", styles.thirdColor);
          document.documentElement.style.setProperty("--heading-color", styles.headingTextColor);
          document.documentElement.style.setProperty("--paragraph-color", styles.paragraphTextColor);
          document.documentElement.style.setProperty("--bg-footer", styles.bgFooter);
          document.documentElement.style.setProperty("--btn", styles.btn);
          document.documentElement.style.setProperty("--btn-hover", styles.btnHover);
          document.documentElement.style.setProperty("--scroll-color", styles.scrollColor);
          document.documentElement.style.setProperty("--icons-menu-movil", styles.iconsMenuMovil);
          document.documentElement.style.setProperty("--overlay-video-content", styles.overlayColor);
        }

      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <GlobalDataContext.Provider value={{ rpdata }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/:id" element={<ServicesDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/our-videos" element={<OurVideos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-us-on" element={<FindUsOn />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
        <div id="recaptcha-container"></div>
      </GlobalDataContext.Provider>
    </div>
  );
};

export default App;