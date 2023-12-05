import { useNavigate } from "react-router-dom";
import _get from "lodash/get";

import useTheme from "../../hook/useTheme";
import { Article } from "../../utils/types";
import { formatter } from "../../utils/helpers";
import { useProductActions } from "../../redux/actions";
import NoImageFound from "../../assets/images/noImageFound.jpg";
import "./style.css";

const ArticleCard = ({ article }: { article: Article }) => {
  const navigate = useNavigate();

  const { getThemeClassName } = useTheme();

  const { setSelectedArticleDispatch } = useProductActions();

  const onArticleClick = () => {
    navigate(`/product?name=${_get(article, "name")}`);
    setSelectedArticleDispatch(article);
  };

  return (
    <div
      className={getThemeClassName("article")}
      onClick={() => onArticleClick()}
    >
      <img
        alt="article"
        src={_get(article, "images[0].path", NoImageFound)}
        className="image-box"
      />
      <div className={getThemeClassName("amount")}>
        {formatter.format(_get(article, "prices.regular.value", 0) / 100)}
      </div>
      <p>{_get(article, "name", 0)}</p>
      <div className="center-container">
        <button className="button-add-to-cart">In den Warenkorb</button>
      </div>
    </div>
  );
};

export default ArticleCard;
