import { useNavigate } from "react-router-dom";

import useTheme from "../../hook/useTheme";
import { LOADING_MESSAGE } from "../../utils/constants";
import { useCategorySelectors } from "../../redux/selectors";
import { ChildCategoryItem } from "../../utils/types";
import "./style.css";

const CategorySidebar = () => {
  const navigate = useNavigate();

  const { getThemeClassName } = useTheme();

  const { selectedProductCategories } = useCategorySelectors();

  const renderContent = () => {
    if (!selectedProductCategories?.length) {
      return <div className="no-data-section">{LOADING_MESSAGE}</div>;
    }
    return (
      <ul>
        {selectedProductCategories.map(
          ({ name, urlPath }: ChildCategoryItem) => {
            return (
              <li key={urlPath}>
                <div onClick={() => navigate(`/?category=${urlPath}`)}>
                  {name}
                </div>
              </li>
            );
          }
        )}
      </ul>
    );
  };

  return (
    <div className={getThemeClassName("sidebar")}>
      <h4>Kategorien</h4>
      {renderContent()}
    </div>
  );
};

export default CategorySidebar;
