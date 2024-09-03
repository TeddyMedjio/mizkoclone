import ContentDetails from "../../../components/ContentDetails";
import NavLeft from "../../../components/NavLeft";

export default function page() {
  return (
    <div className="flex">
      <NavLeft />
      <ContentDetails />
    </div>
  );
}
