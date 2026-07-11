# XYDWF 摄影作品集

在线访问：[https://xydwf001.github.io/xydwg0710/](https://xydwf001.github.io/xydwg0710/)

星约的双语个人摄影网站，以人像为主，跟拍与商业摄影为辅。网站包含精选项目故事、Kodak Ultramax 400 风格滚动胶片、分类图库、灯箱浏览、个人介绍、履历状态、摄影笔记、联系方式与简历状态。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

## 日常上传照片

1. 把照片放入对应文件夹：
   - `public/photos/portrait`：人像
   - `public/photos/follow`：跟拍
   - `public/photos/commercial`：商业
2. 打开 `app/portfolio-data.ts`。
3. 复制一条作品记录，修改图片地址、中文和英文名称、年份与说明。

不需要数据库，也不需要修改页面结构。

## 视觉设置

- 雾粉、淡紫、晨雾蓝三套明亮配色
- 清透、柔雾、梦境三档磨砂强度
- 中英文切换
- 设置自动保存在当前设备
- 支持键盘灯箱操作与系统减少动态效果偏好

## 构建

```bash
npm run build
npm run export:pages
```

`build` 用于完整网站版本，`export:pages` 会生成适合 GitHub Pages 子目录的纯静态版本。
