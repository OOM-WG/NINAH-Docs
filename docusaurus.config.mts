import {themes as prismThemes} from 'prism-react-renderer'

import type * as Preset from '@docusaurus/preset-classic'
import type {Config} from '@docusaurus/types'

export default {
	title: '深入伪人世界？！',
	tagline: '《寻找伪人》游戏攻略文档',
	favicon: 'img/logo.ico',

	future: {v4: true},

	url: 'https://non-human.game.oom-wg.dev',
	baseUrl: '/',

	scripts: process.env.NODE_ENV === 'production' ? [{src: '/umeng.js'}] : [],

	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans']
	},

	presets: [
		[
			'classic',
			{
				docs: {sidebarPath: 'sidebars.mts'},
				blog: false
			} satisfies Preset.Options
		]
	],

	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				hashed: true,
				language: ['en', 'zh']
			}
		]
	],

	themeConfig: {
		tableOfContents: {maxHeadingLevel: 6},
		navbar: {
			title: '深入伪人世界？！',
			logo: {
				alt: 'Website Logo',
				src: 'img/logo.webp'
			},
			items: [
				{
					to: '/docs/mechs',
					label: '游戏机制',
					position: 'left'
				},
				{
					to: '/docs/chars',
					label: '人物图鉴',
					position: 'left'
				},
				{
					to: '/docs/endings',
					label: '游戏结局',
					position: 'left'
				},
				{
					href: 'https://github.com/OOM-WG/NonHumanGame-Docs',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: '游戏攻略',
					items: [
						{
							label: '游戏机制',
							to: '/docs/mechs'
						},
						{
							label: '人物图鉴',
							to: '/docs/chars'
						},
						{
							label: '游戏结局',
							to: '/docs/endings'
						}
					]
				},
				{
					title: '友链',
					items: [
						{
							label: '回忆溢出工作组',
							href: 'https://oom-wg.dev'
						}
					]
				}
			],
			copyright: `根据 <a href="https://license.fileto.download/" target="_blank">F2DLPR 许可证</a>授权许可。©️ 2016-${new Date().getFullYear()} <a href="https://shiror.ren/" target="_blank">白彩恋</a>，版权所有，保留一切权利。使用 <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noopener noreferrer">Docusaurus</a> 构建。<br/>本网页使用 <a href="https://www.umeng.com/" target="_blank" rel="noopener noreferrer"><code>友盟+</code></a> 收集使用数据，详见 <a href="https://www.umeng.com/policy" target="_blank" rel="noopener noreferrer"><code>友盟+</code> 隐私权政策</a>。`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ['dart', 'bash', 'groovy']
		}
	} satisfies Preset.ThemeConfig
} satisfies Config
