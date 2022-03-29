import Style from "./styled";
import Image from "next/image";

const Navbar = () => {
  return (
    <Style>
      <nav>
        <Image
          src="/airbnb-logo.png"
          alt="logo"
          width={82}
          height={25}
          className="nav--logo"
        />
      </nav>
    </Style>
  );
};
export default Navbar;
