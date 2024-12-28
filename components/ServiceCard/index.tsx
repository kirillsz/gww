const ServiceCard = ({ service }: object) => {
  const { name, icon } = service;
  return (
    <article className="collection-card">
      <img src={icon} alt="" />
      <p className="">{name}</p>
    </article>
  );
};

export default ServiceCard;
