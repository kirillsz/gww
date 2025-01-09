import PortfolioTag from "../PortfolioTag";

export interface PortfolioItemProps {
  name: string;
  tags: string | string[];
  img: string;
  url?: string;
}

const PortfolioItem = ({ name, tags, img, url }: PortfolioItemProps) => {
  const renderTag = () => {
    if (typeof tags === "string") return <PortfolioTag text={tags} />;
    return tags.map((tag) => <PortfolioTag key={tag} text={tag} />);
  };
  return (
    <article className="portfolio-item">
      <div className="portfolio-item__img">
        <img
          src={`${process.env.BACKEND_URL}${img}`}
          alt={`Иллюстрация ${name}`}
        />
        {url !== "/" && (
          <a className="portfolio-item__link" href={url}>
            <span className="sr-only">Ссылка на {name}</span>
          </a>
        )}
      </div>
      <div className="portfolio-item__description">
        <h3 className="fs-600 fw-semibold">{name}</h3>
        <div className="portfolio-tag-list">{renderTag()}</div>
      </div>
    </article>
  );
};

export default PortfolioItem;
