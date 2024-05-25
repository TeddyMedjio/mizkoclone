import ContentAbout from "../../components/ContentAbout";
import NavLeft from "../../components/NavLeft";

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="flex">
      <NavLeft />
      <ContentAbout />
    </div>
  );
};

export default page;
