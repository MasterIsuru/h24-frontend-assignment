import { useSelector } from "react-redux";

import { RootSliceType } from "../rootReducer";
import { CategorySliceState } from "../slices/categorySlice";

const useCategorySelectors = () => {
  const selectedProductCategories = useSelector<
    RootSliceType,
    CategorySliceState["productCategories"]
  >((state) => state.category.productCategories);

  return {
    selectedProductCategories,
  };
};

export { useCategorySelectors };
