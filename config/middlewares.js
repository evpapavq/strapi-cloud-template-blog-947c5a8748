module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
   {
    name: 'strapi::cors',
    config: {
      enabled:true,
      origin: ['http://localhost:4200',"*"],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
