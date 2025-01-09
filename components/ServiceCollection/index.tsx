import ServiceCard, { ServiceCardProps } from "../ServiceCard";

interface ServiceCollectionProps {
  heading: string;
  collection: ServiceCardProps[];
}
const ServiceCollection = ({ heading, collection }: ServiceCollectionProps) => {
  return (
    <section>
      <header>
        <h3 className="collection-heading  text-secondary fs-600 fw-semibold">
          {heading}
        </h3>
      </header>
      <div className="collection-card-list">
        {collection.map((card) => (
          <ServiceCard key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCollection;
