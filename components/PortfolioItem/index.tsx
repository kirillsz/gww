import PortfolioTag from "../PortfolioTag";

const PortfolioItem = ({ content }: object) => {
  const { name, tags, img } = content;
  return (
    <article className="portfolio-item">
      <div className="portfolio-item__img">
        <img src={img} alt="" />
      </div>
      <div className="portfolio-item__description">
        <h3 className="fs-600 fw-semibold">{name}</h3>
        <div className="portfolio-tag-list">
          {tags.map((tag) => (
            <PortfolioTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default PortfolioItem;
