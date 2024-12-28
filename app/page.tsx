import { areas, portfolio } from "@/data";
import ServiceCollection from "@/components/ServiceCollection";
import PortfolioItem from "@/components/PortfolioItem";

export default function Home() {
  return (
    <>
      <section className="container py-section--lg">
        <h1 className="fs-800 ls-025 mb-150">
          Мы создаём <span className="fw-bold">уникальные</span> решения для
          бизнеса
        </h1>
        <p className="fs-600 fw-semibold text-secondary">
          Ваши идеи - наше вдохновнение
        </p>
      </section>
      <section id="areas" className="service container py-section--lg">
        <header>
          <h2 className="fs-700 fw-semibold">Направления</h2>
        </header>
        {Object.keys(areas).map((areaName) => (
          <ServiceCollection
            key={areaName}
            heading={areaName}
            collection={areas[areaName as keyof typeof areas]}
          />
        ))}
      </section>
      <section id="portfolio" className="portfolio container py-section--lg">
        <header>
          <h2 className="mb-h2 fs-700 fw-semibold">Проекты</h2>
        </header>
        <div className="portfolio-item-list">
          {portfolio.map((portfolioItem) => (
            <PortfolioItem key={portfolioItem.name} content={portfolioItem} />
          ))}
        </div>
      </section>
    </>
  );
}
