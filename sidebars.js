/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

//   // But you can create a sidebar manually

//   tutorialSidebar: [
//     {
//       type: 'category',
//       label: '快速开始',
//       items: ['quick-start'],
//     },
//   ],

//   mySidebar: [
//     {
//       type: 'category',
//       label: 'Getting Started',
//       items: [
//         {
//           type: 'doc',
//           id: 'quick-start',
//         },
//       ],
//     },
//     {
//       type: 'category',
//       label: 'Docusaurus',
//       items: [
//         {
//           type: 'doc',
//           id: 'quick-start',
//         },
//         {
//           type: 'doc',
//           id: 'quick-start',
//         },
//       ],
//     },
//     {
//       type: 'link',
//       label: 'Learn more',
//       href: 'https://example.com',
//     },
//   ],   
// };

module.exports = {
  tutorialSidebar: [
    'quick-start',
    {
      type: 'doc',
      id: 'developer-docs/deployment/docker-compose-deployment',
    },

    {
      type: 'link',
      label: '开始一个纵向联邦学习',
      href: 'advance-usage/fedreated-learning/hetero-xgb',
    },
    {
      type: 'link',
      label: '开始一个横向联邦学习',
      href: 'advance-usage/fedreated-learning/homo-lr',
    },
    {
      type: 'link',
      label: 'PrimiHub社区',
      href: 'https://github.com/primihub/community',
    },
  ],
  lensonsSidebar: [{ type: 'autogenerated', dirName: 'advance-usage' }],
  developerSidebar: [
    'roadmap',
    { type: 'autogenerated', dirName: 'core-concept' },
    { type: 'autogenerated', dirName: 'developer-docs' },
    'faq',
    // 'primihub-community',
  ],
  tryItOnlineSidebar: [{ type: 'autogenerated', dirName: 'quick-start-platform' }]
};
