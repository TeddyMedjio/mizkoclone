import ContentBlog from "@/components/ContentBlog";
import NavLeft from "@/components/NavLeft";

const page = () => {
  return (
    <div className="flex">
      <NavLeft />
      <ContentBlog />
    </div>
  );
};

export default page;
