export interface ServiceCardProps {
  name: string;
  icon: string;
}
const ServiceCard = ({ name, icon }: ServiceCardProps) => {
  return (
    <article className="collection-card">
      <img src={icon} alt={`Иконка ${name}`} />
      <p className="">{name}</p>
    </article>
  );
};

export default ServiceCard;
