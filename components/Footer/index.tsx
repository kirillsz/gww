import Telegram from "../Icons/Telegram";

const Footer = () => {
  return (
    <footer className="footer container py-section--md">
      <a
        className="new-project flex align-center"
        href="https://t.me/andreySTA"
      >
        <Telegram color="white" />
        <span className="fs-400 fw-medium">Новый проект</span>
      </a>
    </footer>
  );
};

export default Footer;
