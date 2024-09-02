import NavLeft from "../../components/NavLeft";
import ContentProjets from "../../components/ContentProjets";

export const metadata = {
  title: "Mes Realisations",
};

const page = () => {
  return (
    <div className="flex">
      <NavLeft />
      <ContentProjets />
    </div>
  );
};

export default page;
