import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const notfound = () => {
  return (
    <div className="full">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center mb-8 lg:px-40 px-4">
        <div className="space-y-5">
          <h1 className="text-7xl font-semibold text-center text-gray-800">
            Uh Oh
          </h1>
          <p className="text-center text-2xl">
            Oops.. The link you clicked may be broken or the <br /> page may
            have been removed. We&apos;re sorry
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium py-[10px] px-4 bg-white text-black rounded-lg mt-5"
        >
          Back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default notfound;
