import { useMemo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import _get from "lodash/get";

import { ArticleCard } from "../../components";
import useProductList from "../../containers/ProductListContainer/useProductList";
import { LOADING_MESSAGE, EOD_MESSAGE } from "../../utils/constants";
import "./style.css";

const limit = 50;

const ProductList = () => {
  const [offset, setOffset] = useState<number>(0);

  const { categories, getCategories } = useProductList();

  const articles = useMemo(() => {
    if (!categories?.length) {
      return null;
    }
    return categories.map((category) => {
      if (!_get(category, "categoryArticles.articles.length", 0)) {
        return null;
      }
      return _get(category, "categoryArticles.articles", []).map((article) => {
        return <ArticleCard article={article} />;
      });
    });
  }, [categories]);

  const fetchMoreData = () => {
    setOffset((value) => {
      const newValue = value + 1 * limit;
      getCategories(limit, newValue);
      return newValue;
    });
  };

  useEffect(() => {
    getCategories(limit, offset);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="content">
      {categories[0] && (
        <h3>
          {_get(categories, "[0].name")}
          <small>
            (
            {`${offset + limit} von ${_get(categories, "[0].articleCount", 0)}`}
            )
          </small>
        </h3>
      )}

      <InfiniteScroll
        dataLength={_get(categories, "[0].categoryArticles.articles.length", 0)}
        next={() => fetchMoreData()}
        hasMore={
          _get(categories, "[0].articleCount", 0) >
          _get(categories, "[0].categoryArticles.articles.length", 0)
        }
        loader={LOADING_MESSAGE}
        height="75.5vh"
        className="product-list-scroll"
        endMessage={
          _get(categories, "[0].articleCount", 0) ? (
            <p className="text-center">
              <b>{EOD_MESSAGE}</b>
            </p>
          ) : (
            LOADING_MESSAGE
          )
        }
      >
        <div className="articles">{articles}</div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
