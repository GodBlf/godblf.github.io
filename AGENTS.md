# AGENTS.md

# 项目说明

Firefly 是一款基于 Astro 框架和 Fuwari 模板开发的现代化个人博客主题，面向技术创作者和内容创作者。主题强调静态站点性能、良好 SEO、响应式体验以及高可配置性。

- 静态站点生成：依托 Astro 实现快速加载与搜索引擎友好
- 现代化界面：简洁美观，支持主题与视觉风格定制
- 移动端友好：覆盖桌面与移动端的响应式布局
- 高度可配置：主要功能都可通过 `src/config/` 下配置文件调整

## AI 协作目标

让 AI 作为你的 Firefly 博客配置助手：

1. 当你指定某个配置时，优先使用对应 skill，仅修改该配置相关文件。
2. 变更前先读取目标配置，变更时保持最小 diff，不误改无关配置。
3. 如需求涉及联动（例如导航显示受页面开关影响），同时更新关联文件并说明原因。
4. 对文章撰写任务，AI 负责把 Markdown 放到正确目录并补齐可用 frontmatter。

## Skills

下面是本项目可直接使用的本地 skills（每个配置一个 skill）：

- `firefly-site-config`：站点基础设置（标题、SEO、主题色、页面开关、分页等）
  path: `.agents/skills/firefly-site-config/SKILL.md`
- `firefly-profile-config`：个人资料配置（头像、昵称、签名、社交链接）
  path: `.agents/skills/firefly-profile-config/SKILL.md`
- `firefly-comment-config`：评论系统配置（Twikoo/Waline/Giscus/Disqus/Artalk）
  path: `.agents/skills/firefly-comment-config/SKILL.md`
- `firefly-announcement-config`：网站公告配置
  path: `.agents/skills/firefly-announcement-config/SKILL.md`
- `firefly-license-config`：文章版权协议配置
  path: `.agents/skills/firefly-license-config/SKILL.md`
- `firefly-footer-config`：页脚配置（`footerConfig.ts` + `FooterConfig.html`）
  path: `.agents/skills/firefly-footer-config/SKILL.md`
- `firefly-background-wallpaper-config`：背景壁纸配置（Banner/Overlay/图片来源/波浪等）
  path: `.agents/skills/firefly-background-wallpaper-config/SKILL.md`
- `firefly-expressive-code-config`：代码高亮配置
  path: `.agents/skills/firefly-expressive-code-config/SKILL.md`
- `firefly-sakura-config`：樱花特效配置
  path: `.agents/skills/firefly-sakura-config/SKILL.md`
- `firefly-font-config`：字体配置
  path: `.agents/skills/firefly-font-config/SKILL.md`
- `firefly-cover-image-config`：随机封面图配置
  path: `.agents/skills/firefly-cover-image-config/SKILL.md`
- `firefly-sidebar-config`：侧边栏布局与组件配置
  path: `.agents/skills/firefly-sidebar-config/SKILL.md`
- `firefly-navbar-config`：导航栏配置
  path: `.agents/skills/firefly-navbar-config/SKILL.md`
- `firefly-music-config`：音乐播放器配置
  path: `.agents/skills/firefly-music-config/SKILL.md`
- `firefly-pio-config`：看板娘配置（Spine / Live2D）
  path: `.agents/skills/firefly-pio-config/SKILL.md`
- `firefly-ad-config`：广告与推广配置
  path: `.agents/skills/firefly-ad-config/SKILL.md`
- `firefly-friends-config`：友链配置
  path: `.agents/skills/firefly-friends-config/SKILL.md`
- `firefly-guestbook-config`：留言板配置（页面开关 + 内容 + 评论前置）
  path: `.agents/skills/firefly-guestbook-config/SKILL.md`
- `firefly-sponsor-config`：赞助配置
  path: `.agents/skills/firefly-sponsor-config/SKILL.md`
- `firefly-bangumi-config`：番剧页面配置（Bangumi 用户 ID + 页面开关）
  path: `.agents/skills/firefly-bangumi-config/SKILL.md`

文章撰写 skill：

- `firefly-post-writing`：将 Markdown 文章整理并放入正确位置（`src/content/posts/`），同时补齐 frontmatter
  path: `.agents/skills/firefly-post-writing/SKILL.md`

## 推荐调用方式

- 修改站点信息：`$firefly-site-config 把站点标题改成 xxx，并把每页文章数改成 12`
- 修改评论系统：`$firefly-comment-config 切换到 waline，并配置 serverURL`
- 修改留言板：`$firefly-guestbook-config 开启留言板并更新页面文案`
- 发布文章：`$firefly-post-writing 把这篇 markdown 作为新文章发布`
