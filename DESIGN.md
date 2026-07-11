# Design System

## Direction

实体场景是“清晨雾光中的透明胶片盒”：窗外蓝灰天光落在雾粉与淡紫色样片上，Kodak Ultramax 400 胶卷横穿其中。色彩策略为 full palette，白色与低饱和色场保持明亮，照片拥有最高视觉层级。

## Voice

透明、电影感、克制。不是婚纱影楼模板，也不是杂志式仿古排版。

## Color

- Base white: `oklch(0.985 0.004 285)`
- Ink: `oklch(0.22 0.025 285)`
- Mist rose: `oklch(0.82 0.085 348)`
- Lavender: `oklch(0.82 0.08 302)`
- Morning blue: `oklch(0.84 0.065 235)`
- Film yellow: `oklch(0.84 0.16 92)`
- Film edge: `oklch(0.19 0.018 82)`

## Typography

品牌字与英文展示使用 Sora/几何无衬线方向，中文正文使用系统黑体栈，叙事标题使用系统宋体栈形成胶片说明卡与人物故事之间的对照。标题最大不超过 6rem，字距不小于 -0.04em，正文行长控制在 68ch 内。

## Layout

最大内容宽度 1440px。首屏是不对称双栏：左侧品牌叙事，右侧三层悬浮照片。精选故事使用大幅图像与局部玻璃说明层；胶片段落通过长滚动驱动横向移动；图库使用不同画幅的非对称网格。移动端回落为单栏与可触摸横向胶片。

## Glass

磨砂只用于悬浮导航、首屏注释、设置面板、灯箱信息和少量项目说明。玻璃由半透明底色、背景模糊、顶部高光、内侧明暗与轻微饱和度共同构成。提供清透、柔雾、梦境三档强度。

## Motion

首屏照片以不同深度轻微视差；项目图片随视口缓慢缩放；胶片轨道由垂直滚动驱动；灯箱使用短促淡入与位移。所有动画使用 ease-out 曲线，并在 `prefers-reduced-motion` 下关闭或切换为即时状态。

## Maintenance

图片存放在 `public/photos/portrait`、`public/photos/follow`、`public/photos/commercial`。作品名称、分类、年份与说明集中在 `app/portfolio-data.ts`，添加照片只需放入对应文件夹并复制一条数据记录。
