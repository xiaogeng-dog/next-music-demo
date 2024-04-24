import type { IResultData } from "@/types/global";
import type { HomeInfo, SearchSuggest } from "@/types/home";
import type { AllProductInfo, ProductInfo } from "@/types/product";
import request from "..";

export const getSearchSuggest = () =>
  request.get<IResultData<SearchSuggest>>({
    url: "/searchSuggest/get",
  });

export const getHomeInfo = () =>
  request.get<IResultData<HomeInfo>>({
    url: "/home/info",
  });

export const getProductInfo = () =>
  request.get<IResultData<ProductInfo>>({
    url: "/hotproduct_v2/gets",
  });

export const getAllProductInfo = () =>
  request.get<IResultData<AllProductInfo>>({
    url: "/allProduct/gets",
  });
