import { callApi } from "../../configs";
import { Data } from "../models";

export const getDataTable = async (): Promise<Data[]> => {
  const options = {
    url: "",
    method: "get",
  };
  const [{ response, error }] = await Promise.all([callApi<Data[]>(options)]);

  return error || response;
};
