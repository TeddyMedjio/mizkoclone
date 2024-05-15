import BlogCard from "./BlogCard";
import { getPosts } from "@/lib/client";

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className="px-0 md:px-5 flex items-center justify-center">
      <div className="pb-10 border-x border-[#222222] border-b  2xl:mx-auto">
        <div className="px-5 pt-10">
          <h2 className="text-[54px] md:text-[82px] font-semibold">My blog</h2>
          <p className=" text-[16px] md:text-[19px] text-grey">
            I provide new ideas and career advice from experts, from the wider
            design and programming community.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row gap-10 mt-10 px-5">
          {posts.map((post) => (
            <li key={post._id}>
              <BlogCard postData={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
