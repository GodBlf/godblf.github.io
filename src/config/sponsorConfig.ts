import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 打赏用途说明
	usage: "感谢您的阅读,让我们共同努力把",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			name: "支付包",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			description: "领取支付宝红包",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			description: "领取微信红包",
			enabled: true,
		},
		{
			name: "PayPal",
			icon: "fa7-brands:paypal",
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			description: "领取贝宝红包",
			enabled: true,
		},
		{
			name: "Google Pay",
			icon: "fa7-brands:google",
			link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			description: "领取谷歌红包",
			enabled: true,
		},
	],

	// 打赏者列表（可选）
	sponsors: [
		// 示例：已实名打赏者
		{
			name: "许昊龙",
			amount: "¥50",
			date: "2025-10-01",
		},

		// 示例：匿名打赏者
		{
			name: "匿名用户",
			// avatar: "",
			amount: "¥20",
			date: "2025-10-01",
		},
	],
};
