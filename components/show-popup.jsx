import { useEffect, useState } from "react";
import MyModal from "./modal";

export default function ShowPopup() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const blocked = ["https://ux.medjio.me"];
    const referer = document.referrer;

    const isBlocked = blocked.some((site) => referer.startsWith(site));

    if (!isBlocked) {
      setShowPopup(true);
    }
  }, []);
  if (!showPopup) return null;
  return (
    <div>
      <MyModal />
    </div>
  );
}
