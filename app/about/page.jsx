import ContentAbout from "@/components/ContentAbout";
import NavLeft from "@/components/NavLeft";

const page = () => {
  return (
    <div className="flex">
      <NavLeft />
      <ContentAbout />
    </div>
  );
};

export default page;
