import { useState } from "react";
import _get from "lodash/get";

import { Category } from "../../utils/types";
import { getCategoriesQuery } from "../../utils/queries";
import { useCategoryActions } from "../../redux/actions";
import { CommonService } from "../../services";

const useProductList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { setProductCategoriesDispatch } = useCategoryActions();

  const getCategories = async (limit: number, offset: number) => {
    try {
      const res = await CommonService.fetchGraphqlData({
        query: getCategoriesQuery(limit, offset),
      });
      if (res?.data) {
        if (!categories.length) {
          setProductCategoriesDispatch(
            _get(res, "data.categories[0].childrenCategories.list", [])
          );
          return setCategories(res.data.categories);
        }
        setCategories([
          {
            ...categories[0],
            categoryArticles: {
              articles: [
                ..._get(categories, "[0].categoryArticles.articles", []),
                ..._get(
                  res,
                  "data.categories[0].categoryArticles.articles",
                  []
                ),
              ],
            },
          },
        ]);
      }
    } catch {
      setProductCategoriesDispatch([]);
    }
  };

  return {
    categories,
    getCategories,
  };
};

export default useProductList;
