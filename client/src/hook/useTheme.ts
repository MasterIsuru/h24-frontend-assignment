import { useMemo, useCallback } from "react";

import { ThemeEnums } from "../utils/enum";
import { useProductSelectors } from "../redux/selectors";

const useTheme = () => {
  const { selectedTheme } = useProductSelectors();

  const isDarkTheme = useMemo(() => {
    return selectedTheme === ThemeEnums.DARK;
  }, [selectedTheme]);

  const getThemeClassName = useCallback(
    (className: string) => {
      if (selectedTheme === ThemeEnums.DARK) {
        return `${className}-dark`;
      }
      return className;
    },
    [selectedTheme]
  );

  return {
    isDarkTheme,
    getThemeClassName,
  };
};

export default useTheme;
