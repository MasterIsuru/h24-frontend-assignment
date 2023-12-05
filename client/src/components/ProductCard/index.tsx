import { useEffect, useMemo } from "react";
import _get from "lodash/get";

import { formatter } from "../../utils/helpers";
import { useProductActions } from "../../redux/actions";
import NoImageFound from "../../assets/images/noImageFound.jpg";
import { useProductSelectors } from "../../redux/selectors/useProductSelectors";
import useTheme from "../../hook/useTheme";
import "./style.css";

const ProductCard = () => {
  const { setSelectedArticleDispatch } = useProductActions();

  const { selectedArticle, selectedTheme } = useProductSelectors();

  const { getThemeClassName } = useTheme();

  const cardDetails = useMemo(() => {
    if (!selectedArticle) {
      return (
        <div>
          <h3>Keine Daten gefunden</h3>
        </div>
      );
    }
    return (
      <>
        <div className="px-20">
          <h3>{_get(selectedArticle, "name")}</h3>
          <hr />
          <p>{_get(selectedArticle, "variantName")}</p>
          <div className={getThemeClassName("card-amount")}>
            {formatter.format(
              _get(selectedArticle, "prices.regular.value", 0) / 100
            )}
          </div>
        </div>
        <div className="center-container">
          <button className="button-add-to-cart">In den Warenkorb</button>
        </div>
      </>
    );
    // eslint-disable-next-line
  }, [selectedArticle, selectedTheme]);

  useEffect(() => {
    return () => {
      setSelectedArticleDispatch(null);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="product-card-container">
      <div className={getThemeClassName("product-image")}>
        <img
          alt=""
          src={_get(selectedArticle, "images[0].path", NoImageFound)}
          className="product-img"
        />
      </div>
      <div className={getThemeClassName("product-details")}>{cardDetails}</div>
    </div>
  );
};

export default ProductCard;
