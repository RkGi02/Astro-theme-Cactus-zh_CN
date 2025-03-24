import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// 网站作者信息
	author: "米皮妙妙屋",
	// 日期格式配置
	date: {
		locale: "zh-CN",
		options: {
			day: "numeric",
			month: "narrow",
			year: "numeric",
		},
	},
	// 网站描述
	description: "米皮妙妙屋",
	// HTML 的语言属性
	lang: "zh-CN",
	// Open Graph 的语言属性
	ogLocale: "zh-CN",
	// 网站标题
	title: "米皮妙妙屋",
};

// 页眉和页脚的导航链接
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "主页",
	},
	{
		path: "/about/",
		title: "关于",
	},
	{
		path: "/posts/",
		title: "博客",
	},
	{
		path: "/notes/",
		title: "笔记",
	},
];

// Expressive Code 配置
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// 如果有一个深色主题和一个浅色主题
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// 默认选择器
		return `[data-theme="${theme.name}"]`;
	},
	// 使用一个深色主题和一个浅色主题
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
