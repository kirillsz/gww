interface PortfolioTagProps {
  text: string;
}

const PortfolioTag = ({ text }: PortfolioTagProps) => {
  return <article className="portfolio-tag fs-300 fw-medium">{text}</article>;
};

export default PortfolioTag;
