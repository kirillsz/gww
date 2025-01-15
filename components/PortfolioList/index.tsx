import PortfolioItem, { PortfolioItemProps } from "../PortfolioItem";

async function getPortfolio() {
  const req = await fetch(`${process.env.URL}/api/projects/`);
  const res = await req.json();
  return res;
}

export default async function PortfolioList() {
  const projects = await getPortfolio();

  if (projects.length === 0)
    return (
      <h3 style={{ textAlign: "center" }}>
        Не удалось получить список проектов
      </h3>
    );
  return (
    <div className="portfolio-item-list">
      {projects.map((project: PortfolioItemProps) => (
        <PortfolioItem key={project.name} {...project} />
      ))}
    </div>
  );
}
