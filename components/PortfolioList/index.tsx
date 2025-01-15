import PortfolioItem, { PortfolioItemProps } from "../PortfolioItem";

export default async function PortfolioList() {
  const req = await fetch(`${process.env.URL}/api/projects/`);
  const projects = await req.json();

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
