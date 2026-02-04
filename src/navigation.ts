import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'FAQ',
      href: '/faq',
    },
    {
      text: 'CONTACT',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    PermanentHomes.org is operated by <strong>Permanent Homes Company</strong>, a registered 501(c)(3) nonprofit organization.
  `,
};
