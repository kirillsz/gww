import PortfolioItem from "../PortfolioItem";
import { BASE_URL } from "@/data";
export default async function PortfolioList() {
  let data = [];
  try {
    const response = await fetch(`${BASE_URL}/api/projects/`);
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
      {data.map((item) => (
        <PortfolioItem key={item.name} {...item} />
      ))}
    </div>
  );
}
