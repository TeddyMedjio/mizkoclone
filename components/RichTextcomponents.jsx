import { Underline } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const RichTextcomponents = {
  //   types: {
  //     image: ({ value }) => {
  //       return (
  //         <div className="z-50 absolute w-full h-10">
  //           <Image
  //             src={urlFor(value).url()}
  //             width={value.width}
  //             height={value.height}
  //             alt="Blog Post Image"
  //             fill
  //           />
  //         </div>
  //       );
  //     },
  //   },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  block: {
    h3: ({ children }) => (
      <h3 className="text-4xl font-semibold py-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-3xl font-semibold py-5">{children}</h4>
    ),
    normal: ({ children }) => (
      <normal className="text-base text-grey">{children}</normal>
    ),
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-slate-700 border-l-4 pl-5 my-5">
      {children}
    </blockquote>
  ),
  marks: ({ children, value }) => {
    const rel = !value.href.startsWith("/") ? "noreferrer noopener" : Underline;
    return (
      <Link
        href={value.href}
        rel={rel}
        className="underline decoration-blue-600 hover:underline"
      >
        {children}
      </Link>
    );
  },
};
