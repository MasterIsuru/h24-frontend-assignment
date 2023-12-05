import { Link } from "react-router-dom";

import SearchInput from "../SearchInput";
import SunFillIcon from "../../assets/icons/SunFillIcon";
import MoonFillIcon from "../../assets/icons/MoonFillIcon";
import Home24Logo from "../../assets/images/home24logo.svg";
import Home24LightLogo from "../../assets/images/home24lightlogo.svg";
import { useProductActions } from "../../redux/actions";
import { ThemeEnums } from "../../utils/enum";
import useTheme from "../../hook/useTheme";
import "./style.css";

interface Props {
  hasActions: boolean;
}

const Header = ({ hasActions }: Props) => {
  const { isDarkTheme, getThemeClassName } = useTheme();

  const { setSelectedThemeDispatch } = useProductActions();

  const onChangeTheme = () => {
    setSelectedThemeDispatch(isDarkTheme ? ThemeEnums.LIGHT : ThemeEnums.DARK);
  };

  return (
    <div className={getThemeClassName("header")}>
      <div className="w-25">
        <Link to={"/"}>
          <img
            width={80}
            src={isDarkTheme ? Home24LightLogo : Home24Logo}
            alt="home24logo"
          />
        </Link>
      </div>
      {hasActions && (
        <>
          <div className="w-50 text-center d-block">
            <SearchInput />
          </div>
          <div className="w-25 text-right d-block">
            <button
              className={getThemeClassName("theme-btn")}
              onClick={onChangeTheme}
            >
              {isDarkTheme ? <SunFillIcon /> : <MoonFillIcon />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
