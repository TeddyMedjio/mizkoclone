import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ postData }) => {
  return (
    <Link href={`/${postData._id}`}>
      <div className=" relative w-full lg:w-[300px] rounded-lg border border-[#222222] pb-5 lg:h-[410px] cursor-pointer group">
        <div className="w-full overflow-hidden">
          <Image
            src={postData.image}
            width={300}
            height={550}
            alt=""
            className="object-cover w-full lg:max-w-[300px] group-hover:scale-110 transition-transform duration-300 lg:grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="px-5">
          <div className="my-3">
            <p className="text-grey text-sm">
              <span className="text-gray-300">{postData.author.name}</span>/
              {postData.publishedAt.substring(0, 10)}
            </p>
          </div>
          <div>
            <h3 className=" text-2xl font-semibold mb-3">{postData.title}</h3>
            <p className=" text-grey line-clamp-3">{postData.body}</p>
            <div className="w-fit mt-2">
              {postData.categories.map((category) => (
                <p
                  className=" bg-[#222222] text-slate-200 py-2 px-4 text-xs rounded-lg absolute top-3 left-5"
                  key={category._id}
                >
                  {category.name}
                </p>
              ))}
              <p className="mt-5 text-sm underline">Read more</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
