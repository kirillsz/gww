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

export { navLinks, areas, portfolio, BASE_URL };
