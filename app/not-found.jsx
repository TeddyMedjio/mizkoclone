import Link from "next/link";

const notfound = () => {
  return (
    <div className="full">
      <div className="flex h-screen flex-col items-center justify-center mb-8 lg:px-40 px-4">
        <div className="space-y-5">
          <h1 className="text-7xl font-light text-center text-[#525252]">
            404
          </h1>
          <p className="text-center font-light text-2xl tracking-wider">
            Oops.. The link you clicked may be broken or the <br /> page may
            have been removed. We&apos;re sorry
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium py-[10px] px-8 bg-white text-black rounded-sm mt-5"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default notfound;
