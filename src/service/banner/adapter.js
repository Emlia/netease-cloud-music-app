import utils from "../../utils";
export function bannerAdapter(result) {
  console.log("++ adapter", result);
  if (utils.requestSuccess(result) && Array.isArray(result.banners)) {
    return result.banners.map((banner) => ({
      encodeId: banner.encodeId,
      imageUrl: banner.imageUrl,
      scm: banner.scm,
      titleColor: banner.titleColor,
      typeTitle: banner.typeTitle,
    }));
  }
  return null;
}
