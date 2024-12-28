import type { Metadata } from "next";
import { defaultFont } from "@/styles/fonts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuProvider from "@/components/providers/menuProvider";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Global Web Work",
  description:
    "Студия разработки сайтов Global Web Work - чётко, слаженно, доступно",
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
