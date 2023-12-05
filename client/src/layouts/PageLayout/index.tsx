import React from "react";

import { Header, Footer } from "../../components";

interface LayoutProps {
  children: React.ReactElement[] | React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header hasActions={false} />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
