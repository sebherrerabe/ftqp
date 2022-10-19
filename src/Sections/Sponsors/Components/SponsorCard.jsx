import "./SponsorCard.css";

const SponsorCard = ({ img, link }) => {
  return (
    <a href={link ? link : undefined} target="_blank" rel="noopener noreferrer">
      {" "}
      <div className="hi" style={{ backgroundImage: `url(${img})` }}></div>
    </a>
  );
};

export default SponsorCard;
