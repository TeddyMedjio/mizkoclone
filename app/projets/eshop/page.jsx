import ContentShop from "../../../components/ContentShop";
import NavLeft from "../../../components/NavLeft";

export default function page() {
  return (
    <div className="flex">
      <NavLeft />
      <ContentShop />
    </div>
  );
}
