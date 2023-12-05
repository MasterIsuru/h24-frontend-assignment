import { Footer, Header } from "../../components";

interface LayoutProps {
  children: React.ReactElement[] | React.ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header hasActions />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
