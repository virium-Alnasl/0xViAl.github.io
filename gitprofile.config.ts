// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'virium-Alnasl', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects & Progression',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FlareVM + REMnux',
          description:
            // eslint-disable-next-line prettier/prettier
          'I setup a Malware Analysis lab combining FlareVM and REMnux. Read more by clicking this post.',
          imageUrl:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1358%2F0*RpSjG3Ku9XI5gIdq.png&f=1&nofb=1&ipt=8847334c5d13d995f7e83ece170b2cb16316d37f043020bc31de4d3dc64b6959',
          link: 'https://docs.google.com/document/d/1g8P5ceSzk4BBug2hiVp34YE0XxLAYip-sJ99xY5sbYQ/edit?usp=sharing',
        },
        {
          title: 'Cybersecurity Learning Platform Progressions',
          description:
            // eslint-disable-next-line prettier/prettier
          'This is about my progression of my skills in multiple learning platforms! Read more by clicking this post.',
          imageUrl:
            'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2R6c2s0ejR4ZWphc2l6NnRzdWw2eDRraXdlenFlaDBjMjFubDJyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/djVVCMKG71PKVNwCtF/giphy.gif',
          link: 'https://medium.com/@0xvirial/cybersecurity-learning-platforms-progressions-aedc1662f299',
        },
        {
          title: 'SIEM Mini-Lab',
          description: 'W.I.P',
          imageUrl: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHRsajU0NWZkYjU1ZjhxOG5vaHU5M2NuZXB4ZnRiandwaHg4eXc5ZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/mEVnhMtOVOAVxmts9B/giphy.gif',
          link: 'https://www.google.com/',
        },
      ],
    },
  },
  seo: { title: '0xViriAl Site', description: '', imageURL: '' },
  social: {
    linkedin: 'djcastilloii',
    discord: 'minwu_404',
    email: 'yzacshi1316@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'JavaScript',
    'Python',
    'Incident Response',
    'Malware Analysis',
    'Phishing Analysis',
    'Threat Intelligence',
    'OSINT',
  ],
  experiences: [
    {
      company: 'PLDT-Smart ',
      position: 'Cybersecurity Intern',
      from: 'April 2024',
      to: 'October 2024',
    },
  ],
  certifications: [
    {
      name: 'Cyber Defense & Threat Hunting (CDTH)',
      body: 'GuideM',
      year: '2025',
      link: 'https://www.linkedin.com/in/djcastilloii/details/certifications/1747982254531/single-media-viewer/?type=DOCUMENT&profileId=ACoAADIuI7EBQIlwsIMaH3x2OiKn0vrb2o9_lVU',
    },
    {
      name: 'Blue Team Junior Analyst (BTJA)',
      body: 'Security Blue Team',
      year: '2025',
      link: 'https://www.linkedin.com/in/djcastilloii/details/certifications/1750172080595/single-media-viewer/?type=DOCUMENT&profileId=ACoAADIuI7EBQIlwsIMaH3x2OiKn0vrb2o9_lVU',
    },
  ],
  educations: [
    {
      institution: 'Asia Pacific College',
      degree: 'BS Computer Science with Specialization in Cybersecurity',
      from: '2020',
      to: '2024',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ` <i>"Looks cool having my badge here in the footer (^>.<^)"</i>
<img src="https://tryhackme-badges.s3.amazonaws.com/viriumAlnasl.png" alt="Your Image Badge" />
Special thanks for the template by <a class="text-primary" href="https://github.com/arifszn/gitprofile"target="_blank" rel="noreferrer">GitProfile</a>.
`,
  enablePWA: false,
};

export default CONFIG;
