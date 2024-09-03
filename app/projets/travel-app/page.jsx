import ContentTravel from "../../../components/ContentTravel";
import NavLeft from "../../../components/NavLeft";

export default function page() {
  return (
    <div className="flex">
      <NavLeft />
      <ContentTravel />
    </div>
  );
}
