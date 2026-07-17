import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Call for Papers', href: getPermalink('/#call-for-papers') },
    { text: 'Speakers', href: getPermalink('/#speakers') },
    { text: 'Schedule', href: getPermalink('/#schedule') },
    { text: 'Organizers', href: getPermalink('/#organizers') },
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
    2nd Workshop on Advances in Representation Learning for Earth Observation · NeurIPS 2026, Paris ·
    Built with <a class="text-blue-600 underline dark:text-muted" href="https://astrowind.vercel.app/" target="_blank" rel="noopener">AstroWind</a> — thanks to the template authors.
  `,
};
