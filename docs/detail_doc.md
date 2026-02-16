# 介绍
Firefly 是一款基于 Astro 框架和 Fuwari 模板开发的清新美观且现代化个人博客主题，专为技术爱好者和内容创作者设计。该主题融合了现代 Web 技术栈，提供了丰富的功能模块和高度可定制的界面，让您能够轻松打造出专业且美观的个人博客网站。

⚡ 静态站点生成: 基于Astro的超快加载速度和SEO优化
🎨 现代化设计: 简洁美观的界面，支持自定义主题色
📱 移动友好: 完美的响应式体验，移动端专项优化
🔧 高度可配置: 大部分模块均可通过配置文件自定义


# 安装/使用
Firefly 项目入门指南

环境依赖
node,git等依赖已经安装完毕

1. 配置博客
在启动项目之前，您需要根据自己的需求进行配置：

编辑 src/config/ 目录下的配置文件自定义博客设置
4. 启动开发服务器
运行以下命令启动开发服务器：


pnpm dev
启动成功后，您可以在浏览器中访问 http://localhost:4321 查看您的博客。

5. 打包网站
运行以下命令将网站打包成静态文件，生成到 dist 目录中：


pnpm build
生成的 dist 目录可以部署到您自己的服务器上。

# 部署方式

部署你的 Astro 站点
点击查看Astro官方部署指南

将博客部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。

指令
框架预设： Astro

根目录： ./

输出目录： dist

构建命令： pnpm run build

安装命令： pnpm install

# 站点基本设置
📝 这是什么？
这是 Firefly 主题的核心控制台。它决定了你网站的"门面"——包括名字、描述、主题色、功能开关等。 如果你是第一次安装，请务必优先修改这里。

📂 文件位置

src/config/siteConfig.ts
🛠️ 配置详解
1. 基础信息 (Basic Info)
这些是网站最基本的身份信息，SEO (搜索引擎优化) 也会用到。


export const siteConfig: SiteConfig = {
  // 网站标题：显示在浏览器标签页和导航栏左侧
  title: "Firefly", 
  
  // 网站副标题：通常显示在标题旁边
  subtitle: "Demo site", 
  
  // 网站地址：发布上线时请务必修改为你的实际域名！
  site_url: "https://firefly.cuteleaf.cn", 
  
  // 网站描述：简单介绍下你的博客，有助于 SEO
  description: "Firefly 是一款...", 
  
  // 关键词：方便别人搜到你的博客
  keywords: ["Firefly", "Astro", "博客"],
  
  // 网站语言：中文请填 "zh_CN"，英文填 "en"
  lang: "zh_CN", 
  
  // 站点建立日期：用于计算网站运行天数 (YYYY-MM-DD)
  siteStartDate: "2025-01-01", 
};
2. 主题外观 (Appearance)
打造你独一无二的博客风格。

主题色与 Logo

themeColor: {
  // 主题色色相值 (0-360)
  // 0=红, 165=青, 240=蓝。你可以试着填不同的数字看看效果！
  hue: 165, 
  
  // 是否固定颜色？
  // false = 允许访客在页面上自己选颜色 (推荐)
  // true = 强制使用你设置的颜色，访客无法更改
  fixed: false, 
  
  // 默认模式
  // "light" = 亮色, "dark" = 暗色, "system" = 跟随系统设置
  defaultMode: "system", 
},

// 网站图标 (Favicon) 设置
favicon: [
  {
    src: "/assets/images/favicon.ico", // 图标路径
    theme: "light", // (可选) 适用主题：'light' | 'dark'
    sizes: "32x32", // (可选) 图标尺寸
  }
],

// 导航栏配置
navbar: {
  // 导航栏 Logo 设置
  logo: {
    // 方式一：使用图片 (推荐)
    type: "image",
    value: "/assets/images/firefly.png", // 图片路径
    alt: "🍀", // 图片描述
    
    // 方式二：使用图标
    // type: "icon",
    // value: "material-symbols:home-pin-outline",
  },

  // 导航栏标题：如果不填，默认使用 siteConfig.title
  title: "Firefly", 

  // 导航栏是否全宽：true = 占满屏幕宽度，false = 限制在内容区域宽度
  widthFull: false,

  // 导航栏图标和标题是否跟随主题色
  followTheme: false,
},
3. 其他配置
关于背景壁纸的配置，请查看 背景壁纸配置。

4. 功能与页面 (Features & Pages)
控制网站的各种功能模块开关。


// Bangumi 追番组件配置
bangumi: {
  userId: "1163581", // 你的 Bangumi 用户 ID
},

// 是否在文章底部显示"上次编辑时间"
showLastModified: true,

// 是否生成 OpenGraph 图片 (分享链接时的预览图)
// 注意：开启后构建时间会变长，建议本地调试时关闭 (false)
generateOgImages: false,

// 独立页面开关
// 设为 false 后，对应的路由会返回 404
pages: {
  sponsor: true,   // 赞助页面
  guestbook: true, // 留言板
  bangumi: true,   // 追番列表
},
5. 文章列表布局 (Post List Layout)
自定义首页和归档页的文章展示方式。


postListLayout: {
  // 默认布局模式
  // "list" = 列表模式 (单列，经典博客风格)
  // "grid" = 网格模式 (双列，卡片风格)
  defaultMode: "list",
  
  // 是否允许用户切换布局
  allowSwitch: true,

  // 网格模式的高级配置
  grid: {
    // 瀑布流布局：开启后卡片高度自适应，适合封面图高度不一的情况
    masonry: true,
  },
},

// 分页设置
pagination: {
  postsPerPage: 8, // 每页显示多少篇文章
},

# 个人资料设置
📝 这是什么？
这个配置控制侧边栏或"关于我"页面中显示的个人信息卡片。这是让访客认识你的第一步！

📂 文件位置

src/config/profileConfig.ts
🛠️ 配置详解

export const profileConfig: ProfileConfig = {
  // 头像路径
  // 建议使用正方形图片 (200x200以上)，放在 public/assets/images/ 下
  avatar: "/assets/images/avatar.webp", 
  
  // 你的名字或昵称
  name: "Firefly", 
  
  // 个人简介 / 签名
  // 支持简单的 HTML 标签，比如 <br> 换行
  bio: "Hello, I'm Firefly.",

  // 社交链接
  // 显示在头像下方的图标栏
  links: [ 
    {
      name: "Bilibili", // 链接名称
      icon: "fa6-brands:bilibili", // 图标代码 (见下方说明)
      url: "https://space.bilibili.com/38932988", // 跳转链接
      showName: false, // 是否显示文字？false=只显示图标 (推荐)
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/CuteLeaf",
      showName: false,
    },
    {
      name: "Email",
      icon: "fa6-solid:envelope",
      url: "mailto:xiaye@msn.com", // 邮件链接格式
      showName: false,
    },
  ],
};
💡 如何找到图标？
Firefly 内置了强大的图标支持 (基于 Iconify)。

打开 Icones 网站。
搜索你想要的图标，例如 "twitter", "steam", "rss"。
点击你喜欢的图标，复制它的 名称 (例如 mdi:twitter)。
将名称填入配置文件的 icon 字段即可。
常用图标集推荐：

fa6-brands: 品牌图标 (GitHub, Twitter, Bilibili 等)
fa6-solid: 实心通用图标 (Email, Home, User 等)
material-symbols: Google Material Design 图标

# 评论系统设置
这是什么？
让访客可以在你的文章下留言。Firefly 支持多种评论系统，你可以选择一个自己喜欢的。

文件在哪里？

src/config/commentConfig.ts
如何修改？
首先，你需要选择一个评论系统。目前最推荐使用的是 Waline 或 Giscus。

1. 选择评论系统
找到 type 字段，填入你想要使用的系统名称：


export const commentConfig: CommentConfig = {
  // 评论系统类型: none, twikoo, waline, giscus, disqus, artalk
  // 默认为 none，即不启用评论系统
  type: "none",

  // ... 其他配置
}
2. 填写对应配置
根据你选择的系统，填写下面的详细信息。只需要填写你选用的那个系统的配置，其他的可以不管。

Twikoo 配置
Twikoo 是一个简洁、安全、免费的静态网站评论系统。


  twikoo: {
    // 你的 Twikoo 环境 ID (例如: https://twikoo.vercel.app)
    envId: "https://twikoo.vercel.app",
    // 评论系统语言
    lang: "zh-CN",
    // 是否开启文章访问量统计功能
    visitorCount: true,
  },
Waline 配置 (推荐)
Waline 是一款简洁、安全的评论系统。


  waline: {
    // 你的 Waline 服务端地址
    serverURL: "https://waline.vercel.app",
    // 评论系统语言
    lang: "zh-CN",
    // 评论登录模式
    // 'enable'  - 默认，允许访客匿名评论和用第三方 OAuth 登录评论
    // 'force'   - 强制必须登录后才能评论
    // 'disable' - 禁止所有登录，仅允许匿名评论
    login: "enable",
    // 是否开启文章访问量统计功能
    visitorCount: true,
  },
Artalk 配置
Artalk 是一款简洁的自托管评论系统。


  artalk: {
    // 后端程序 API 地址
    server: "https://artalk.example.com/",
    // 评论系统语言
    locale: "zh-CN",
    // 是否开启文章访问量统计功能
    visitorCount: true,
  },
Giscus 配置 (GitHub 风格)
Giscus 利用 GitHub Discussions 实现评论功能。


  giscus: {
    // 你的 GitHub 仓库 (格式: 用户名/仓库名)
    repo: "CuteLeaf/Firefly",
    // 仓库 ID (可在 Giscus 官网获取)
    repoId: "R_kgD2gfdFGd",
    // Discussion 分类名
    category: "General",
    // 分类 ID
    categoryId: "DIC_kwDOKy9HOc4CegmW",
    // 页面与 Discussion 的映射方式 (推荐 'title')
    mapping: "title",
    // 是否启用严格模式 (0: 关闭, 1: 开启)
    strict: "0",
    // 是否启用反应功能 (0: 关闭, 1: 开启)
    reactionsEnabled: "1",
    // 是否发送元数据 (0: 关闭, 1: 开启)
    emitMetadata: "1",
    // 评论框位置 ('top' 或 'bottom')
    inputPosition: "top",
    // 评论系统语言
    lang: "zh-CN",
    // 加载方式 ('lazy' 或 'eager')
    loading: "lazy",
  },
Disqus 配置
Disqus 是一个老牌的评论托管服务。


  disqus: {
    // 你的 Disqus shortname
    shortname: "firefly",
  },
常见问题
Q: 我不想开启评论怎么办？ A: 把 type 设置为 'none' 即可。

Q: visitorCount 是什么？ A: 这是一个开关，如果设置为 true，并且你使用的评论系统支持（如 Waline, Twikoo, Artalk），它会在文章页面显示文章的阅读次数。

# 网站公告设置
这是什么？
这是一个显示在网站顶部的横幅消息。你可以用它来发布重要通知、欢迎语，或者分享一个新的链接。

文件在哪里？

src/config/announcementConfig.ts
如何修改？

export const announcementConfig: AnnouncementConfig = {
  // 公告标题
  title: "公告", 
  
  // 公告内容
  content: "欢迎来到我的博客！这是一则示例公告。", 
  
  // 是否允许用户关闭公告？
  // true = 用户点击关闭后，本次会话将不再显示
  closable: true, 
  
  // 公告中的链接配置
  link: {
    // 是否启用链接？
    enable: true, 
    // 链接显示的文本
    text: "了解更多", 
    // 链接跳转的 URL
    url: "/about/", 
    // 是否为外部链接？
    // false = 站内跳转 (SPA 路由)
    // true = 打开新标签页
    external: false, 
  },
};
小贴士
如果你想暂时关闭公告，最简单的方法是把内容清空，或者在代码里注释掉相关逻辑。
link.external 设置为 true 时，点击链接会在新窗口打开，适合跳转到其他网站。


# 版权协议设置
约 203 字
小于 1 分钟

2025-01-27

这是什么？
显示在每篇文章底部的版权声明。告诉读者他们可以如何转载或使用你的文章。

文件在哪里？

src/config/licenseConfig.ts
如何修改？

export const licenseConfig: LicenseConfig = {
  // 是否启用版权声明？
  // true = 显示，false = 隐藏
  enable: true,
  
  // 协议名称
  // 例如：CC BY-NC-SA 4.0
  name: "CC BY-NC-SA 4.0",
  
  // 协议详细内容的 URL 链接
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
常用协议推荐
CC BY-NC-SA 4.0 (推荐): 别人可以转载，但必须署名、不能商用、且转载后的文章也要用同样的协议。
CC BY 4.0: 只要署名，怎么用都行（包括商用）。
Copyright © All Rights Reserved: 保留所有权利，未经允许严禁转载。


# 页脚自定义
约 269 字
小于 1 分钟

2025-10-11

这是什么？
你可以在网站的最底部添加一些自定义的内容。比如：

网站备案号 (ICP)
网站统计代码 (Google Analytics, 百度统计)
额外的版权声明
文件在哪里？
这里涉及两个文件：

开关设置: src/config/footerConfig.ts
内容文件: src/config/FooterConfig.html
如何修改？
第一步：开启功能
打开 src/config/footerConfig.ts，确保 enable 是 true。


export const footerConfig: FooterConfig = {
  // 是否启用 Footer HTML 注入功能
  enable: false, 
};
第二步：添加内容
打开 src/config/FooterConfig.html，直接写 HTML 代码。这个文件里的内容会直接插入到页面底部。

示例 1：添加备案号


<div class="beian">
  <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备12345678号</a>
</div>
示例 2：添加统计代码


<!-- 百度统计代码 -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?你的ID";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
小贴士
请确保 FooterConfig.html 中的 HTML 代码格式正确。
如果你不需要添加任何东西，可以在 footerConfig.ts 里把 enable 改为 false。

# 背景壁纸配置
约 1004 字
大约 3 分钟

2025-01-27

📝 这是什么？
这里控制网站的背景显示效果。你可以选择使用顶部横幅 (Banner)、全屏背景 (Overlay) 或者纯色背景。

📂 文件位置

src/config/backgroundWallpaper.ts
🛠️ 配置详解
1. 基础模式设置

export const backgroundWallpaper: BackgroundWallpaperConfig = {
  // 壁纸模式：
  // "banner" = 顶部横幅 (推荐，最常用)
  // "overlay" = 全屏背景 (适合二次元风格)
  // "none" = 无背景 (极简风格)
  mode: "banner", 

  // 是否允许用户切换壁纸模式
  // true = 导航栏会出现切换按钮
  // false = 锁定为你设置的 mode，提升性能
  switchable: true,

  // 壁纸图片路径
  src: {
    desktop: "/assets/images/d1.webp", // 电脑端壁纸
    mobile: "/assets/images/m1.webp", // 手机端壁纸
  },
2. Banner 模式详细配置
当 mode 设为 "banner" 时，以下配置生效：


  banner: {
    // 图片位置调整 (CSS object-position)
    // "center" = 居中, "0% 20%" = 水平0% 垂直20%
    // 详细配置请参考下方的"壁纸位置配置详解"章节
    position: "0% 20%",

    // 首页大标题文字
    homeText: {
      enable: true, // 是否显示
      title: "Lovely firefly!", // 主标题
      
      // 副标题列表
      subtitle: [
        "In Reddened Chrysalis...",
        "From Shattered Sky...",
      ],
      
      // 打字机特效配置
      typewriter: {
        enable: false, // true = 循环打字显示所有副标题; false = 每次刷新随机显示一条
        speed: 100, // 打字速度 (ms)
        deleteSpeed: 50, // 删除速度 (ms)
        pauseTime: 2000, // 停顿时间 (ms)
      },
    },

    // 图片来源/画师致谢
    credit: {
      enable: { desktop: true, mobile: true }, // 是否显示致谢
      text: { desktop: "Pixiv - 晚晚喵", mobile: "..." }, // 画师名字
      url: { desktop: "...", mobile: "..." }, // 画师主页链接
    },

    // 导航栏透明模式
    // "semi" = 半透明加圆角
    // "full" = 完全透明
    // "semifull" = 动态透明 (滚动时变化)
    navbar: { transparentMode: "semifull" },

    // 底部波浪动画
    waves: {
      enable: { desktop: true, mobile: true }, // 是否开启波浪
      performance: {
        quality: "high", // "high" | "medium" | "low"
        hardwareAcceleration: true, // 是否开启硬件加速
      },
    },
  },
3. Overlay 模式详细配置
当 mode 设为 "overlay" (全屏背景) 时，以下配置生效：


  overlay: {
    zIndex: -1, // 层级，确保在内容下方
    opacity: 0.8, // 透明度 (0-1)
    blur: 1, // 模糊程度 (px)
  },
};
4. 壁纸位置配置详解 (Position)
backgroundWallpaper.banner.position 配置支持所有 CSS object-position 属性值，提供更精确的壁纸定位控制。

1. 关键字
单关键词

"top" - 顶部居中
"center" - 居中（默认）
"bottom" - 底部居中
"left" - 左侧居中
"right" - 右侧居中
双关键词组合

"top left" 或 "left top" - 左上角
"top center" - 顶部居中
"top right" 或 "right top" - 右上角
"center left" 或 "left center" - 左侧居中
"center center" - 正中央
"center right" 或 "right center" - 右侧居中
"bottom left" 或 "left bottom" - 左下角
"bottom center" - 底部居中
"bottom right" 或 "right bottom" - 右下角
2. 百分比值
单值（应用于水平和垂直方向）

"25%" - 水平和垂直都偏移25%
"50%" - 居中（等同于 "center"）
双值（水平 垂直）

"0% 0%" - 左上角
"50% 0%" - 顶部居中
"100% 0%" - 右上角
"0% 50%" - 左侧居中
"50% 50%" - 正中央
"100% 50%" - 右侧居中
"0% 100%" - 左下角
"50% 100%" - 底部居中
"100% 100%" - 右下角
"25% 75%" - 自定义位置
3. 像素值
单值

"10px" - 水平和垂直都偏移10像素
双值

"10px 20px" - 水平偏移10px，垂直偏移20px
"-10px 0px" - 向左偏移10px，垂直居中
"0px -20px" - 水平居中，向上偏移20px
4. 混合值
"left 25%" - 左对齐，垂直25%位置
"right 10px" - 右对齐，垂直偏移10像素
"25% top" - 水平25%位置，顶部对齐
"10px bottom" - 水平偏移10像素，底部对齐
常用场景配置示例

// 默认居中
position: "center"

// 人物肖像壁纸（突出主体，保持头部可见）
position: "center top"

// 风景壁纸（突出天空和远景）
position: "center 25%"

// 建筑壁纸（根据建筑位置调整）
position: "50% 40%"

// 精确像素调整
position: "10px 20px"
调试技巧
使用浏览器开发者工具: F12 打开控制台，选择壁纸元素，实时调整 object-position 样式。
常用调试值: 尝试 "0% 0%", "50% 50%", "100% 100%" 等极端值来理解定位逻辑。

# 代码高亮配置
约 167 字
小于 1 分钟

2025-01-27

配置文章中代码块的语法高亮主题。Firefly 使用 Expressive Code 来提供强大的代码块功能。

配置文件
文件路径：src/config/expressiveCodeConfig.ts

配置详解

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // 暗色模式下的代码主题
  // 推荐: "one-dark-pro", "dracula", "github-dark"
  darkTheme: "one-dark-pro",

  // 亮色模式下的代码主题
  // 推荐: "one-light", "github-light", "solarized-light"
  lightTheme: "one-light",

  // 更多可用主题和高级配置请参考 Expressive Code 官方文档
  // https://expressive-code.com/guides/themes/
};
常用主题列表
github-dark / github-light
one-dark-pro / one-light
dracula
monokai
nord
solarized-dark / solarized-light

# 樱花特效配置
约 288 字
小于 1 分钟

2025-01-27

为你的网站添加浪漫的樱花飘落特效。🌸

配置文件
文件路径：src/config/sakuraConfig.ts

配置详解

export const sakuraConfig: SakuraConfig = {
  // 是否启用樱花特效
  enable: false,

  // 樱花数量
  // 数量越多，屏幕上的樱花越密集，但可能会影响性能
  sakuraNum: 21,

  // 限制次数
  // -1: 无限循环
  // >0: 樱花飘落多少次后停止
  limitTimes: -1,

  // 樱花大小范围 (倍数)
  size: {
    min: 0.5, // 最小尺寸
    max: 1.1, // 最大尺寸
  },

  // 透明度范围
  opacity: {
    min: 0.3, // 最小不透明度
    max: 0.9, // 最大不透明度
  },

  // 运动速度配置
  speed: {
    // 水平移动速度
    horizontal: {
      min: -1.7, // 向左飘动的最小速度
      max: -1.2, // 向左飘动的最大速度
    },
    // 垂直下落速度
    vertical: {
      min: 1.5, // 下落最小速度
      max: 2.2, // 下落最大速度
    },
    // 旋转速度
    rotation: 0.03,
    // 消失速度 (不应大于最小不透明度)
    fadeSpeed: 0.03,
  },

  // CSS z-index 层级
  // 确保樱花在合适的层级显示，不会遮挡重要内容
  zIndex: 100,
};

# 字体配置
约 365 字
大约 1 分钟

2025-10-11

自定义网站的字体，支持系统字体、Google Fonts 和自定义网络字体。

配置文件
文件路径：src/config/fontConfig.ts

配置详解
1. 基础设置

export const fontConfig = {
  // 是否启用自定义字体功能
  enable: true,

  // 是否预加载字体文件
  // 开启后可以提高字体加载速度，减少闪烁
  preload: true,

  // 当前选中的字体
  // 可以是一个字符串，也可以是一个数组（作为回退链）
  // 对应 fonts 对象中的 key
  selected: ["system"], 
  // 示例: selected: ["zen-maru-gothic", "system"],
  
  // ...
};
2. 字体定义 (fonts)
在 fonts 对象中定义可用的字体配置：


fonts: {
  // 系统字体配置示例
  system: {
    id: "system",
    name: "系统字体",
    src: "", // 系统字体不需要 src
    family: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },

  // Google Fonts 配置示例
  "zen-maru-gothic": {
    id: "zen-maru-gothic",
    name: "Zen Maru Gothic",
    // 字体文件链接 (CSS 或 字体文件 URL)
    src: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap",
    // CSS font-family 名称
    family: "Zen Maru Gothic",
    // 字体粗细 (可选)
    weight: 400,
    // font-display 属性 (可选)
    display: "swap",
  },
  
  // 自定义网络字体示例
  "misans-normal": {
    id: "misans-normal",
    name: "MiSans Normal",
    src: "https://unpkg.com/misans@4.1.0/lib/Normal/MiSans-Normal.min.css",
    family: "MiSans",
    weight: 400,
    display: "swap",
  },
},
3. 全局回退字体 (fallback)
当选中的字体加载失败或缺少字符时，使用的后备字体列表：


fallback: [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "sans-serif",
],


# 随机封面图配置
约 326 字
大约 1 分钟

2025-01-27

配置文章封面图的显示策略，以及随机封面图 API。

配置文件
文件路径：src/config/coverImageConfig.ts

配置详解
1. 基础开关

export const coverImageConfig: CoverImageConfig = {
  // 是否在文章详情页顶部显示封面图
  enableInPost: true,
  
  // ...
};
2. 随机封面图配置
当文章 Frontmatter 中的 image 字段设置为 "api" 时，将使用此处的配置。


randomCoverImage: {
  // 随机封面图功能总开关
  enable: false,

  // 随机图 API 列表
  // 系统会按顺序尝试加载，直到成功
  apis: [
    "https://t.alcy.cc/pc",
    "https://www.dmoe.cc/random.php",
    "https://uapis.cn/api/v1/random/image?category=acg&type=pc",
  ],

  // 备用图片路径
  // 当所有 API 都请求失败时显示的图片
  fallback: "/assets/images/cover.webp",

  // 加载状态配置
  loading: {
    // 是否显示加载指示器
    enable: true,
    // 加载动画图片路径
    image: "/assets/images/loading.gif",
    // 加载时的背景颜色 (建议与 loading 图片背景一致)
    backgroundColor: "#fefefe",
  },

  // 水印配置
  // 仅在随机图加载成功时显示
  watermark: {
    // 是否显示水印
    enable: true,
    // 水印文本
    text: "Random Cover",
    // 水印位置
    // 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'
    position: "bottom-right",
    // 透明度
    opacity: 0.6,
    // 字体大小
    fontSize: "0.75rem",
    // 字体颜色
    color: "#ffffff",
    // 背景颜色
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
},

# 侧边栏配置
约 812 字
大约 3 分钟

2025-10-11

📝 这是什么？
侧边栏是博客两侧的区域，用于展示个人资料、目录、公告、分类标签等小组件。你可以自由决定它们的位置和顺序。

📂 文件位置

src/config/sidebarConfig.ts
🛠️ 配置详解
1. 布局设置 (Layout)
首先决定你的博客要有几个侧边栏。


export const sidebarLayoutConfig: SidebarLayoutConfig = {
  // 总开关：是否启用侧边栏
  enable: true,

  // 侧边栏位置：
  // "left" = 只有左侧边栏 (经典布局)
  // "both" = 双侧边栏 (左侧导航，右侧目录/统计)
  // ⚠️ 注意：开启 "both" 后，文章列表将强制为单列模式
  position: "both", 

  // ...
};
2. 组件管理 (Components)
侧边栏由一个个 Widget (组件) 组成。你可以分别配置左侧 (leftComponents) 和右侧 (rightComponents)。

通用配置项
每个组件都有以下通用属性：

enable: true/false，是否开启。
order: 数字，决定显示顺序，数字越小越靠前。
position:
"top": 固定在顶部，页面滚动时会消失。
"sticky": 粘性定位，页面滚动时会吸附在屏幕上 (适合目录、标签)。
type: 组件类型 (见下文)。
可用组件类型 (type)
类型	说明	常用位置
profile	个人资料卡：头像、名字、社交链接	左侧顶部
announcement	公告栏：显示重要通知	左侧/右侧顶部
categories	分类列表：显示文章分类	左侧/右侧 Sticky
tags	标签云：显示文章标签	左侧/右侧 Sticky
advertisement	广告/自定义卡片：展示图片或推广	任意位置
toc	文章目录：自动生成文章目录 (仅在文章页显示)	右侧 Sticky
3. 配置示例

leftComponents: [
  // 1. 个人资料
  {
    type: "profile",
    enable: true,
    order: 1,
    position: "top",
    class: "onload-animation", // 进场动画类名
    animationDelay: 0, // 动画延迟
  },
  
  // 2. 分类列表 (带自动折叠功能)
  {
    type: "categories",
    enable: true,
    order: 3,
    position: "sticky", // 吸附效果
    responsive: {
      collapseThreshold: 5, // 如果分类超过 5 个，自动折叠显示
    },
  },
  
  // 3. 广告/自定义图片
  {
    type: "advertisement",
    enable: false, // 默认关闭
    order: 5,
    position: "sticky",
    configId: "ad1", // 对应 adConfig.ts 中的配置 ID
  },
],
💡 小贴士
Sticky (粘性定位)：建议将 categories (分类)、tags (标签) 或 toc (目录) 设置为 sticky，这样当用户阅读长文章时，这些导航工具会一直停留在视野中。
响应式：在移动端，侧边栏会自动隐藏到汉堡菜单中，或者显示在页面底部，无需额外配置。
// 2. 文章目录 (TOC) - 非常重要！ // 建议开启，方便读者快速跳转 { type: "sidebarToc", enable: true, order: 2, position: "sticky", class: "onload-animation", animationDelay: 250, showOnPostPage: true, // 只在看文章时显示 }, ],



## 3. 常见修改

### Q: 我想把侧边栏关掉，只看文章？
A: 把 `enable` 改为 `false` 即可。

### Q: 手机上侧边栏去哪了？
A: 为了保证阅读体验，手机上侧边栏会自动隐藏或变成底部抽屉。你可以在 `responsive` 中配置：
```typescript
responsive: {
  layout: {
    mobile: "sidebar", // 强制在手机上也显示 (不推荐，屏幕太小)
    // 或者 "drawer" (抽屉模式)
  },
},
Q: 怎么添加广告？
A: 使用 advertisement 组件，并指定 configId（对应 adConfig.ts 中的配置）。


{
  type: "advertisement",
  enable: true,
  configId: "ad1", // 对应 adConfig.ts 中的 adConfig1
  // ...
}
```

# 导航栏配置
约 449 字
大约 2 分钟

2025-10-11

📝 这是什么？
导航栏是网站顶部的菜单条，是用户浏览网站的主要入口。你可以添加链接、下拉菜单，以及配置搜索功能。

📂 文件位置

src/config/navBarConfig.ts
🛠️ 配置详解
1. 链接管理 (Links)
你可以混合使用 预设链接 和 自定义链接。


export const navBarConfig: NavBarConfig = {
  links: [
    // --- 使用预设 (推荐) ---
    LinkPreset.Home,    // 首页
    LinkPreset.Archive, // 归档页
    LinkPreset.About,   // 关于页
    
    // --- 自定义链接 ---
    {
      name: "我的项目",        // 显示名称
      url: "/projects/",      // 链接地址
      icon: "material-symbols:rocket", // 图标 (可选)
    },
    
    // --- 外部链接 ---
    {
      name: "GitHub",
      url: "https://github.com/yourname",
      external: true,         // ⚠️ 外部链接必须设为 true
      icon: "fa6-brands:github",
    },

    // --- 下拉菜单 (多级导航) ---
    {
      name: "更多",
      url: "#",               // 父菜单通常不跳转
      icon: "material-symbols:menu",
      children: [             // 子菜单列表
        { name: "友情链接", url: "/friends/" },
        { name: "留言板", url: "/guestbook/" },
        LinkPreset.Sponsor,   // 子菜单里也可以用预设！
      ],
    },
  ],
};
2. 搜索配置 (Search)
Firefly 支持两种搜索模式，满足不同需求。


export const navBarSearchConfig: NavBarSearchConfig = {
  // 搜索模式选择：
  // NavBarSearchMethod.PageFind (推荐)
  // NavBarSearchMethod.MeiliSearch
  method: NavBarSearchMethod.PageFind,

  // MeiliSearch 配置 (仅当 method 选为 MeiliSearch 时需要)
  meiliSearchConfig: {
    INDEX_NAME: "posts",
    MEILI_HOST: "http://your-meilisearch-host:7700",
    PUBLIC_MEILI_SEARCH_KEY: "your-search-key",
  },
};
🔍 模式对比
特性	PageFind (推荐)	MeiliSearch
类型	静态搜索	全文搜索引擎
部署难度	极低 (无需配置)	高 (需要部署服务)
资源占用	低 (前端运行)	高 (需要服务器内存)
适用场景	个人博客、静态网站	数据量巨大的站点
💡 小贴士
LinkPreset (预设)：我们为你准备了常用的预设，如 Home, Archive, About, Friends, Guestbook 等，直接导入使用即可，省去手动敲代码的麻烦。
图标：同样支持 Iconify 图标库，去 Icones 找个喜欢的图标吧！

# 音乐播放器配置
约 768 字
大约 3 分钟

2025-01-27

为你的博客添加背景音乐，支持 MetingJS（网易云/QQ音乐）和本地播放列表。

配置文件
文件路径：src/config/musicConfig.ts

配置详解
1. 基础设置

export const musicPlayerConfig: MusicPlayerConfig = {
  // 启用音乐播放器功能
  enable: true,

  // 播放器模式
  // 'meting': 使用 Meting API (网易云/QQ音乐等)
  // 'local': 使用本地音乐列表
  mode: "meting",
  
  // ...
};
2. Meting 模式配置 (在线歌单)
当 mode 设置为 'meting' 时，以下配置生效：


meting: {
  // Meting API 地址
  // 默认使用官方 API，也可以搭建自己的 API 服务
  api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",

  // 音乐平台
  // 'netease': 网易云音乐
  // 'tencent': QQ音乐
  // 'kugou': 酷狗音乐
  // 'xiami': 虾米音乐
  // 'baidu': 百度音乐
  server: "netease",

  // 资源类型
  // 'song': 单曲
  // 'playlist': 歌单
  // 'album': 专辑
  // 'search': 搜索
  // 'artist': 艺术家
  type: "playlist",

  // 资源 ID
  // 例如网易云歌单链接 https://music.163.com/#/playlist?id=10046455237 中的 10046455237
  id: "10046455237",

  // 认证 token (可选，部分私有 API 需要)
  auth: "",

  // 备用 API 列表
  // 当主 API 无法访问时，会自动尝试这些备用 API
  fallbackApis: [
    "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
    "https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
  ],

  // MetingJS 脚本路径
  // 可以配置 CDN 地址或本地路径
  jsPath: "https://unpkg.com/meting@2/dist/Meting.min.js",
},
3. Local 模式配置 (本地音乐)
当 mode 设置为 'local' 时，以下配置生效：


local: {
  // 播放列表
  playlist: [
    {
      name: "使一颗心免于哀伤",     // 歌曲名称
      artist: "知更鸟",             // 艺术家
      url: "/assets/music/song.wav", // 音乐文件路径 (相对于 public 目录)
      cover: "/assets/music/cover.jpg", // 封面图片路径
      lrc: "",                      // 歌词内容 (LRC 格式字符串)
    },
    // 可以添加更多歌曲...
  ],
},
4. 播放器行为配置
控制播放器的外观和交互行为：


player: {
  // 是否自动播放
  // 注意：现代浏览器通常会阻止未经用户交互的自动播放
  autoplay: false,

  // 主题色 (进度条颜色等)
  theme: "var(--btn-regular-bg)",

  // 循环模式
  // 'all': 列表循环
  // 'one': 单曲循环
  // 'none': 不循环
  loop: "all",

  // 播放顺序
  // 'list': 顺序播放
  // 'random': 随机播放
  order: "list",

  // 预加载策略
  // 'none': 不预加载
  // 'metadata': 仅加载元数据
  // 'auto': 自动加载
  preload: "auto",

  // 默认音量 (0.0 - 1.0)
  volume: 0.7,

  // 互斥播放
  // true: 播放此播放器时暂停其他播放器
  mutex: true,

  // 歌词显示类型 (仅 Local 模式)
  // 0: 不显示
  // 1: 显示 (需要提供 lrc 字段)
  // 2: 显示 (从 HTML 内容读取)
  lrcType: 1,

  // 歌词默认是否隐藏
  // true: 默认隐藏，需点击按钮显示
  lrcHidden: true,

  // 播放列表默认是否折叠
  listFolded: false,

  // 播放列表最大高度
  listMaxHeight: "340px",

  // 本地存储键名 (用于保存用户设置)
  storageName: "aplayer-setting",
},
5. 响应式配置
控制在不同设备上的显示：


responsive: {
  mobile: {
    // 在移动端是否隐藏播放器
    hide: false,
    // 移动端断点 (像素)
    breakpoint: 768,
  },
},

# 看板娘配置
约 432 字
大约 1 分钟

2025-10-11

配置网站右下角的看板娘（虚拟助手），支持 Spine 和 Live2D 两种模型格式。

配置文件
文件路径：src/config/pioConfig.ts

配置详解
配置文件中包含 spineModelConfig (Spine 模型) 和 live2dModelConfig (Live2D 模型) 两部分配置，你可以根据需要启用其中一种。

1. 通用配置项
两种模型的配置结构非常相似：


// 启用开关
enable: true,

// 模型配置
model: {
  // 模型文件路径 (JSON 文件)
  path: "/pio/models/spine/firefly/1310.json",
  // 缩放比例
  scale: 1.0,
  // X 轴偏移量
  x: 0,
  // Y 轴偏移量
  y: 0,
},

// 位置配置
position: {
  // 显示角落
  // 'bottom-left', 'bottom-right', 'top-left', 'top-right'
  corner: "bottom-left",
  // 水平偏移
  offsetX: 0,
  // 垂直偏移
  offsetY: 0,
},

// 容器尺寸
size: {
  width: 135,
  height: 165,
},

// 交互配置
interactive: {
  // 是否启用交互
  enabled: true,
  // 点击时的随机消息列表
  clickMessages: [
    "你好呀！",
    "今天也要加油哦！✨",
  ],
  // 消息显示时长 (毫秒)
  messageDisplayTime: 3000,
},

// 响应式配置
responsive: {
  // 在移动端是否隐藏
  hideOnMobile: true,
  // 移动端断点
  mobileBreakpoint: 768,
},

// CSS 层级
zIndex: 1000,

// 不透明度
opacity: 1.0,
2. Spine 模型特有配置
Spine 模型支持更丰富的动画交互：


interactive: {
  // ... 通用配置 ...

  // 点击时随机播放的动画名称列表
  clickAnimations: [
    "emoji_0",
    "emoji_1",
    "emoji_2",
  ],

  // 待机动画列表
  idleAnimations: ["idle", "emoji_0", "emoji_1"],
  
  // 待机动画切换间隔 (毫秒)
  idleInterval: 8000,
},
3. Live2D 模型特有配置
Live2D 模型的动作和表情通常定义在模型文件中，配置相对简单。


// Live2D 配置通常不需要手动指定动画列表
// 动作和表情将从 model.json 中自动读取

# 广告与推广配置
约 628 字
大约 2 分钟

2025-10-11

想在侧边栏挂个"小广告"？无论是推广自己的公众号、展示一张精美的图片，还是放一个"支持博主"的按钮，adConfig 都能帮你轻松搞定！

文件位置：src/config/adConfig.ts

配置详解
你可以定义多个广告配置（比如 adConfig1, adConfig2），然后在侧边栏配置中按需引用。

1. 纯图片广告 (Banner)
最简单的形式，就是放一张图，点击跳转。


export const adConfig1: AdConfig = {
  // 图片设置
  image: {
    src: "/assets/images/d1.webp", // 图片路径，建议放在 public 目录下
    alt: "广告横幅",               // 图片无法显示时的替代文本
    link: "#",                     // 点击图片跳转的链接
    external: true,                // 是否在新标签页打开链接
  },
  
  // 交互设置
  closable: true,   // 是否允许用户手动关闭这个广告
  displayCount: -1, // 显示次数限制：-1 代表一直显示，不自动消失
  
  // 样式设置
  padding: {
    all: "0", // 设置内边距。 "0" 表示图片无缝填满整个卡片
    // 你也可以分别设置四个方向：
    // top: "0", 
    // right: "1rem", 
    // bottom: "1rem", 
    // left: "1rem",
  },
};
2. 完整内容广告 (图文 + 按钮)
如果你想说的话比较多，可以使用这种图文并茂的形式。


export const adConfig2: AdConfig = {
  // 标题和正文
  title: "支持博主",
  content: "如果您觉得本站内容对您有帮助，欢迎支持我们的创作！",
  
  // 配图设置
  image: {
    src: "/assets/images/d2.webp",
    alt: "支持博主",
    link: "about/",
    external: false,
  },
  
  // 底部按钮设置
  link: {
    text: "支持一下", // 按钮文字
    url: "about/",    // 按钮链接
    external: false,  // 是否在新标签页打开
  },
  
  closable: true,
  displayCount: -1,
  
  // 边距设置
  padding: {
    // 不填则使用默认边距，通常看起来更像一个标准的卡片
  },
};
关键参数说明
参数	类型	说明
image	object	图片配置对象，包含 src (路径), alt (描述), link (链接), external (是否外链)。
title	string	广告卡片的标题（可选）。
content	string	广告卡片的正文内容（可选）。
link	object	底部按钮配置，包含 text (按钮文字), url (链接), external (是否外链)。
closable	boolean	是否显示右上角的关闭按钮。
displayCount	number	广告显示的次数。设为 -1 表示永久显示。
padding	object	卡片内边距设置。可以设置 all 统一边距，或分别设置 top, right, bottom, left。
如何启用？
定义好配置后，别忘了去 src/config/sidebarConfig.ts 中把它们加到侧边栏里哦！


# 友链配置
约 501 字
大约 2 分钟

2025-10-11

友链（友情链接）是博客社交的重要一环。在这里，你可以展示小伙伴们的博客，互相引流，共同进步！

文件位置：src/config/friendsConfig.ts

页面配置
你可以控制友链页面的布局显示。


export const friendsPageConfig: FriendsPageConfig = {
  // 显示列数：2列或3列
  // 2 = 双列布局 (卡片更宽)
  // 3 = 三列布局 (卡片更紧凑)
  columns: 2,
};
友链列表配置
friendsConfig 是一个数组，每一项代表一个友链。


export const friendsConfig: FriendLink[] = [
  {
    title: "夏夜流萤",                                     // 博客标题
    imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640", // 头像链接
    desc: "飞萤之火自无梦的长夜亮起...",                     // 博客简介/描述
    siteurl: "https://blog.cuteleaf.cn",                   // 博客地址
    tags: ["Blog"],                                        // 标签，用于分类或展示
    weight: 10,                                            // 权重，数字越大排序越靠前
    enabled: true,                                         // 是否启用，设为 false 则暂时隐藏
  },
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content-driven websites.",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 8,
    enabled: true,
  },
];
关键参数说明
参数	类型	说明
title	string	友链的标题，通常是博主的名字或博客名。
imgurl	string	头像图片的链接。可以是网络图片，也可以是本地图片（如 /assets/avatar.png）。
desc	string	简短的描述，介绍一下这个博客是干什么的。
siteurl	string	点击跳转的链接地址。
tags	string[]	标签数组，比如 ["技术", "生活"]，让读者更直观地了解博客类型。
weight	number	排序权重。数字越大，排名越靠前。想把好朋友置顶？把这个数改大点！
enabled	boolean	开关。设为 false 时，该友链不会显示在页面上，方便临时下架而不用删除代码。
小贴士
头像失效？ 建议将朋友的头像下载到 public/assets/ 目录，使用本地路径引用，这样更稳定。
排序规则： 默认使用 getEnabledFriends 函数，它会自动过滤掉 enabled: false 的项，并按 weight 降序排列。

# 留言板配置
约 973 字
大约 3 分钟

2025-01-27

概述
Firefly 主题支持留言板功能，允许访客在专门的留言页面发表评论和交流。留言板页面支持 Markdown 内容编辑，并集成评论系统，提供完整的留言体验。

页面开关
留言板功能默认启用，您可以在 src/config/siteConfig.ts 文件中控制其显示：


pages: {
  guestbook: true, // 留言板页面开关，设为 false 会隐藏页面
}
开关说明
选项	类型	说明
guestbook	boolean	留言板页面开关，true 启用，false 禁用
当设置为 false 时：

留言板页面将返回 404 错误
导航栏中的留言板链接将自动隐藏
页面结构
留言板页面由两部分组成：

Markdown 内容区域：显示自定义的介绍和说明
评论区：访客可以在此留言交流
修改留言板内容
留言板的内容存储在 src/content/spec/guestbook.md 文件中，您可以直接编辑此文件来自定义页面内容。

文件位置

src/content/spec/guestbook.md
内容示例

---
title: "留言板"
description: "在这里留下你的足迹"
---

## 💬 留言板

欢迎来到留言板！这里是一个自由交流的空间，你可以：

- 💭 分享你的想法和观点
- 📝 留下你的建议和反馈
- 🎉 记录你的心情和故事
- 🤝 与其他访客互动交流

无论你想说什么，都欢迎在下方评论区留言！

---

**温馨提示**：
- 请保持友善和尊重，营造良好的交流氛围
- 欢迎分享你的想法，也可以提出对网站的建议
- 你的每一条留言都是对我最大的支持 ✨
支持的 Markdown 语法
留言板内容支持标准 Markdown 语法以及 Firefly 主题的扩展语法：

标准 Markdown：标题、列表、链接、图片、代码块等
GitHub 卡片：使用 ::github{repo="用户名/仓库名"}
注意框：使用 > [!NOTE]、> [!TIP]、> [!WARNING] 等
数学公式：使用 $inline$ 和 $$block$$ 语法
评论系统配置
留言板需要评论系统支持才能正常工作。如果未启用评论系统，页面会显示友好的提示信息。

启用评论系统
在 src/config/commentConfig.ts 文件中配置评论系统：


export const commentConfig: CommentConfig = {
  type: 'twikoo', // 选择评论系统：none, twikoo, waline, giscus, disqus
  // ... 其他配置
};
支持的评论系统
Twikoo：轻量级评论系统
Waline：功能丰富的评论系统
Giscus：基于 GitHub Discussions
Disqus：老牌评论服务
详细配置请参考 评论系统配置文档。

导航栏配置
留言板会自动添加到导航栏中（当页面开关启用时）。您可以在 src/config/navBarConfig.ts 中自定义其位置：


// 根据配置决定是否添加留言板页面
if (siteConfig.pages.guestbook) {
  links.push(LinkPreset.Guestbook);
}
国际化支持
留言板支持多语言，已包含以下语言翻译：

简体中文：留言
繁体中文：留言
英文：Guestbook
日文：ゲストブック
俄文：Гостевая книга
翻译键定义在 src/i18n/i18nKey.ts 中，您可以在语言文件中自定义翻译内容。

常见问题
Q: 留言板页面显示 404？
A: 检查 siteConfig.pages.guestbook 是否设置为 true，以及 src/content/spec/guestbook.md 文件是否存在。

Q: 评论区不显示？
A: 确保在 commentConfig.ts 中正确配置了评论系统，并且 type 不是 "none"。如果评论系统未配置，页面会显示提示信息。

Q: 如何修改留言板的样式？
A: 留言板页面的样式由 src/pages/guestbook.astro 文件控制。如果需要修改布局，可以编辑此文件。

Q: 留言板支持哪些 Markdown 扩展？
A: 支持所有 Firefly 主题支持的 Markdown 扩展语法，包括 GitHub 卡片、注意框、数学公式等。

相关文档
站点配置 - 页面开关配置
评论系统配置 - 评论系统设置
自定义页面 - 了解如何自定义页面内容

# 赞助配置
约 614 字
大约 2 分钟

2025-01-27

创作不易，如果你的文章帮助到了别人，不妨开启赞助功能，让热心的读者请你喝杯咖啡吧！☕️

文件位置：src/config/sponsorConfig.ts

页面与功能设置
首先，我们可以配置赞助页面的基本信息和显示逻辑。


export const sponsorConfig: SponsorConfig = {
  // 页面信息
  title: "赞助本站",      // 赞助页面的标题
  description: "",       // 页面描述，留空则使用默认翻译
  usage: "您的赞助将用于服务器维护、内容创作...", // 资金用途说明，让读者知道钱花哪儿了
  
  // 显示开关
  showSponsorsList: true, // 是否在赞助页面下方显示"赞助者列表"
  showButtonInPost: true, // 是否在每篇文章底部显示"打赏"按钮
  
  // ... 后续配置
};
赞助方式 (Methods)
这里配置你支持的收款方式，比如微信、支付宝、爱发电等。


  methods: [
    {
      name: "支付宝",
      icon: "fa6-brands:alipay",                   // 图标，支持 Iconify 图标库
      qrCode: "/assets/images/sponsor/alipay.png", // 收款码图片路径
      link: "",                                    // 跳转链接（如果有）
      description: "使用 支付宝 扫码赞助",           // 辅助说明文字
      enabled: true,                               // 是否启用该方式
    },
    {
      name: "爱发电",
      icon: "simple-icons:afdian",
      qrCode: "",
      link: "https://afdian.com/a/cuteleaf",       // 爱发电通常使用链接跳转
      description: "通过 爱发电 进行赞助",
      enabled: true,
    },
  ],
赞助者列表 (Sponsors)
手动维护一份感谢名单，记录每一份温暖的支持。


  sponsors: [
    {
      name: "夏叶",          // 赞助者昵称
      amount: "¥50",        // 赞助金额
      date: "2025-10-01",   // 赞助日期
      message: "感谢分享！", // 留言（可选）
    },
    {
      name: "匿名用户",
      amount: "¥20",
      date: "2025-10-01",
    },
  ],
};
关键参数说明
基础配置
参数	类型	说明
title	string	赞助页面的大标题。
description	string	页面副标题或简短描述。
usage	string	详细的资金用途说明。
showSponsorsList	boolean	是否公开展示下方的 sponsors 列表。
showButtonInPost	boolean	是否在文章页底部添加打赏入口。
赞助方式 (methods)
参数	类型	说明
name	string	支付方式名称，如"微信支付"。
icon	string	对应的图标 ID。
qrCode	string	收款码图片的本地路径。
link	string	点击跳转的支付链接（适用于爱发电、PayPal 等）。
description	string	支付方式的简短说明。
enabled	boolean	是否启用。
赞助者 (sponsors)
参数	类型	说明
name	string	赞助者名字。
amount	string	金额字符串，如 "¥50"。
date	string	日期字符串。
message	string	赞助者的留言（可选）。

# 番剧页面配置
约 115 字
小于 1 分钟

2025-10-11

番剧页面修改教程(本地数据源)

Firefly 主题提供了内置的番剧页面，您可以轻松地自定义显示的番剧列表。

开启Bangumi模式
番剧页面修改教程(Bangumi数据源)

开关位于 src/config/siteConfig.ts 文件中。


bangumi: {
		userId: "your-bangumi-id", // 在此处设置你的Bangumi用户ID
	}
把括号中的 "your-bangumi-id" 替换为Bangumi用户ID。

# 撰写文章

## Markdown

## 新建文章
约 978 字
大约 3 分钟

2025-11-01

创建文章
在src/content/posts目录下创建一个新的Markdown文件，文件名应该具有描述性，例如my-first-post.md。

在文件中添加frontmatter（前置元数据），这是文章的配置信息，必须包含title和description字段：


---
title: Markdown Tutorial
published: 2025-01-20
pinned: true
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2025-01-20
image: ./cover.jpg
pubDate: 2025-01-20
---
关于slug字段
如果你需要自定义文章的URL路径，可以在frontmatter中添加slug字段：


---
title: Markdown Tutorial
slug: custom-slug
...
这样访问路径就是/posts/custom-slug/，否则默认使用文件名作为URL路径。

建议slug只包含英文、数字和短横线，避免特殊字符。

Frontmatter字段详解
frontmatter支持的字段包括：

必需字段
title：文章标题（必需）
description：文章描述（必需）
发布相关
published：文章发布日期，格式为YYYY-MM-DD
pubDate：文章发布日期（与published类似）
date：文章创建日期
draft：是否为草稿，true表示草稿，false表示正式发布
内容分类
tags：文章标签数组，用于标记文章主题
category：文章分类，用于组织文章
pinned：是否置顶文章，true表示置顶
作者信息
author：文章作者姓名
licenseName：文章许可证名称，如"MIT"、"CC BY 4.0"等
sourceLink：文章源链接，通常指向GitHub仓库或原始来源
图片设置
image：文章封面图片(单文件方案会导致RSS无法正常构建图片的路径,如果你需要使用rss功能请使用文件夹写作方案)
固定链接
slug：自定义文章URL路径，如果不设置，将使用文件名作为URL。
在frontmatter下方编写文章内容，可以使用标准的Markdown语法。
Markdown学习资源
如果您还不熟悉Markdown语法，建议先学习基础知识：

📚 推荐学习地址：菜鸟教程 - Markdown教程

预览文章
保存文件后，可以在浏览器中预览文章。将文章文件名（不包括.md扩展名）拼接到预览URL的末尾即可查看。 例如，如果本地开发服务器运行在http://localhost:4321/，文章文件名为my-first-post.md，则可以通过http://localhost:4321/posts/my-first-post访问文章。

如果文章尚未创建或文件名错误，页面将显示404错误。当你预览一个尚未创建的文章时，控制台会显示不同的输出，这有助于进行故障排查。

链接到文章
要在博客页面或其他页面中链接到你的文章，可以使用标准的HTML <a> 标签：


<a href="/posts/my-first-post/">我的第一篇文章</a>
确保链接的href属性指向正确的文章路径。

添加图片
如果需要在文章中添加图片，可以将图片文件放在public目录下，然后在文章中通过相对路径引用：

![图片描述](/images/my-image.png)
posts文件夹下创建图片文件夹images, 然后在文章中通过相对路径引用：

![图片描述](./images/my-image.png)



## 创建多篇文章

你可以在`src/content/posts/`目录下创建多个Markdown文件，每个文件代表一篇文章。例如：
src/content/posts/ ├── my-first-post.md ├── my-second-post.md └── my-third-post.md



每篇文章都是一个独立的Markdown文件，文件名将被用作文章的URL路径。

## 链接多篇文章

要在博客页面中链接到多篇文章，可以创建一个文章列表：

```html
<ul>
  <li><a href="/posts/my-first-post/">我的第一篇文章</a></li>
  <li><a href="/posts/my-second-post/">我的第二篇文章</a></li>
  <li><a href="/posts/my-third-post/">我的第三篇文章</a></li>
</ul>
确保每个链接都指向正确的文章路径。
```

## Mermaid图表
约 98 字
小于 1 分钟

2025-08-21

我们可以使用mermaid语法来在文章中绘制图表


    ```mermaid
    graph TD
        A[Start] --> B{Condition Check}
        B -->|Yes| C[Process Step 1]
        B -->|No| D[Process Step 2]
        C --> E[Subprocess]
        D --> E
        subgraph E [Subprocess Details]
            E1[Substep 1] --> E2[Substep 2]
            E2 --> E3[Substep 3]
        end
        E --> F{Another Decision}
        F -->|Option 1| G[Result 1]
        F -->|Option 2| H[Result 2]
        F -->|Option 3| I[Result 3]
        G --> J[End]
        H --> J
        I --> J
    ```
