import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      //   path="/logo-1.png"
      path={src}
      src="https://ik.imagekit.io/izoi/test/logo-1.png"
      className="w-8 h-8"
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
