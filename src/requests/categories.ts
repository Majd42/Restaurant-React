import axiosClient from "../lib/axiosClient";
import { getCategoryItemsProps } from "../types";

export const getCategoriesRequest = async () => {
  try {
    const response = await axiosClient.get(
      "/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/categories/2da6c53a-522d-485d-b77c-2fafd601ff0c"
    );

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCategoryItemsRequest = async (props: getCategoryItemsProps) => {
  console.log({ props });
  try {
    const response = await axiosClient.get(
      `/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/2da6c53a-522d-485d-b77c-2fafd601ff0c?cat=${props.categoryId}`
    );

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
