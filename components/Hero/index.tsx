import Style from "./styled";
import Image from "next/image";

const Hero = () => {
  return (
    <Style>
      <section className="hero">
        <Image
          src="/photo-grid.png"
          alt="logo"
          width={396}
          height={232}
          className="hero--photo"
        />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </Style>
  );
};
export default Hero;
