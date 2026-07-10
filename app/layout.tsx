import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "林野摄影", template: "%s｜林野摄影" },
  description: "以自然光、真实情绪与细腻观察为核心的人像摄影作品集。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "林野摄影｜人像 · 跟拍 · 商业", description: "看见一个人，再按下快门。", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
