import { useLayoutEffect, useState } from "react";
import { getBanners } from "@service";
import Swiper from "../../components/swiper";

export default function Banner({ customClassName }) {
  const [banners, setBanner] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const banners = await getBanners();
      setBanner(banners);
      // console.log("++ banner", banners);
    };
    fetchData();
  }, []);

  if (banners.length) {
    return (
      <Swiper customClassName={customClassName}>
        {banners.map((banner) => (
          <img
            key={banner.encodeId}
            src={banner.imageUrl}
            alt={banner.typeTitle}
          ></img>
        ))}
      </Swiper>
    );
  }
  return null;
}
