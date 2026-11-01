# 方块纪元工作室 · EpochCraft Studio

在线站点：<https://www.epochcraft.cn>
备用入口：<https://epochcraftmc.github.io>（301 跳转到主域名）
仓库地址：<https://github.com/EpochcraftMC/EpochcraftMC.github.io>

> **来源**：本仓库是 [CubeX 研究院](https://github.com/CubeX-MC)（CubeX-MC）站点仓库 `CubeX-MC.github.io` 的分支。从上游分支出来后，内容、设计系统与域名均由本分支独立维护，上游仅作为历史起点。

方块纪元工作室（EpochCraft）成立于 2025 年 2 月 11 日，是一家《我的世界》网易版工作室，在中国版组件中心上架地图、皮肤、组件包、材质光影与联机大厅。本站是这个工作室的公开档案：收录全部组件的上架状态、社区成员与工作室沿革。

## 技术栈

| 项目 | 说明 |
| :--- | :--- |
| [Astro](https://astro.build) 6 | 静态站点生成，路由即 `src/pages/` 下的文件名 |
| [Tailwind CSS](https://tailwindcss.com) 4 | 通过 `@tailwindcss/vite` 插件接入 |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | 预留给图文内容页 |
| TypeScript | `src/data/*.ts` 中的内容数据带完整类型 |
| Node.js ≥ 22.12.0 | 见 `package.json` 的 `engines` |

字体（Silkscreen / JetBrains Mono / Inter / Noto Sans SC）由 Google Fonts 提供，构建时不打包。

## 页面

| 路由 | 入口文件 | 内容 |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | 首页标题版：品牌、成立日期、组件与成员计数、目录索引 |
| `/components` | `src/pages/components.astro` | 组件档案：按形态分组，标注已上架 / 双端同步 / 审核中 |
| `/members` | `src/pages/members.astro` | 社区网络：核心成员与贡献者 |
| `/about` | `src/pages/about.astro` | 我们的故事：工作室沿革时间线 |

## 目录结构

```text
/
├── CNAME                       自定义域名，内容为 www.epochcraft.cn
├── astro.config.mjs            站点地址、Tailwind 与 MDX 集成
├── src/
│   ├── components/             页面区块：首页 / 组件 / 社区 / 故事，以及天光装饰
│   ├── data/                   内容数据源（见下节）
│   ├── layouts/                InstituteLayout.astro：页头、导航、页脚与全站样式入口
│   ├── pages/                  路由入口
│   └── styles/institute.css    设计系统：配色变量、字体、栅格与版式
├── public/imgs/                Logo、组件封面等静态资源
└── .github/workflows/deploy.yml  GitHub Pages 构建与部署
```

## 更新内容

内容不写在组件里，统一放在 `src/data/`，改数据即可更新页面：

| 文件 | 维护什么 |
| :--- | :--- |
| `src/data/components.ts` | 组件清单与形态定义，`componentCounts` 由数组自动汇总 |
| `src/data/members.ts` | 社区成员分组与个人链接 |
| `src/data/timeline.ts` | 沿革节点，按时间正序 |
| `src/data/studio.ts` | 品牌元信息：名称、成立日期、GitHub 组织、站点地址 |

新增组件时，把新条目放在 `components` 数组最前（页面按提交时间倒序展示），并按实际情况填 `status`：`listed` 已上架、`listed-dual` 已上架且双端同步、`reviewing` 审核中。首页的组件计数会随之更新。

## 本地开发

```sh
npm install
npm run dev      # 本地开发服务器 http://localhost:4321
npm run build    # 构建静态站点到 dist/
npm run preview  # 预览构建结果
```

## 部署

推送到 `main` 分支即触发 `.github/workflows/deploy.yml`：安装依赖 → `npm run build` → 把 `dist/` 发布到 GitHub Pages。

仓库的 Pages 源必须设为 **GitHub Actions**（Settings → Pages → Source: GitHub Actions）。若设成「Deploy from a branch」，GitHub 会用 Jekyll 直接构建 `src/` 里的 `.astro` 文件并报错失败。

自定义域名 `www.epochcraft.cn` 记录在仓库根目录的 `CNAME`，并在 Pages 设置中启用；DNS 侧把 `www` 以 CNAME 记录指向 `epochcraftmc.github.io`。

域名生效后两条入口都能进：`https://www.epochcraft.cn` 直接访问，`https://epochcraftmc.github.io` 由 GitHub 301 跳到主域名。页面的 `rel="canonical"` 固定指向主域名，避免同一份内容被重复收录。

改动 Pages 设置时注意两点：用 API 覆盖设置（PUT `/pages`）必须同时带上 `cname`，否则自定义域名会被清空、站点退化成 `epochcraftmc.github.io` 且主域名 404；`https_enforced` 要等证书签发完成后再开。

## 版权

站内作品、封面与 Logo 的版权归方块纪元工作室及对应作者所有。
