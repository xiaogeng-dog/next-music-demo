import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "normalize.css";
import "@/styles/globals.scss";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "云音乐商城 - 音乐购有趣",
  description:
    "云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料",
  keywords:
    "数码影音，beats耳机，击音耳机，漫步者，akg，潮牌，T恤，音乐生活，食品，服饰配件，礼品，礼物，礼盒，鲜花，ip周边，云音乐，商城，云贝",
  authors: {
    name: "小耿",
    url: "https://github.com/xiaogeng-dog/next-music-demo.git",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
