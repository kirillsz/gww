import type { Metadata } from "next";
import { defaultFont } from "@/styles/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuProvider from "@/components/providers/menuProvider";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Global Web World",
  description: "Студия Gobal Web World - мы разработаем вам сайт!",
  keywords:
    "Разработка сайтов, разработатка лендингов, разработка телеграм бота",
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
