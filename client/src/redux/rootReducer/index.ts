import { combineReducers } from "redux";

import product, { ProductSliceState } from "../slices/productSlice";
import category, { CategorySliceState } from "../slices/categorySlice";

export interface RootSliceType {
  product: ProductSliceState;
  category: CategorySliceState;
}

const appReducer = combineReducers<RootSliceType>({
  product,
  category,
});

export default appReducer;
