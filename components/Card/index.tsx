import Style from "./styled";
import Image from "next/image";

interface Props {
  item: any;
}

const Card: React.FC<Props> = (Props) => {
  console.log(Props);
  let badgeText;
  if (Props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (Props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <Style>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <Image
          src={Props.item.coverImg}
          className="card--image"
          alt="card"
          width={176}
          height={235}
        />
        <div className="card--stats">
          <Image
            className="card--star"
            src="/star.png"
            alt="star"
            width={14}
            height={14}
          />
          <span>{Props.item.stats.rating}</span>
          <span className="gray">({Props.item.stats.reviewCount}) • </span>
          <span className="gray">{Props.item.location}</span>
        </div>
        <p className="card--title">{Props.item.title}</p>
        <p className="card--price">
          <span className="bold">From ${Props.item.price}</span> / person
        </p>
      </div>
    </Style>
  );
};
export default Card;
