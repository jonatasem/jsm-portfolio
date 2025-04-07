import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Mobile({ mobClick }) {
  const [mob, setMob] = useState(false);

  const mobShow = () => {
    setMob(!mob);
    mobClick();
  };

  return (
    <section className="container-mobile">
      <p onClick={mobShow}>{mob ? <FaXmark /> : <FaBars />}</p>
    </section>
  );
}
