import PortfolioItem, { PortfolioItemProps } from "../PortfolioItem";
export default async function PortfolioList() {
  let data = [];
  try {
    const response = await fetch(new URL("/api/projects/"));
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  if (data.length === 0)
    return (
      <h3 style={{ textAlign: "center" }}>
        Не удалось получить список проектов
      </h3>
    );
  return (
    <div className="portfolio-item-list">
      {data.map((item: PortfolioItemProps) => (
        <PortfolioItem key={item.name} {...item} />
      ))}
    </div>
  );
}
