import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "林野摄影｜人像 · 跟拍 · 商业",
  description: "以自然光与真实情绪为核心的人像摄影作品集。",
};

export default function Home() {
  return <Portfolio />;
}
