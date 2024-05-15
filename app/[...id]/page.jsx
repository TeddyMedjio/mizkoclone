import { RichTextcomponents } from "@/components/RichTextcomponents";
import { getPosts } from "@/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

const SingleBlogPage = async ({ params }) => {
  const postID = params.id[0];
  const posts = await getPosts();

  const singlePost = posts.find((post) => post._id === postID);

  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#222222] [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={100}
              height={100}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="60%" y={-1} className="overflow-visible fill-[#1a1a1a]">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <div className="flex space-y-8 pt-20 pb-10 flex-col lg:max-w-[804px] px-4 mx-auto ">
        <Link
          href="/blog"
          className=" flex px-3 py-2 bg-white text-black w-fit rounded-md font-medium text-sm"
        >
          <Image src="/arrow-left.svg" width={8} height={8} alt="arrow icon" />
          <p className="ml-2">Return</p>
        </Link>
        <div className="flex flex-col space-y-6 ">
          <p className="text-grey text-sm">
            {Date(singlePost.publishedAt).substring(0, 15)}
          </p>
          <h1 className="text-5xl font-semibold ">{singlePost.title}</h1>

          <Image
            src={singlePost.image}
            width={600}
            height={200}
            alt={singlePost.title}
            className="w-full rounded-lg"
          />
        </div>
        <div>
          {/* <p className="text-grey">
          By <span>{singlePost.author.name}</span>
        </p> */}
        </div>
        <div>
          <PortableText
            value={singlePost.content}
            components={RichTextcomponents}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
