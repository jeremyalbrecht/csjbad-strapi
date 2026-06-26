
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'contact@augny-badminton.fr',
        defaultReplyTo: 'contact@augny-badminton.fr',
      },
    },
  },
  graphql: {
    config: {
      v4CompatibilityMode: false
    }
  },
  upload: {
    config: {
      provider: 'aws-s3', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
            secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
          },
          region: env('SCALEWAY_REGION'), // e.g "fr-par"
          endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "https://s3.fr-par.scw.cloud"
          params: {
            Bucket: env('SCALEWAY_BUCKET'),
          },
        },
      },
    },
  },
});
