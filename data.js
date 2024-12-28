const navLinks = [
  { name: "Направления", path: "#areas" },
  { name: "Проекты", path: "#portfolio" },
];

const areas = {
  "WEB-разработка": [
    {
      name: "Вёрстка лендингов, интернет-магазинов",
      icon: "/areas/frontend.svg",
    },
    {
      name: "Backend разработка",
      icon: "/areas/backend.svg",
    },
  ],
  "Бизнесс-продвижение": [
    {
      name: "Инвайтинг людей в Telegram каналы",
      icon: "/areas/inviting.svg",
    },
    {
      name: "Автоматизация бизнесс процессов",
      icon: "/areas/automatization.svg",
    },
    {
      name: "Разработка Telegram ботов",
      icon: "/areas/bots.svg",
    },
  ],
};
const portfolio = [
  {
    name: "Интернет-магазин неоновых вывесок",
    tags: ["Интернет-магазин", "Backend", "UI/UX"],
    img: "/portfolio/neon.jpg",
  },
  {
    name: "Лендинг юридической компании «Олимп»",
    tags: ["Лендинг", "Backend", "UI/UX"],
    img: "/portfolio/olymp.jpg",
  },
  {
    name: "Лендинг с конфигуратором «Твои Часы»",
    tags: ["Лендинг", "Backend", "UI/UX"],
    img: "/portfolio/you-watches.jpg",
  },
];

export { navLinks, areas, portfolio };
