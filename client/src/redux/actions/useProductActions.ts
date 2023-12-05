import { useDispatch } from "react-redux";

import { Article } from "../../utils/types";
import { setSelectedArticle, setSelectedTheme } from "../slices/productSlice";

const useProductActions = () => {
  const dispatch = useDispatch();

  const setSelectedArticleDispatch = (data: Article | null) => {
    dispatch(setSelectedArticle(data));
  };

  const setSelectedThemeDispatch = (data: string | null) => {
    dispatch(setSelectedTheme(data));
  };

  return {
    setSelectedThemeDispatch,
    setSelectedArticleDispatch,
  };
};

export { useProductActions };
