module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'ntklsideproject@gmail.com',
          defaultReplyTo: 'ntklsideproject@gmail.com',
          testAddress: 'ntklsideproject@gmail.com',
        },
      },
    },
    // ...
});