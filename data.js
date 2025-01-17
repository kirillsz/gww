const navLinks = [
  { name: "Направления", path: "#areas" },
  { name: "Проекты", path: "#portfolio" },
];

const areas = {
  "WEB-разработка": [
    {
      name: "Вёрстка лендингов, интернет-магазинов",
      icon: "/static/logos/frontend.svg",
    },
    {
      name: "Backend разработка",
      icon: "/static/logos/backend.svg",
    },
  ],
  "Бизнесс-продвижение": [
    {
      name: "Инвайтинг людей в Telegram каналы",
      icon: "/static/logos/inviting.svg",
    },
    {
      name: "Автоматизация бизнесс процессов",
      icon: "/static/logos/automatization.svg",
    },
    {
      name: "Разработка Telegram ботов",
      icon: "/static/logos/bots.svg",
    },
  ],
};

export { navLinks, areas };
