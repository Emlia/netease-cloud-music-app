import { bannerAdapter } from "./adapter";
import ApiService from "../../lib/api/index";
import fetch from "../../lib/fetch";
const apiService = new ApiService(fetch);

export default function getBanners(params) {
  const result = apiService.getData(
    {
      api: "/banner",
      params,
      adaptor: bannerAdapter,
    },
    {
      mock: true,
      mockData: require("./mock.json"),
    }
  );
  return result;
}
