import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChildCategoryItem } from "../../utils/types";

export interface CategorySliceState {
  productCategories: ChildCategoryItem[];
}

const initial: CategorySliceState = {
  productCategories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initial,
  reducers: {
    setProductCategories: (
      state,
      action: PayloadAction<ChildCategoryItem[]>
    ) => {
      state.productCategories = action.payload;
    },
  },
});

export const { setProductCategories } = categorySlice.actions;

export default categorySlice.reducer;
