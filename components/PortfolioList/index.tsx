"use client";
import { useEffect, useState } from "react";
import PortfolioItem, { PortfolioItemProps } from "../PortfolioItem";
export default function PortfolioList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const req = await fetch(`https://globalwebworld.online/api/projects/`);
    const res = await req.json();
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0)
    return <h3 style={{ textAlign: "center" }}>Получаем список проектов...</h3>;
  return (
    <div className="portfolio-item-list">
      {data.map((item: PortfolioItemProps) => (
        <PortfolioItem key={item.name} {...item} />
      ))}
    </div>
  );
}
