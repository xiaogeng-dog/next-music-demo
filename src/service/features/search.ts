import { SearchData } from "@/types/search";
import request from "..";

interface SearchParams {
  limit: number;
  offset: number;
  key: string;
}

// 获取搜索数据
export const getProductSearchData = (data: SearchParams) =>
  request.post<SearchData>({
    url: "/store/api/product/search",
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
