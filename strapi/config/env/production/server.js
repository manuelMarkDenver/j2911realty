module.exports = ({ env }) => ({
  proxy: true,
  // url: env('APP_STRAPI_URL'), // Sets the public URL of the application.
  url: "https://104.248.147.209//strapi",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
