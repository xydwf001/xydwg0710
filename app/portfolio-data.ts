export type Lang = "zh" | "en";
export type Category = "portrait" | "follow" | "commercial";

export type Photo = {
  id: string;
  src: string;
  category: Category;
  year: string;
  orientation: "portrait" | "landscape";
  title: Record<Lang, string>;
  alt: Record<Lang, string>;
  note: Record<Lang, string>;
};

export const photos: Photo[] = [
  {
    id: "window-breath",
    src: "./photos/portrait/RX2_01.jpg",
    category: "portrait",
    year: "2025",
    orientation: "portrait",
    title: { zh: "窗后的呼吸", en: "Breath Behind Glass" },
    alt: { zh: "木窗玻璃后侧身凝望的黑衣女性人像", en: "A woman in black seen in profile through an old wooden window" },
    note: { zh: "玻璃把光分成两层，也让人物与环境有了安静的距离。", en: "The glass divides the light and gives the portrait a quiet distance." },
  },
  {
    id: "rain-red",
    src: "./photos/portrait/RX2_02.jpg",
    category: "portrait",
    year: "2025",
    orientation: "portrait",
    title: { zh: "雨幕里的红", en: "Red in the Rain" },
    alt: { zh: "雨天街头撑蓝色透明伞、身穿红裙的女性人像", en: "A woman in a red dress holding a translucent blue umbrella on a rainy street" },
    note: { zh: "把潮湿街道、红裙和短暂的抬眼留在同一格画面里。", en: "Wet streets, a red dress and a brief upward glance held in one frame." },
  },
  {
    id: "held-flower",
    src: "./photos/portrait/RX2_03.jpg",
    category: "portrait",
    year: "2025",
    orientation: "landscape",
    title: { zh: "被捧住的花", en: "A Flower Held Close" },
    alt: { zh: "红裙人物用双手轻轻捧着一朵深红色花", en: "Hands gently holding a deep red flower beside a red dress" },
    note: { zh: "不看脸，也能从手势感受到人物的情绪。", en: "A gesture can carry a portrait even when the face is outside the frame." },
  },
  {
    id: "summer-cloud",
    src: "./photos/follow/RX2_04.jpg",
    category: "follow",
    year: "2024",
    orientation: "landscape",
    title: { zh: "盛夏云层", en: "Summer Cloud" },
    alt: { zh: "蓝天下层层堆叠的明亮积云", en: "Bright cumulus clouds gathering across a deep blue sky" },
    note: { zh: "现场跟拍里的空镜，让一段故事有呼吸和时间感。", en: "An atmosphere frame gives a documentary sequence room and a sense of time." },
  },
  {
    id: "green-edge",
    src: "./photos/follow/RX2_05.jpg",
    category: "follow",
    year: "2024",
    orientation: "landscape",
    title: { zh: "绿野尽头", en: "Edge of the Green" },
    alt: { zh: "草地、树林和一座白色小屋组成的郊外景象", en: "A rural view of grass, trees and a small white building" },
    note: { zh: "环境不是背景，它决定人物故事发生时的温度。", en: "The setting is not decoration; it sets the temperature of the story." },
  },
  {
    id: "beyond-ridge",
    src: "./photos/follow/RX2_06.jpg",
    category: "follow",
    year: "2024",
    orientation: "landscape",
    title: { zh: "群山之后", en: "Beyond the Ridge" },
    alt: { zh: "云层下延伸至远方的绿色山脉", en: "Green mountain ridges receding beneath a luminous cloud layer" },
    note: { zh: "广阔场景用来交代旅程，也为人物特写留下前后节奏。", en: "A wide frame locates the journey and gives close portraits a counter-rhythm." },
  },
  {
    id: "summer-mirror",
    src: "./photos/commercial/RX2_07.jpg",
    category: "commercial",
    year: "2025",
    orientation: "landscape",
    title: { zh: "镜中盛夏", en: "Summer in a Mirror" },
    alt: { zh: "街角凸面镜里正在举起相机的摄影者", en: "A photographer raising a camera inside a sunlit convex street mirror" },
    note: { zh: "用形状、反射与环境建立具有识别度的视觉画面。", en: "Shape, reflection and place come together as a recognisable visual frame." },
  },
  {
    id: "film-memory",
    src: "./photos/commercial/RX2_08.jpg",
    category: "commercial",
    year: "2025",
    orientation: "landscape",
    title: { zh: "胶片记忆", en: "Film Memory" },
    alt: { zh: "暖黄色灯光下桌面上的两台 Kodak 一次性胶片相机", en: "Two Kodak disposable film cameras on a table in warm light" },
    note: { zh: "产品画面保留材质与年代感，同时让品牌信息自然出现。", en: "A product frame that keeps the material and era visible without forcing the label." },
  },
  {
    id: "violet-sample",
    src: "./photos/commercial/RX2_09.jpg",
    category: "commercial",
    year: "2025",
    orientation: "landscape",
    title: { zh: "紫光样本", en: "Violet Study" },
    alt: { zh: "紫色光线照亮的银色手机背面与镜头", en: "A silver phone and camera lens washed in violet light" },
    note: { zh: "用单一色光梳理产品表面的弧度与金属质感。", en: "A single coloured light describes the product curve and metallic finish." },
  },
];

export const categoryLabels: Record<Category | "all", Record<Lang, string>> = {
  all: { zh: "全部", en: "All" },
  portrait: { zh: "人像", en: "Portrait" },
  follow: { zh: "跟拍", en: "Documentary" },
  commercial: { zh: "商业", en: "Commercial" },
};
