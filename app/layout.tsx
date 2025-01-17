import type { Metadata } from "next";
import { defaultFont } from "@/styles/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuProvider from "@/components/providers/menuProvider";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Global Web World",
  description:
    "Студия разработки сайтов, лендингов, интернет-магазинов и телеграм ботов",
  keywords: ["Разработка сайтов", "Разработатка лендингов", "Разработка ботов"],
  icons: {
    icon: "/static/images/favicons/favicon-32x32.png",
    apple: "/static/images/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={defaultFont.variable}>
        <MenuProvider>
          <Header />
        </MenuProvider>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
