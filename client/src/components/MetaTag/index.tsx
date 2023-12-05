import { Helmet } from "react-helmet";

import useTheme from "../../hook/useTheme";

interface Tags {
  title: string;
  name?: string;
  content?: string;
}

const MetaTag = ({ title, name, content }: Tags) => {
  const { isDarkTheme } = useTheme();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name ? name : ""} content={content ? content : ""} />
      <style>{`body { color: ${isDarkTheme ? "#fff" : "#000"}; background: ${
        isDarkTheme ? "#333" : "#eeeeef"
      }; }`}</style>
    </Helmet>
  );
};

export default MetaTag;
