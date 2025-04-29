import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sự Thật',
  tagline: 'Nơi bảo tồn lịch sử dân tộc Việt',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://truth.trungnt2910.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trungnt2910', // Usually your GitHub org/user name.
  projectName: 'truth', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Sự Thật',
      logo: {
        alt: 'Truth',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          href: 'https://github.com/trungnt2910/truth',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Trang Liên Kết',
          items: [
            {
              label: 'Blog Hiện Thực (Reality)',
              href: 'https://reality.trungnt2910.com',
            },
          ],
        },
        {
          title: 'Liên Hệ',
          items: [
            {
              label: 'Truth Social',
              href: 'https://truthsocial.com/@realTrungNguyen',
            },
            {
              label: 'X',
              href: 'https://x.com/trungnt2910',
            },
            {
              label: 'Facebook',
              href: 'https://fb.com/trungnt2910',
            },
          ],
        }
      ],
      copyright: `Copyright © ${(new Date().getFullYear() === 2025 ? "2025" : `2025 - ${new Date().getFullYear()}`)} Trung Nguyen. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
