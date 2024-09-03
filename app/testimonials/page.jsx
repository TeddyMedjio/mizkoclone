import ContentTestimonials from "../../components/ContentTestimonials";
import NavLeft from "../../components/NavLeft";

export const metadata = {
  title: "Testimonials",
};

export default function page() {
  return (
    <div className="flex">
      <NavLeft />
      <ContentTestimonials />
    </div>
  );
}
