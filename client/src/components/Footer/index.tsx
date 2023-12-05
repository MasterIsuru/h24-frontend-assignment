import useTheme from "../../hook/useTheme";
import "./style.css";

const Footer = () => {
  const { getThemeClassName } = useTheme();

  return (
    <div className={getThemeClassName("footer")}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </div>
  );
};

export default Footer;
