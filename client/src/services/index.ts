import { axiosClient } from "./AxiosClient";
import { GraphqlQuery } from "../utils/types";

const fetchGraphqlData = async (payload: GraphqlQuery) => {
  try {
    const response = await axiosClient.post("/graphql", payload);
    return response.data;
  } catch (e) {
    return null;
  }
};

const CommonService = {
  fetchGraphqlData,
};

export { CommonService };
