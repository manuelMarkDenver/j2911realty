module.exports = ({ env }) => ({
  proxy: true,
  // url: env('APP_STRAPI_URL'), // Sets the public URL of the application.
  url: "https://j2911realty-k7b8l.ondigitalocean.app/strapi",
  app: {
    keys: env.array('APP_KEYS'),
  },
});
