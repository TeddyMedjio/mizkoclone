import ContentBlog from "@/components/ContentBlog";
import NavLeft from "@/components/NavLeft";

export const metadata = {
  title: "Blog",
};

const page = () => {
  return (
    <div className="flex">
      <NavLeft />
      <ContentBlog />
    </div>
  );
};

export default page;
