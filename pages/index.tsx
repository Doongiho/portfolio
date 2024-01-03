import Seo from "../components/Seo";
import { ReactElement } from "react";

const Home: React.FC = (): ReactElement => {
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
