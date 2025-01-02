import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  // if (!src || src.trim() === "") {
  //   // console.warn("⚠️ [Image Component] src가 비어있습니다.");
  //   return null; // 아무것도 렌더링하지 않음
  // }

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
