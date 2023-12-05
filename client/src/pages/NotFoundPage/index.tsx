import { MetaTag } from "../../components";
import NotFoundImage from "../../assets/images/404page.png";

const NotFoundPage = () => {
  return (
    <div>
      <MetaTag
        title={"Page Not Found"}
        name={"Page Not Found"}
        content={"Page Not Found"}
      />
      <div className="text-center">
        <img width={400} src={NotFoundImage} alt="home24logo" />
        <h3>Oops, hier geht es leider nicht weiter.</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
