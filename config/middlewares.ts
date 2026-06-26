export default [
  'strapi::errors',
  /* Replace 'strapi::security', with this snippet */
  /* Beginning of snippet */
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://augny-badminton-website.s3.fr-par.scw.cloud/',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://augny-badminton-website.s3.fr-par.scw.cloud/',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
