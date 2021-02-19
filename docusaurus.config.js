module.exports = {
  title: 'Federation Registry Documentation',
  tagline: 'Documentation for the federation registry portal',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/egi_logo.gif',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Federation Registry Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/egi_logo.gif',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/rciam/rciam-federation-registry',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Explore Documentation',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Api Documentation',
              to: 'https://federation.aai-dev.grnet.gr/swagger',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
       copyright: `<img alt="grnet" src="/img/grnet-logo.png" height="50px"> </a> <br /> Copyright © ${new Date().getFullYear()} <a href="http://www.grnet.gr/"> GRNET </a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/rciam/rciam-federation-registry',
        },
        api: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://federation.aai-dev.grnet.gr/swagger',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
