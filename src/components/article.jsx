function Article({ title, abstract, photo, btn }) {
  return (
    <article className="hero-article">
      <div className="hero-article__content">
        <h3 className="hero-article__title">{title}</h3>
        <p className="hero-article__abstract">{abstract}</p>
        <button className="hero-article__btn">{btn}</button>
      </div>
      <img className="hero-article__img" src={photo} alt="" />
    </article>
  );
}

export default Article;
