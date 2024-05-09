import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineViewGrid, HiQuestionMarkCircle } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import ScrollProgressBar from "../ScrollProgressBar";
import NavMenu from "./NavMenu";
import { FiCalendar, FiPhoneCall } from "react-icons/fi";
import { ButtonContent } from "../boton/ButtonContent";
import { AiOutlineUnorderedList } from "react-icons/ai";

function Header_5() {
  const { rpdata } = useContext(GlobalDataContext);
  const [offCanvas, setOffCanvas] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  //Recorrer el array de los servicios
  const subitems = rpdata?.dbServices?.map((item) => {
    return {
      link: `/${item.name.replaceAll(" ", "-").toLowerCase()}`,
      name: item.name,
    };
  });

  //sub menu
  const subitemsGallery = rpdata?.landings?.map((itemsGallery) => {
    return {
      subname: itemsGallery.name,
      sublink: `/gallery/${itemsGallery.name.replace(" ", "-").toLowerCase()}`,
    };
  });
  // menu

  const Navigation = [
    {
      name: "Home",
      path: "/",
      icon: <HiOutlineViewGrid className="mx-auto text-[20px]" />,
    },
    {
      name: "About",
      path: "/about",
      icon: <HiQuestionMarkCircle className="mx-auto text-[20px]" />,
    },

    {
      name: "Services",
      path: "/services",
      icon: <BiCabinet className="mx-auto text-[20px]" />,
      child: rpdata?.autoGntLandingFromService,
      submenu: [...(subitems ? subitems : [])],
    },
    {
      name: `Gallery`,
      path: `/gallery`,
      icon: <BiCabinet className="mx-auto text-[20px]" />,
      child: rpdata?.customLinks,
      submenu: [...(subitemsGallery ? subitemsGallery : [])],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelopeOpenText className="mx-auto text-[20px]" />,
    },
  ];

  // agregar la pestaña de reviews al array de dbMenu

  const el = {
    name: `Reviews`,
    path: `/reviews`,
    icon: <BsBookmarkStar className="mx-auto text-[20px]" />,
    child: false,
  };

  rpdata?.simpleWidgets?.forEach((element) => {
    const num = Navigation.length - 1;
    if (element.val === "ReviewTab" && element.activo === true) {
      Navigation.splice(num, 0, el);
    }
  });
  //  fin de agregar pestaña de reviews

  return (
    <div className="relative z-50 w-full ">
      <header className="">
        <ScrollProgressBar />
        <div className="bg-2 p-2 text-white text-center md:block hidden ">
          <div className="md:w-4/5 mx-auto md:flex justify-center items-center">
            <ul className="flex justify-center space-x-4 pb-2 md:pb-0">
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.location[0]?.address}
              </li>
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.workdays[0]?.day}
              </li>
              <li className="md:text-[17px] text-[13px]">
                {rpdata?.dbPrincipal?.workHours[0]?.hour}
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-4/5 w-full mx-auto flex md:flex-row flex-col">
          <div className="md:w-[40%] flex">
            <div className="md:w-full w-[70%]">
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="LOGO"
                loading="lazy"
                className="md:w-[200px] w-[150px] md:h-[150px] h-[120px] object-cover relative  rounded-lg md:mx-0 mx-auto"
              />
            </div>

            <div className="flex self-center md:hidden w-[30%] justify-center">
              <AiOutlineUnorderedList
                className="text-[30px]"
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}
              />
            </div>
          </div>
          <div className="md:w-[140%] flex md:flex-row flex-col self-center justify-end">
            <div className="flex mx-4 ">
              {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                return (
                  <ul key={index}>
                    <li className="md:py-2 py-4">
                      <a
                        href={`tel:+1${item.phone}`}
                        className="md:mx-6 mx-2 flex items-center"
                      >
                        <FiPhoneCall className="md:text-[25px] text-[20px] mx-1" />
                        <span className="flex flex-col md:pt-[10px]">
                          <span className="md:pl-3 font-bold md:text-[18px] text-[14px]">
                            {item.phone}
                          </span>
                          <span className="md:pl-3 mt-[-5px]">
                            Phone
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                );
              })}
              <ul>
                <li className="md:py-2 py-4 flex items-center">
                  <FiCalendar className="md:text-[25px] text-[20px] mx-1" />
                  <span className="flex flex-col md:pt-[10px]">
                    <span className="md:pl-3 font-bold md:text-[18px] text-[14px]">
                      {rpdata?.dbPrincipal?.workHours?.[0].hour}
                    </span>
                    <span className="md:pl-3 mt-[-5px]">
                    {rpdata?.dbPrincipal?.workdays?.[0].day}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:block hidden">
              <ButtonContent />
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <nav className="w-4/5 mx-auto flex flex-wrap items-center justify-between shadow-2xl rounded-lg relative bg-white md:mb-[-20px]">
            <div className="text-center flex justify-center">
              <button
                className="btn01 bg-white text-red md:hidden block p-3"
                onClick={() => {
                  setOffCanvas(!offCanvas);
                }}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div
              className="w-full md:flex md:items-center justify-center md:bg-transparent bg-white hidden color-2"
              id="menu"
            >
              <NavMenu />
              <div className="ml-4">
                <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0].phone}`}>
                  <FiPhoneCall className="bg1 text-white p-4 text-[70px] rounded-r-lg" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <nav>
        {offCanvas ? (
          <nav className="side-slide z-10">
            <button
              className="text-white relative top-[-30px] left-[210px] bg-2 py-[6px] px-[15px] rounded-full"
              onClick={() => {
                setOffCanvas(false);
              }}
            >
              x
            </button>
            <div>
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="Company Logo"
                className="w-[80%] mb-8"
              />
            </div>
            <ul className="bg-navbar-movil">
              {Navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.child ? "" : item.path}
                      className="flex self-center items-center"
                      onClick={() => {
                        setSubMenu(!subMenu);
                      }}
                    >
                      {item.name}
                      {item.child ? <BsPlusLg className="ml-[140px]" /> : null}
                    </Link>
                    {item.child ? (
                      <ul className="rounded-sm w-[200px] text-white relative ml-2 off-canvas">
                        {item.submenu.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="py-2 px-4"
                              onClick={() => {
                                setOffCanvas(false);
                              }}
                            >
                              <Link to={item.link} exact>
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </nav>
    </div>
  );
}

export default Header_5;
