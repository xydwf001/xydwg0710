import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xydwf001.github.io/xydwg0710/"),
  title: {
    default: "XYDWF｜星约摄影作品集",
    template: "%s｜XYDWF",
  },
  description: "星约的个人摄影作品集，以人像为主，跟拍与商业摄影为辅。常驻广州。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "XYDWF｜星约摄影作品集",
    description: "高级、梦幻、有故事感的人像摄影作品集。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
