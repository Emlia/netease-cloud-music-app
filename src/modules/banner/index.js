import { useLayoutEffect, useState } from "react";
import { getBanners } from "@service";
import Swiper from "@comp/swiper";

export default function Banner() {
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
      <Swiper style={{ width: "90vw", margin: "0 5vw" }}>
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
