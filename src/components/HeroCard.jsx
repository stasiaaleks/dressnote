function HeroCard({ type, photo }) {
  return (
    <div className="hero-card">
      <img className="hero-card__img" src={photo} />
      <span className="hero-card__text">{type}</span>
    </div>
  );
}

export default HeroCard;
