import PortfolioItem from "../PortfolioItem";
import { BASE_URL } from "@/data";
export default async function PortfolioList() {
  const data = await fetch(`${BASE_URL}/api/projects/`);
  const portfolio = await data.json();
  console.log(portfolio);
  return (
    <div className="portfolio-item-list">
      {portfolio.map((item) => (
        <PortfolioItem key={item.name} {...item} />
      ))}
    </div>
  );
}
