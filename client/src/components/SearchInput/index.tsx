import SearchIcon from "../../assets/icons/SearchIcon";
import useTheme from "../../hook/useTheme";
import "./style.css";

const SearchInput = () => {
  const { getThemeClassName } = useTheme();
  return (
    <div className="search">
      <input
        type="text"
        className={getThemeClassName("search-term")}
        placeholder="Wonach suchst du?"
      />
      <button className="search-btn">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
