import ServiceCard from "../ServiceCard";

interface ServiceCollectionProps {
  heading: string;
  collection: object[];
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
        {collection.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCollection;
