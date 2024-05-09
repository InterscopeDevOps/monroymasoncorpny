import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import ContentServices from "../components/Services/ContentServices";
import BaseLayout from "../components/global/BaseLayout";

function Services() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Services">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="Services"
          Subheader="Services"
          bgimg={`${rpdata?.stock?.[8]}`}
          urlVideo={"https://firebasestorage.googleapis.com/v0/b/imagenes-fc412.appspot.com/o/Electric.mp4?alt=media&token=1f5f7df4-e652-4708-b766-b7644ee1702c"}
        />
        <ContentServices/>
      </div>
    </BaseLayout>
  );
}

export default Services;
