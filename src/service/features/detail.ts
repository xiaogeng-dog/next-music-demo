import request from "..";
import type { IResultData } from "@/types/global";
import type { DetailProductInfo } from "@/types/product";

export const getDetailProductInfo = (id: number) =>
  request.get<IResultData<DetailProductInfo>>({
    url: "/special/getdetail?specialTopicId=" + id,
  });
