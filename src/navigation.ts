import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Call for Papers', href: getPermalink('/2026#call-for-papers') },
    { text: 'Speakers', href: getPermalink('/2026#speakers') },
    { text: 'Schedule', href: getPermalink('/2026#schedule') },
    { text: 'Organizers', href: getPermalink('/2026#organizers') },
    { text: '2025 edition', href: getPermalink('/2025') },
  ],
  actions: [
    {
      text: 'Submit',
      href: '#call-for-papers',
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    Workshop on Advances in Representation Learning for Earth Observation · NeurIPS 2026, Paris ·
    Built with <a class="text-blue-600 underline dark:text-muted" href="https://astrowind.vercel.app/" target="_blank" rel="noopener">AstroWind</a> — thanks to the template authors.
  `,
};
