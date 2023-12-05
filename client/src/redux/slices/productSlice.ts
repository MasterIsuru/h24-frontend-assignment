import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Article } from "../../utils/types";

export interface ProductSliceState {
  selectedArticle: Article | null;
  selectedTheme: string | null;
}

const initial: ProductSliceState = {
  selectedArticle: null,
  selectedTheme: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initial,
  reducers: {
    setSelectedArticle: (state, action: PayloadAction<Article | null>) => {
      state.selectedArticle = action.payload;
    },
    setSelectedTheme: (state, action: PayloadAction<string | null>) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setSelectedArticle, setSelectedTheme } = productSlice.actions;

export default productSlice.reducer;
