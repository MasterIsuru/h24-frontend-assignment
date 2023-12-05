import { useDispatch } from "react-redux";

import { ChildCategoryItem } from "../../utils/types";
import { setProductCategories } from "../slices/categorySlice";

const useCategoryActions = () => {
  const dispatch = useDispatch();

  const setProductCategoriesDispatch = (data: ChildCategoryItem[]) => {
    dispatch(setProductCategories(data));
  };

  return {
    setProductCategoriesDispatch,
  };
};

export { useCategoryActions };
