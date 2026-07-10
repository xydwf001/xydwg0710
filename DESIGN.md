# Design System

## Direction
清晨自然光照进摄影工作室：纯白墙面、半透明样片夹、低饱和玫瑰布景与一卷暖黄色 Kodak Ultramax 400。视觉策略为 committed，色彩约占页面三分之一，照片始终是最高层级。

## Color
- Background: `oklch(1 0 0)`
- Surface: `oklch(0.965 0.008 330)`
- Ink: `oklch(0.19 0.018 330)`
- Muted: `oklch(0.47 0.025 330)`
- Primary rose: `oklch(0.68 0.13 330)`
- Soft rose: `oklch(0.92 0.045 330)`
- Film yellow: `oklch(0.86 0.14 92)`
- Line: `oklch(0.89 0.012 330)`

## Typography
中文使用系统黑体栈，英文标题使用 Georgia 作为克制的相册式对照。大标题最大不超过 6rem，正文行长控制在 68ch 内。

## Layout
最大内容宽度 1440px。首屏采用不对称双栏，代表作覆盖大面积视野。章节之间以不同密度和方向切换节奏，移动端回落为单栏。图库使用 masonry 风格比例，但不用同尺寸卡片网格。

## Components
悬浮磨砂导航、语言与主题分段控制、胶片横向轨道、分类筛选、履历时间线、文章列表、联系条。圆角范围 4px 至 16px，磨砂只用于导航和悬浮控制层。

## Motion
首屏采用轻微裁切揭示；胶片轨道支持拖动、滚轮横向浏览与按钮控制；锚点平滑滚动。所有动画在 `prefers-reduced-motion` 下关闭。
