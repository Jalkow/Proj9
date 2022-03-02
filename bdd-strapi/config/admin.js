module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '74d5599ceb3737e0d0b16805d96bfd5c'),
  },
});
