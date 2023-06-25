// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ehang',
  tagline: '每天进步一点点',
  url: 'https://www.ehangmaker.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  organizationName: 'ehangmaker', // Usually your GitHub org/user name.
  projectName: 'ehangmaker.top', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/EhangGroup/ehangmaker.top',
        },
        blog: {
          blogTitle: '博客',
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          editUrl:
            'https://github.com/EhangGroup/ehangmaker.top',
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'Ehang',
        logo: {
          alt: 'Logo',
          src: 'img/logo.webp',
          style: { borderRadius: '50%' }
        },
        items: [
          /*第一级目录：存放工作室简介*/
          {
            type: 'doc',
            docId: 'a_studio_profile/a_studio_profile-intro',
            position: 'left',
            label: '个人简介',
          },
          /*第二级目录：存放落地项目*/
          {
            type: 'doc',
            docId: 'b_landing_projects/b_landing_projects-intro',
            position: 'left',
            label: '落地项目'
          },
          /*第三级目录：存放创客项目*/
          {
            type: 'doc',
            docId: 'c_maker_projects/c_maker_projects-intro',
            position: 'left',
            label: '创客项目'
          },
          /*第四级目录：存放ROS开发实践*/
          {
            type: 'doc',
            docId: 'd_ros_development_practices/d_ros_development_practices-intro',
            position: 'left',
            label: 'ROS开发',
          },
          /*第五级目录：存放Linux开发实践*/
          {
            type: 'doc',
            docId: 'e_linux_development_practices/e_linux_development_practices-intro',
            position: 'left',
            label: 'Linux开发'
          },
          /*第六级目录：存放STM32开发实践*/
          {
            type: 'doc',
            docId: 'f_stm32_development_practices/f_stm32_development_practices-intro',
            position: 'left',
            label: 'STM32开发'
          },
          /*第七级目录：存放实时操作系统开发实践*/
          {
            type: 'doc',
            docId: 'g_freertos_rtthread_development_practices/g_freertos_rtthread_development_practices-intro',
            position: 'left',
            label: '实时操作系统',
          },
          /*第八级目录：存放电路设计*/
          {
            type: 'doc',
            docId: 'h_circuit_design/h_circuit_design-intro',
            position: 'left',
            label: '电路设计'
          },
          /*第九级目录：存放机械设计*/
          {
            type: 'doc',
            docId: 'i_mechanical_design/i_mechanical_design-intro',
            position: 'left',
            label: '机械设计'
          },
          /*第十级目录：存放常用工具*/
          {
            type: 'doc',
            docId: 'j_commonly_used_tools/j_commonly_used_tools-intro',
            position: 'left',
            label: '常用工具'
          },

          {
            to: '/blog',
            label: '博客',
            position: 'left'
          },
          {
            to: '/essay',
            label: '记录生活',
            position: 'left'
          },


          // {
          //   href: 'https://github.com/EhangGroup',
          //   position: 'right',
          //   label: 'GitHub',
          // },
          // {
          //   href: 'https://blog.csdn.net/qq_44343584?spm=1000.2115.3001.5343',
          //   position: 'right',
          //   label: 'CSDN',
          // },
          // {
          //   href: 'https://space.bilibili.com/314386857?spm_id_from=333.1007.0.0',
          //   position: 'right',
          //   label: 'Bilibili',
          // },
          // {
          //   href: 'https://www.douyin.com/user/self?modal_id=7119397084389854471',
          //   position: 'right',
          //   label: 'Tiktok',
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: '本站',
          //   items: [
          //     {
          //       label: '笔记',
          //       to: 'docs/notes-intro',
          //     },
          //     {
          //       label: '博客',
          //       to: 'blog',
          //     },
          //     {
          //       label: '乐趣',
          //       to: 'docs/hackfun-intro',
          //     },
          //     {
          //       label: '记录生活',
          //       to: 'essay',
          //     },
          //   ],
          // },
          {
            title: '友人帐',
            items: [
              {
                label: '强烈推荐！：余工的博客',
                href: 'https://www.yltzdhbc.top',
              },
              {
                label: '强烈推荐！：张工的博客',
                href: 'https://www.zhangshitao.top',
              },
            ],
          },
          {
            title: '我的',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/EhangGroup',
              },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/qq_44343584?spm=1000.2115.3001.5343',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/314386857?spm_id_from=333.1007.0.0',
              },
              {
                label: 'Tiktok',
                href: 'https://www.douyin.com/user/self?modal_id=7119397084389854471',
              },
            ],
          },
          {
            title: '学习链接',
            items: [
              {
                label: 'Rt_thread官网',
                href: 'https://www.rt-thread.org/document/site/#/',
              },
              {
                label: '正点原子B站主页',
                href: 'https://space.bilibili.com/394620890?spm_id_from=333.337.search-card.all.click',
              },
            ],
          },
        ],
        copyright: `亿航创客，未来可期，我们一直在路上！`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      docs: {
        sidebar: {
          hideable: true
        }
      }
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        blogSidebarTitle: '近期随笔',
        blogTitle: '记录生活',
        routeBasePath: 'essay',
        path: './essay',
      },
    ]
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
};

module.exports = config;
